const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const stripe = require("stripe")(functions.config().stripe.secret_key);

exports.makeStripeCharge = functions.firestore
  .document("stripe/{stripeId}/purchases/{purchaseId}")
  .onCreate(event => {
    const payment = event.data();
    console.log(payment);

    return admin
      .firestore()
      .doc("stripe/{stripeId}/purchases/{purchaseId}")
      .get("stripe/{stripeId}/purchases/")
      .then(() => {
        const amount = payment.priceForStripe;
        const source = payment.token.id;
        const currency = "usd";
        const charge = { amount, currency, source };

        return stripe.charges.create(charge);
      })
      .then(charge => {
        admin
          .firestore()
          .doc("stripe/{stripeId}/purchases/{purchaseId}/charge/{chargeId}")
          .set(charge);
        return console.log("I worked!!!");
      })
      .catch(error => {
        throw new Error(error);
      });
  });
