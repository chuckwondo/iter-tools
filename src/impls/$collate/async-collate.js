/**
 * @generated-from ./$collate.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncInterleave } from '../$interleave/async-interleave.js';

async function* asyncByComparison({ compare }, all, ...peekrs) {
  let candidate;
  while (!all.done) {
    candidate = all.value;
    for (const peekr of peekrs) {
      if (!peekr.done && compare(peekr.value, candidate.value) < 0) {
        candidate = peekr;
      }
    }

    yield candidate.value;
    await candidate.advance();
  }
}

export function __asyncCollate(sources, compare) {
  return __asyncInterleave(sources, asyncByComparison, { compare });
}

export const asyncCollate = /*#__PURE__*/ asyncIterableCurry(__asyncCollate, {
  variadic: true,
});
