const { Router } = require('express');
const typeRouter = Router();
const { getTypeHandler } = require('../handlers/getTypesHandlers');

typeRouter.get('/', getTypeHandler)

module.exports = typeRouter;
