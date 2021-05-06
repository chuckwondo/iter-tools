/**
 * @generated-from ./$collate.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { __interleave } from '../$interleave/interleave.js';

function* byComparison({ compare }, all, ...peekrs) {
  let candidate;
  while (!all.done) {
    candidate = all.value;
    for (const peekr of peekrs) {
      if (!peekr.done && compare(peekr.value, candidate.value) < 0) {
        candidate = peekr;
      }
    }

    yield candidate.value;
    candidate.advance();
  }
}

export function __collate(sources, compare) {
  return __interleave(sources, byComparison, { compare });
}

export const collate = /*#__PURE__*/ iterableCurry(__collate, {
  variadic: true,
});
