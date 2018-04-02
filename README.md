# Paymentbackendsystem
# Intro
 RestfullApi for payment system. 
# Details:
 to start the app.
 #npm start
 # to get information about payments for specific contract and specific duration
Method:GET 
#localhost:3001/payment?contractid=123&from=2016-12-12&to=2018-12-14 contractid:contract number from:start date to:end date
# to create a new payment
 Method :POST #localhost:3001/payment for example you can add this body to the POST {
"contractId":"123", "paymentId":"p1", "value":"60", "time":"2018-12-12", "isDeleted":true
}
# To change payment fileds 
 Mehod:PUT
 localhost:3001/payment?paymentid=p2 paymentid:payment number
# to delete payment 
Method:PATCH(we can use DELETE as well) but becasue delete her is only change the isdeleted value from false to true I prefered using PATCH
 localhost:3001/payment?paymentId=p1
# Things to add in future:
 1-Adding more models
 2-Using docker
 3-Using some front end technology like react

