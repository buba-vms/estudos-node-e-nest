const authorize = (req, res, next) => {
  const { user } = req.query
  if (user) {
    console.log('authorize')
    next()
  }

  console.log('authorize')
  next()
}

module.exports = authorize
