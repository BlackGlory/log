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
function log<T>(...data: [...any[], T]): T
```
