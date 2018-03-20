const paymentModel = require('../../models/payment/payment');
const bodyParser = require("body-parser");
const _ = require('lodash');

module.exports = {
    getPayments,
    createPayment,
    removepayment,
    editpayment,

};
async function editpayment(req, res) {
    try {
        let payment = res.locals.payment
        let update = req.body;
        _.merge(payment, update);
        payment.save()
            .then(function (payment) {
                console.log("payment updated successfuly")
                console.log(payment);
                res.send(payment);
            })
            .catch(function (err) {
                res.fail(err);
                logger.info(err);
            });

    }
    catch (err) {
        logger.info(err);
        res.fail(err);
    }
}





async function removepayment(req, res) {
    try {
        let payment = res.locals.payment
        payment.isDeleted = true;

    } catch (err) {
        logger.info(err);
        rese.fail(err);
    }

}

async function createPayment(req, res) {
    try {
        const payment = await new paymentModel(req.body);
        payment.save()
            .then(function (payment) {
                res.send(payment); //success in adding payment
            }).catch(function (err) {
                res.send(err);
            })
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

async function getPayments(req, res) {
    try {
        console.log("inside payment")
        const contractId = req.query.contractid;
        console.log(contractId)
        const from = req.query.from;
        const to = req.query.to;

        const paymentList = await paymentModel.find({
            contractId: contractId,
            time: {
                $gte: from,
                $lt: to

            }
        })
        let sumvalue = paymentList.reduce(function (acc, item) { return (!item.isDeleted)? acc + item.value:acc; }, 0);
        console.log(sumvalue)
       const  result =  {sum:sumvalue, items : {paymentList}} ;
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

