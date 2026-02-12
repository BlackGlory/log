# log
## Install
```sh
npm install --save @blackglory/log
# or
yarn add @blackglory/log
```

## Usage
```ts
import { log } from '@blackglory/log'

const value = log('foo', 'bar')
// Equivalent to
const value = (console.log('foo', 'bar'), 'bar')
```

## API
### log
```ts
function log<T>(...params: [...unknown[], T]): T
```

### time
```ts
function time<T>(message: string, fn: () => T): T
function time<T>(message: string, fn: () => PromiseLike<T>): Promise<T>
```

### timeFunction
```ts
function timeFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => Result
): (...args: Args) => Result
```

### timeAsyncFunction
```ts
function timeAsyncFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => PromiseLike<Result>
): (...args: Args) => Promise<Result>
```

### group
```ts
export function group<T>(label: string, fn: () => T): T
export function group<T>(label: string, fn: () => PromiseLike<T>): Promise<T>
export function group<T>(fn: () => T): T
export function group<T>(fn: () => PromiseLike<T>): Promise<T>
```
