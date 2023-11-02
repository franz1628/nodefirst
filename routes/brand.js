
const { Router } = require('express');
const { check } = require('express-validator');


const { validFields } = require('../middlewares/valid-fields');
const { brandExists } = require('../helpers/db-validators');
const { validToken } = require('../middlewares/valid-token');

const { brandGet,
        brandPut,
        brandPost,
        brandDelete,
        brandPatch } = require('../controllers/brand');

const router = Router();


router.get('/',[validToken] ,brandGet );

router.put('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( brandExists ),
    validFields
],brandPut );

router.post('/',[
    check('description', 'The description is required').not().isEmpty(),
    validFields
], brandPost );

router.delete('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( brandExists ),
    validFields
],brandDelete );

router.patch('/', brandPatch );





module.exports = router;