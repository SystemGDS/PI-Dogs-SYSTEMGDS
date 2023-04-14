const { Router } = require('express');
const {
    getBreeds, getBreedsById, getTemperaments, createBreed, getBreedName
} = require('./../controllers/index.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getBreeds)
router.get('/dogs/:idRaza', getBreedsById)
router.get('/temperaments', getTemperaments)
router.post('/dogs', createBreed)
router.get('/breedName', getBreedName)


module.exports = router;
