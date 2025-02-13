import { defineProps } from '../../../src/api/props';
import { Node } from '../../../src/api/node';

describe('defineProps', () => {
  it('defineProps([...]) should define value prop', () => {
    const N = defineProps([{ type: 'value', name: 'a' }])(Node);
    const n = new N({ a: 1 });
    expect(n.a()).toBe(1);
    const n1 = n.a(2);
    expect(n1.a()).toBe(2);
    const n2 = n.a(undefined);
    expect(n2.a()).toBe(undefined);
  });

  it('definedProps([...]) should define keyed value prop', () => {
    const N = defineProps([{ type: 'value', name: 'a', key: 'b' }])(Node);
    const n = new N({});
    n.a(2);
    expect(n.value).toEqual({ b: 2 });
  });

  it('defineProps([...]) should define array prop', () => {
    const N = defineProps([{ type: 'array', name: 'a' }])(Node);
    const n = new N({ a: [1] });
    expect(n.a()).toEqual([1]);
    const n1 = n.a(2);
    expect(n1.a()).toEqual([1, 2]);
    const n2 = n1.a([1, 2, 3]);
    expect(n2.a()).toEqual([1, 2, 3]);

    const arr = [1, 2, 3];
    const n3 = n2.a(arr);
    expect(n3.a()).toBe(arr);
    expect(n3.a()).toEqual(arr);
    arr.push(4);
    expect(n3.a()).toEqual(arr);

    const n4 = n3.a(undefined);
    expect(n4.a()).toEqual([1, 2, 3, 4, undefined]);
  });

  it('definedProps([...]) should define keyed array prop', () => {
    const N = defineProps([{ type: 'array', name: 'a', key: 'b' }])(Node);
    const n = new N({});
    n.a(2);
    expect(n.value).toEqual({ b: [2] });
  });

  it('defineProps([...]) should define object prop', () => {
    const N = defineProps([{ type: 'object', name: 'a' }])(Node);
    const n = new N({ a: { b: 1 } });
    expect(n.a()).toEqual({ b: 1 });
    const n1 = n.a('b', 2);
    expect(n1.a()).toEqual({ b: 2 });
    const n2 = n1.a({ b: 3 });
    expect(n2.a()).toEqual({ b: 3 });
    const n3 = n2.a(false);
    expect(n3.a()).toEqual(false);
    const n4 = n3.a(null);
    expect(n4.a()).toEqual(null);
    const n5 = n4.a(undefined);
    expect(n5.a()).toEqual(undefined);
  });

  it('definedProps([...]) should define keyed object prop', () => {
    const N = defineProps([{ type: 'object', name: 'a', key: 'b' }])(Node);
    const n = new N({});
    n.a('a', 1);
    expect(n.value).toEqual({ b: { a: 1 } });
  });

  it('defineProps([...]) should define node prop', () => {
    const N = defineProps([{ type: 'node', ctor: Node, name: 'a' }])(Node);
    const n = new N();
    const n1 = n.a();
    expect(n1.parentNode).toBe(n);
    expect(n.children[0]).toBe(n1);
    expect(n1).toBeInstanceOf(Node);
  });

  it('definedProps([...]) should define container prop', () => {
    const N = defineProps([{ type: 'container', ctor: Node, name: 'a' }])(Node);
    const n = new N();
    const n1 = n.a();
    expect(n1.parentNode).toBe(n);
    expect(n.children[0]).toBe(n1);
    expect(n1).toBeInstanceOf(Node);
    expect(n.type).toBeNull();
  });
});
