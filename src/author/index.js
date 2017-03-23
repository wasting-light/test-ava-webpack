import Promise from 'bluebird'

export const register = () => {
  return Promise.delay(2000)
    .then(() => ({
      status: 200,
      message: 'register author'
    }))
}


