/**
 * @generated-from ./$batch.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from '../../internal/iterable';
declare function batch(size: number): <T>(iterable: InputIterable<T>) => GeneratorIterator<T[]>;
declare function batch<T = any>(size: number, iterable: InputIterable<T>): GeneratorIterator<T[]>;
export default batch;