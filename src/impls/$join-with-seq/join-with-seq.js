/**
 * @generated-from ./$join-with-seq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { toArray } from '../$to-array/to-array.js';

export function* joinWithSeq(source, separatorSeq) {
  const _separatorSeq = toArray(separatorSeq);
  let isFirst = true;

  for (const item of source) {
    if (!isFirst) yield* _separatorSeq;
    yield* item;
    isFirst = false;
  }
}

export default /*#__PURE__*/ iterableCurry(joinWithSeq);