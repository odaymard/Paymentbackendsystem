const express = require("express");
const router = express.Router();
const controller = require('../controllers/payment/payment');
const paymentModel = require('../models/payment/payment');

router.param("paymentid", function (req, res, next, value) {

  paymentModel.findOne({ paymentId: value })
    .exec()
    .then(function (payment) {
      if (!payment) {
        res.send('no payment with that id');
      } else {
        res.locals.payment = payment;
        next();
      }

    })
    .catch(function (err) {
      res.send(err)
    })
}
)

router.get("/", controller.getPayments);
router.post("/", controller.createPayment);
router.patch("/:paymentid", controller.removepayment);
router.put("/:paymentid", controller.editpayment);
module.exports = router;