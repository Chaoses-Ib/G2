import { createLibrary } from '../../../src/stdlib';
import {
  Cartesian,
  Polar,
  Transpose,
  Parallel,
  Fisheye,
  Helix,
  Theta,
  Reflect,
  ReflectX,
  ReflectY,
  FisheyeX,
  FisheyeY,
  Radial,
} from '../../../src/coordinate';
import { Constant, Field, Transform, Column } from '../../../src/encode';
import {
  Interval,
  Rect,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Cell,
  Area as AreaGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Box as BoxGeometry,
  Vector as VectorGeometry,
  Link as LinkGeometry,
  LineX,
  LineY,
  Range,
  RangeX,
  RangeY,
  Connector,
} from '../../../src/mark';
import {
  Category10,
  Category20,
  SequentialBlue,
  SequentialDarkBlue,
  SequentialGreen,
  SequentialDarkGreen,
  SequentialGrey,
  SequentialOrange,
  SequentialPink,
  SequentialRed,
  SequentialYellow,
  SequentialPurple,
  SequentialYellowOrange,
  SequentialYellowGreen,
  SequentialPinkPurple,
  SequentialGreenBlue,
  DivergingGreenYellow,
  DivergingRedBlue,
  DivergingGreenRed,
  DivergingRedPurple,
} from '../../../src/palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
  Sqrt,
  Sequential,
} from '../../../src/scale';
import {
  Rect as RectShape,
  HollowRect,
  Line as LineShape,
  Smooth,
  HV,
  VH,
  HVH,
  Bowtie,
  Cross,
  Diamond,
  Hexagon,
  HollowBowtie,
  HollowDiamond,
  HollowHexagon,
  HollowPoint,
  HollowSquare,
  HollowTriangle,
  HollowTriangleDown,
  Hyphen,
  LinePoint,
  Plus,
  Point as PointShape,
  Square,
  Tick,
  Triangle,
  TriangleDown,
  Text,
  Badge,
  Connector as ConnectorShape,
  Area,
  SmoothArea,
  Step,
  SmoothEdge,
  VHVEdge,
  Arc,
  Image,
  Polygon,
  Ribbon,
  Box,
  LineXY,
  Funnel,
  Pyramid,
  Vector,
  Link,
  Label,
} from '../../../src/shape';
import { Light } from '../../../src/theme';
import {
  AxisX,
  AxisY,
  LegendCategory,
  LegendContinuous,
  TitleComponent,
} from '../../../src/component';
import {
  ScaleInX,
  ScaleOutX,
  ScaleInY,
  ScaleOutY,
  FadeIn,
  FadeOut,
  Morphing,
  WaveIn,
} from '../../../src/animation';
import {
  ElementActive,
  ElementSelected,
  Tooltip,
  Fisheye as FisheyeInteraction,
  ElementHighlightByColor,
  ElementHighlightByX,
  ElementHighlight,
  ElementListHighlight,
  LegendActive,
  LegendHighlight,
  Brush,
  BrushHighlight,
  BrushVisible,
  ActiveRegion,
  EllipsisText,
} from '../../../src/interaction';
import {
  Layer,
  Flex,
  Mark,
  View,
  Square as CompositionSquare,
  Matrix,
  Circle,
  Keyframe,
} from '../../../src/composition';
import { Pack } from '../../../src/adjust';
import {
  MaybeTitleX,
  MaybeTooltipY,
  MaybeZeroX,
  MaybeZeroY1,
  MaybeStackY,
  MaybeSeries,
  MaybeTooltipPosition,
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  MaybeIdentityX,
  MaybeIdentityY,
  MaybeTupleX,
  MaybeTupleY,
  StackY,
  DodgeX,
  StackEnter,
  NormalizeY,
  Jitter,
  JitterX,
  SymmetryY,
  DiffY,
  Select,
  SelectX,
  SelectY,
  GroupX,
  SortX,
  FlexX,
} from '../../../src/transform';
import {
  Fetch,
  SortBy,
  FilterBy,
  Map,
  Pick,
  Rename,
  Subset,
  Fold,
  Inline,
  Custom,
  Cluster,
  Tree,
  Sankey,
  Arc as ArcTransform,
  WordCloud,
} from '../../../src/data';
import { HideOverlap, DodgeY } from '../../../src/labelTransform';

