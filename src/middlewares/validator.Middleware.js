export const validateSchema = (schema) => (req, res, next) => {
  try {
    //los schemas vienen con metodos. En este caso el parse es para ejecutar la validacion
    schema.parse(req.body); //el parametro es la informacion contra la que se va a comparar, en este caso es la que viene por body
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.errors.map((error) => error.message) }); //esto es por la forma en que zod envia los errores
  }
};
