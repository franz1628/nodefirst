
const { Router } = require('express');
const { check } = require('express-validator');


const { validFields } = require('../middlewares/valid-fields');
const { isValidRole, emailExists, vehicleExists, brandExists, modelExists, personExists } = require('../helpers/db-validators');

const { vehicleGet,
        vehiclePut,
        vehiclePost,
        vehicleDelete,
        vehiclePatch } = require('../controllers/vehicle');

const router = Router();


router.get('/', vehicleGet );

router.put('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( vehicleExists ),
    check('role').custom( isValidRole ), 
    validFields
],vehiclePut );

router.post('/',[
    check('idBrand', 'The idBrand is required').isNumeric(),
    check('idBrand').custom(brandExists),
    check('idModel', 'The idModel is required').isNumeric(),
    check('idModel').custom(modelExists),
    check('idPerson', 'The idPerson is required').isNumeric(),
    check('idPerson').custom(personExists),
    validFields
], vehiclePost );

router.delete('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( vehicleExists ),
    validFields
],vehicleDelete );

router.patch('/', vehiclePatch );


module.exports = router;
