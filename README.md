### Link
web: https://shop-only.herokuapp.com/ <br>
backend: https://github.com/prkshadhkr/shopping-backend<br>
Stripe API: https://stripe.com/docs/payments/integration-builder

### Developers:
  1. Clone the project
  2. Create **secret.js** inside **src** directory
  3. In secret.js add following:<br>
     _const STRIPE_SECRET_KEY = YOUR_STRIPE_KEY <br>
     export { STRIPE_SECRET_KEY }_ <br>
     (Note: visit https://stripe.com/ to get YOUR_STRIPE_KEY)<br>

### Users: 
  1. Create  a login
  2. Browse product.
  3. Add / remove product
  4. Add reviews, ratings etc.
  5. Confirm product
  6. Proceed to checkout
  7. Add shipping info
  8. Add card info

### Improvements:
  1. Database updates whenever the user confirms the cart info before proceeding for checkout. It would be nice if the database updates only when the payment is successful. 
  2. Currently, cart items remain in local storage as long as the user uses the same device and does not logout. So we could improve by making a separate table to store cart info so that cart items can be accessible from multiple devices or after relogin.
  3. Add pagination
  4. Make different layouts for product display.
  5. Have searhing ability so that user can search product.
  6. Add filter so that customer can browse items quickly based on category, department, gender, use etc.
  7. Add like/dislike and other reviews related fonts.
  8. Have an ability to switch light/dark background.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
