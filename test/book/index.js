import test from 'ava'
import { log } from './helpers'
import { read } from '../../src/book'

test('should read book', () => {
  return Promise.resolve()
    .then(read)
    .then(log)
})

