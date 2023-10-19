
const { Router } = require('express');
const { check } = require('express-validator');


const { validFields } = require('../middlewares/valid-fields');
const { modelExists, brandExists } = require('../helpers/db-validators');

const { modelGet,
        modelPut,
        modelPost,
        modelDelete,
        modelPatch } = require('../controllers/model');

const router = Router();


router.get('/', modelGet );

router.put('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( modelExists ),
    validFields
],modelPut );

router.post('/',[
    check('idBrand', 'The idBrand is required').isMongoId(),
    check('idBrand').custom( brandExists),
    check('description', 'The description is required').not().isEmpty(),
    validFields
], modelPost );

router.delete('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( modelExists ),
    validFields
],modelDelete );

router.patch('/', modelPatch );





module.exports = router;