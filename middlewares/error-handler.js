const { response } = require('express');

const errorHandler = (err, req, res = response, next) => {
    console.error(err.stack);

    res.status(500).json({
        msg: 'Something went wrong on the server',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
    });
};

module.exports = {
    errorHandler
};
