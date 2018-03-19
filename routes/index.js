const bodyParser = require('body-parser');
const payment= require("./payment");
module.exports = function (app) {
    app.use("/payment",payment);
    app.use(function (req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

