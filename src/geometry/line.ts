import { Vector } from '@antv/coord';
import { group } from 'd3-array';
import { isParallel } from '../utils/coordinate';
import { Mark, MarkComponent as MC, Vector2 } from '../runtime';
import { LineGeometry } from '../spec';
import { baseChannels, baseInference } from './utils';

export type LineOptions = Omit<LineGeometry, 'type'>;

/**
 * Convert value for each channel to line shapes.
 */
export const Line: MC<LineOptions> = () => {
  const line: Mark = (index, scale, value, coordinate) => {
    const { series: S, x: X, y: Y } = value;

    // Because x and y channel is not strictly required in Line.props,
    // it should throw error with empty x or y channels.
    if (X === undefined || Y === undefined) {
      throw new Error('Missing encode for x or y channel.');
    }

    // Group data into series.
    // There is only one series without specified series encode.
    const series = S ? Array.from(group(index, (i) => S[i]).values()) : [index];
    const I = series.map((group) => group[0]);
    const xoffset = scale.x?.getBandWidth?.() || 0;
    // A group of data corresponds to one line.
    const P = Array.from(series, (I) => {
      return I.map((i) =>
        coordinate.map([X[i][0] + xoffset / 2, Y[i][0]]),
      ) as Vector2[];
    });
    return [I, P];
  };

  const parallel: Mark = (index, scale, value, coordinate) => {
    // Extract all value for position[number] channels.
    const PV = Object.entries(value)
      .filter(([key]) => key.startsWith('position'))
      .map(([, value]) => value);

    // Because position channel is not strictly required in Line.props,
    // it should throw error with empty position values.
    if (PV.length === 0) {
      throw new Error('Missing encode for position channel.');
    }

    // One data corresponds to one line.
    const P = Array.from(index, (i) => {
      // Transform high dimension vector to a list of two-dimension vectors.
      // [a, b, c] -> [d, e, f, g, h, i]
      const vector = PV.map((pv) => +pv[i]);
      const vectors = coordinate.map(vector) as Vector;

      // Two-dimension vectors are stored in a flat array, so extract them.
      // [d, e, f, g, h, i] -> [d, e], [f, g], [h, i]
      const points = [];
      for (let i = 0; i < vectors.length; i += 2) {
        points.push([vectors[i], vectors[i + 1]]);
      }
      return points;
    });
    return [index, P];
  };

  return (index, scale, value, coordinate) => {
    const mark = isParallel(coordinate) ? parallel : line;
    return mark(index, scale, value, coordinate);
  };
};

Line.props = {
  defaultShape: 'line',
  channels: [
    ...baseChannels(),
    { name: 'x' },
    { name: 'y' },
    { name: 'position' },
    { name: 'size' },
    { name: 'series', scale: 'identity' },
  ],
  infer: [
    ...baseInference(),
    { type: 'maybeSeries' },
    { type: 'maybeSplitPosition' },
  ],
  shapes: ['line', 'smooth'],
};
