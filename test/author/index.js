import test from 'ava'
import { register } from '../../src/author'

test('should register author', async (t) => {
  const x = await Promise.resolve()
    .then(register)
    .then(() => 123)

  console.log('x', x)
})

