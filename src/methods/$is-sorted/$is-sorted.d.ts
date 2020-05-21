import { $Promise } from '../../../generate/async.macro';

import { $SourceIterable } from '../../types/$iterable';

declare function $isSorted(iterable: $SourceIterable<any>): $Promise<boolean>;

declare function $isSorted<T>(
  comparator: (a: T, b: T) => number,
  iterable: $SourceIterable<T>,
): $Promise<boolean>;

export default $isSorted;
