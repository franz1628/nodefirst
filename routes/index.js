const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth'));
router.use('/brand', require('./brand'));
router.use('/model', require('./model'));
router.use('/person', require('./person'));
router.use('/service', require('./service'));
router.use('/vehicle', require('./vehicle'));

module.exports = router;