describe('stdlib', () => {
  it('createLibrary() should returns expected builtin', () => {
    expect(createLibrary()).toEqual({
      'data.fetch': Fetch,
      'data.inline': Inline,
      'data.sortBy': SortBy,
      'data.filterBy': FilterBy,
      'data.pick': Pick,
      'data.rename': Rename,
      'data.subset': Subset,
      'data.fold': Fold,
      'data.custom': Custom,
      'data.map': Map,
      'data.cluster': Cluster,
      'data.tree': Tree,
      'data.sankey': Sankey,
      'data.arc': ArcTransform,
      'data.wordCloud': WordCloud,
      // 'transform.voronoi': Voronoi,
      'transform.maybeZeroY1': MaybeZeroY1,
      'transform.maybeZeroX': MaybeZeroX,
      'transform.maybeStackY': MaybeStackY,
      'transform.maybeTitleX': MaybeTitleX,
      'transform.maybeTooltipY': MaybeTooltipY,
      'transform.maybeTooltipPosition': MaybeTooltipPosition,
      'transform.maybeSeries': MaybeSeries,
      'transform.stackY': StackY,
      'transform.dodgeX': DodgeX,
      'transform.jitter': Jitter,
      'transform.jitterX': JitterX,
      'transform.symmetryY': SymmetryY,
      'transform.diffY': DiffY,
      'transform.stackEnter': StackEnter,
      'transform.normalizeY': NormalizeY,
      'transform.select': Select,
      'transform.selectX': SelectX,
      'transform.selectY': SelectY,
      'transform.groupX': GroupX,
      'transform.maybeSize': MaybeSize,
      'transform.maybeZeroY': MaybeZeroY,
      'transform.maybeKey': MaybeKey,
      'transform.sortX': SortX,
      'transform.flexX': FlexX,
      'transform.maybeTupleY': MaybeTupleY,
      'transform.maybeTupleX': MaybeTupleX,
      'transform.maybeIdentityY': MaybeIdentityY,
      'transform.maybeIdentityX': MaybeIdentityX,
      'coordinate.cartesian': Cartesian,
      'coordinate.polar': Polar,
      'coordinate.helix': Helix,
      'coordinate.transpose': Transpose,
      'coordinate.theta': Theta,
      'coordinate.reflect': Reflect,
      'coordinate.reflectX': ReflectX,
      'coordinate.reflectY': ReflectY,
      'coordinate.parallel': Parallel,
      'coordinate.fisheye': Fisheye,
      'coordinate.fisheyeX': FisheyeX,
      'coordinate.fisheyeY': FisheyeY,
      'coordinate.radial': Radial,
      'encode.constant': Constant,
      'encode.field': Field,
      'encode.transform': Transform,
      'encode.column': Column,
      'mark.interval': Interval,
      'mark.rect': Rect,
      'mark.line': Line,
      'mark.point': PointGeometry,
      'mark.text': TextGeometry,
      'mark.cell': Cell,
      'mark.area': AreaGeometry,
      'mark.link': LinkGeometry,
      'mark.image': ImageGeometry,
      'mark.polygon': PolygonGeometry,
      'mark.box': BoxGeometry,
      'mark.vector': VectorGeometry,
      'mark.lineX': LineX,
      'mark.lineY': LineY,
      'mark.connector': Connector,
      'mark.range': Range,
      'mark.rangeX': RangeX,
      'mark.rangeY': RangeY,
      'palette.category10': Category10,
      'palette.category20': Category20,
      'palette.sequentialBlue': SequentialBlue,
      'palette.sequentialDarkBlue': SequentialDarkBlue,
      'palette.sequentialGreen': SequentialGreen,
      'palette.sequentialDarkGreen': SequentialDarkGreen,
      'palette.sequentialGrey': SequentialGrey,
      'palette.sequentialOrange': SequentialOrange,
      'palette.sequentialPink': SequentialPink,
      'palette.sequentialRed': SequentialRed,
      'palette.sequentialYellow': SequentialYellow,
      'palette.sequentialPurple': SequentialPurple,
      'palette.sequentialYellowOrange': SequentialYellowOrange,
      'palette.sequentialYellowGreen': SequentialYellowGreen,
      'palette.sequentialPinkPurple': SequentialPinkPurple,
      'palette.sequentialGreenBlue': SequentialGreenBlue,
      'palette.divergingGreenYellow': DivergingGreenYellow,
      'palette.divergingRedBlue': DivergingRedBlue,
      'palette.divergingGreenRed': DivergingGreenRed,
      'palette.divergingRedPurple': DivergingRedPurple,
      'scale.linear': Linear,
      'scale.ordinal': Ordinal,
      'scale.band': Band,
      'scale.identity': Identity,
      'scale.point': Point,
      'scale.time': Time,
      'scale.log': Log,
      'scale.pow': Pow,
      'scale.sqrt': Sqrt,
      'scale.threshold': Threshold,
      'scale.quantile': Quantile,
      'scale.quantize': Quantize,
      'scale.sequential': Sequential,
      'shape.interval.rect': RectShape,
      'shape.interval.hollow': HollowRect,
      'shape.interval.funnel': Funnel,
      'shape.interval.pyramid': Pyramid,
      'shape.rect.rect': RectShape,
      'shape.rect.hollow': HollowRect,
      'shape.cell.cell': RectShape,
      'shape.cell.hollow': HollowRect,
      'shape.line.line': LineShape,
      'shape.line.hv': HV,
      'shape.line.vh': VH,
      'shape.line.hvh': HVH,
      'shape.line.smooth': Smooth,
      'shape.point.bowtie': Bowtie,
      'shape.point.cross': Cross,
      'shape.point.diamond': Diamond,
      'shape.point.hexagon': Hexagon,
      'shape.point.hollowBowtie': HollowBowtie,
      'shape.point.hollowDiamond': HollowDiamond,
      'shape.point.hollowHexagon': HollowHexagon,
      'shape.point.hollow': HollowPoint,
      'shape.point.hollowSquare': HollowSquare,
      'shape.point.hollowTriangle': HollowTriangle,
      'shape.point.hollowTriangleDown': HollowTriangleDown,
      'shape.point.hyphen': Hyphen,
      'shape.point.line': LinePoint,
      'shape.point.plus': Plus,
      'shape.point.point': PointShape,
      'shape.point.square': Square,
      'shape.point.tick': Tick,
      'shape.point.triangle': Triangle,
      'shape.point.triangleDown': TriangleDown,
      'shape.text.text': Text,
      'shape.area.area': Area,
      'shape.area.smooth': SmoothArea,
      'shape.area.step': Step,
      'shape.link.smooth': SmoothEdge,
      'shape.link.vhv': VHVEdge,
      'shape.link.arc': Arc,
      'shape.link.link': Link,
      'shape.image.image': Image,
      'shape.polygon.polygon': Polygon,
      'shape.polygon.ribbon': Ribbon,
      'shape.box.box': Box,
      'shape.vector.vector': Vector,
      'shape.label.label': Label,
      'shape.text.badge': Badge,
      'shape.lineX.line': LineXY,
      'shape.lineY.line': LineXY,
      'shape.connector.connector': ConnectorShape,
      'shape.range.range': RectShape,
      'shape.rangeX.range': RectShape,
      'shape.rangeY.range': RectShape,
      'theme.light': Light,
      'component.axisX': AxisX,
      'component.axisY': AxisY,
      'component.legendCategory': LegendCategory,
      'component.legendContinuous': LegendContinuous,
      'component.title': TitleComponent,
      'animation.scaleInX': ScaleInX,
      'animation.scaleOutX': ScaleOutX,
      'animation.scaleInY': ScaleInY,
      'animation.scaleOutY': ScaleOutY,
      'animation.fadeIn': FadeIn,
      'animation.fadeOut': FadeOut,
      'animation.morphing': Morphing,
      'animation.waveIn': WaveIn,
      'interaction.elementActive': ElementActive,
      'interaction.elementSelected': ElementSelected,
      'interaction.elementHighlight': ElementHighlight,
      'interaction.elementHighlightByX': ElementHighlightByX,
      'interaction.elementHighlightByColor': ElementHighlightByColor,
      'interaction.elementListHighlight': ElementListHighlight,
      'interaction.legendActive': LegendActive,
      'interaction.legendHighlight': LegendHighlight,
      'interaction.tooltip': Tooltip,
      'interaction.fisheye': FisheyeInteraction,
      'interaction.brush': Brush,
      'interaction.brushHighlight': BrushHighlight,
      'interaction.brushVisible': BrushVisible,
      'interaction.activeRegion': ActiveRegion,
      'interaction.ellipsisText': EllipsisText,
      'composition.layer': Layer,
      'composition.flex': Flex,
      'composition.mark': Mark,
      'composition.view': View,
      'composition.square': CompositionSquare,
      'composition.matrix': Matrix,
      'composition.circle': Circle,
      'composition.keyframe': Keyframe,
      'adjust.pack': Pack,
      'labelTransform.hideOverlap': HideOverlap,
      'labelTransform.dodgeY': DodgeY,
    });
  });
});
