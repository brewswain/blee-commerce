# Blee-commerce

This project was began the 19th December, 2019.

---

This project is made with React and simulates an eCommerce platform. My goal is to create my own platform that builds on the lessons taught in my React course, but has my own design while following certain design principles.

## Technologies used

- React
- Redux
- Firebase
- Auth0
- Cloud FUnctions

# Site Overview

## HomePage

This homepage utilizes React-Router-DOM to aid in navigation, as seen in the files:

- directory-component.jsx
- menu-item.component.jsx

In the initial iteration, I used state to provide options to the menu-items as props in my directory component, including the hat's section's "linkUrl' property. Then, inside my menu-item component, I used the withRouter HOC to provide it access to match and history props.

I used history.push() to make our MenuItems send us to a dynamically generated url based on the linkUrl provided:

```
    onClick={() => history.push(`${match.url}${linkUrl}`)}
```

This demonstrates the ability to dynamically Route as needed.

---

## Authentication Page

The sign in/sign up page was designed to be as visually simple as possible, to go along with the generally minimalistic design used with the rest of the site. The authentication process itself was mainly handled by Google Firebase's very robust auth system. In this case I chose to use Auth0 and regular email/password validation. Please note that even though I chose to limit the authentication to Google sign in and email/password, this authentication flow could be utilized to allow different platforms to be used.

---

## Shop Page

The shop Page once again uses React Router to aid in navigation, which allows us to be routed to the CategoryPage component dynamically based on what link we use. This is seen by the following code:

```
 <Route
  path={`${match.path}/:categoryId`}
  render={props => (
              <CategoryPageWithSkeleton isLoading={loading} {...props} />
  )}
  />
```

The /:categoryId refers to our dynamic Id that we set to be equal to our category names, eg: hats, jackets, etc.

Also, you probably noticed the <CategoryPageWithSkeleton /> Component. This simply
refers to a Higher Order Component(HOC) that we created that works with another library called [react-loading-skeleton-placeholders](https://github.com/ToddWebDev/react-loading-skeleton).

I wanted to use this library to help me with my conditional rendering to show users that content was loading without the need for a spinner.

Displaying the Shop content itself was a matter of mapping out our individual ShopItem components into a container component called ShopPreview.

---

## Category Page

Definitely the Flashiest page of the site, we once again mapped out our ShopItem components to render our products, but we used dynamically generated classNames:

```
<div className={`${isCategory ? "large-shop-item" : "shop-item"} `}>
```

That relied on props that were passed in to the CategoryPage's ShopItem component to allow us to dynamically style this page without having to remake extensions and repeat code.

We also used [fullpage.js](https://alvarotrigo.com/react-fullpage/) to make our fullscreen navigation more pleasing to behold.

---

## Checkout Page

From a design Point of View, the aim was to make a simple yet intuitive design for the shopper's UX. Using Redux Actions etc, we're able to manipulate unit quantity and even remove items from our Cart from this page.

Our payment process is handled by stripe, which will be expanded on below.

## Stripe Integration

Firstly, by using Stripe's own StripeCheckout component that they provided for us, a lot of the initial work is handled for us. We configured the component by passing in props:

```
 <StripeCheckout
      label="Pay Now"
      name="blee Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}.`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
```

Of these, we want to pay particular attention to 'token'. The token refers to an object that stripe requires to process payments, including a token id. We set our test public stripe API key in this component (StripeCheckoutButton), as well as set actions to occur when we receive the aforementioned Stripe 'token':

```
  const onToken = token => {
    console.log(token);
    migrateStripePayments(token, priceForStripe);
    emptyCart();
  };
```

console.log(token) and emptyCart() are both very self explanatory, but migrateStripePayments are where things get more interesting. In this case, we made a utility function inside of our firebase.utils.js file that migrates our stripe token and price to our firestore backend.

This ensures that we have our information that we need to send to stripe to process our payment. Our next step was to use google's cloud functions to detect payments being migrated to our firestore, that then makes the request to stripe using the secret key that was also provided to us. Please note that in this case we set those into firebase's environment by using the command:

```
firebase functions:config:set
```

Please view functions/index.js to see the code we used to process our payment:

```
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
```

As we can see, we used stripe's library with our secret key to process our payment and make our stripe.charges.create(charge) call.

---
