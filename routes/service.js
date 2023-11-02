
const { Router } = require('express');
const { check } = require('express-validator');


const { validFields } = require('../middlewares/valid-fields');
const { isValidRole, emailExists, serviceExists } = require('../helpers/db-validators');

const { serviceGet,
        servicePut,
        servicePost,
        serviceDelete,
        servicePatch } = require('../controllers/service');

const router = Router();


router.get('/', serviceGet );

router.put('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( serviceExists ),
    check('role').custom( isValidRole ), 
    validFields
],servicePut );

router.post('/',[
    check('description', 'The description is requireds').isLength({ min: 2 }),
    check('description').custom(serviceExists),
    validFields
], servicePost );

router.delete('/:id',[
    check('id', 'It is not a valid ID').isMongoId(),
    check('id').custom( serviceExists ),
    validFields
],serviceDelete );

router.patch('/', servicePatch );


module.exports = router;
