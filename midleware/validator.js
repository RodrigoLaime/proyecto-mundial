const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];/* informacion en foema dinamica si es post viene en body
si es un get viene en params
o tambien puede venir en query */
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));//el reques se iso de m¿forma incorrecta
    }
    next();
  }
}

module.exports = validatorHandler;
