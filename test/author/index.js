import test from 'ava'
import { register } from '../../src/author'

test('should register author', () => {
  return Promise.resolve()
    .then(register)
    .then(() => 123)
    .then(console.log)
})

