
const { Router } = require('express');
const { check } = require('express-validator');

const { brandExists } = require('../helpers/db-validators');
const {
    validFields,
    haveRole,
    validRole,
    validToken,
} = require('../middlewares')
// const { validFields } = require('../middlewares/valid-fields');
// const { validToken } = require('../middlewares/valid-token');
// const { validRole, haveRole } = require('../middlewares/valid-role');

const { brandGet,
        brandPut,
        brandPost,
        brandDelete,
        brandPatch } = require('../controllers/brand');

const router = Router();


router.get('/',[validToken,validRole] ,brandGet );

router.put('/:id',[
    validToken,
    validRole,
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( brandExists ),
    validFields
],brandPut );

router.post('/',[
    validToken,
    validRole,
    haveRole('ADMIN_ROLE'),
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