import Promise from 'bluebird'

export const read = () => {
  return Promise.delay(2000)
    .then(() => ({
      status: 200,
      message: 'read book'
    }))
}


