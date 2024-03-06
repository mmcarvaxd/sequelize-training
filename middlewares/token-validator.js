exports.ValidateTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization

  if(token) {
    return next()
  }

  return res.status(403).json({error: "Token inválido"})
}