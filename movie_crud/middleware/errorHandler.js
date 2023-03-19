const errorHandler = (err, rec, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
