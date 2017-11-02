

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


Website: https://johnbaldwin3.github.io/authentication-redux-app 


This project was given to students to help with authentication while using Redux and React. The following write up is the assignment the student's were given for this project. 


# Getting Started

- **Be sure to view the API docs for this project** [HERE](https://github.com/twhitacre/simple-rails-auth/blob/master/README.md)

- To get started you will need to use `create-react-app` to quickly scaffold a project. You should migrate your components into a `components` folder in the `src` directory and the styles into a `styles` folder in the `src` directory. Link up all pages to make sure they working and test using `npm run start` in the console, use Ctrl+c to exit.

- You will need use `npm install --save redux react-redux react-router-dom redux-thunk` in the terminal to save Redux, React Router, and Redux-Thunk your project dependencies and make it available for import.

- You will should also `npm install --save js-cookie` , `npm install --save superagent`, `npm install --save immutability-helper`. These extra library dependencies should be used in the same manner that the recent lessons have taught you to use them to help you achieve a working application.

- You may also want to look at **redux-form** and **reactstrap** as other options to help you with this project.

- You will need to create an application that completes the following tasks:
  - Allows a user to sign up, with a name, email, password, and secret.
  - This should send a token back from the server and stored as a cookie for future reference.
  - The user will then be able to login to the application and view the secret they posted, only if they are validated as the correct user.
  - The user should be able to log out of the application, thus destroying the cookie and requiring another login to the application to see the "secret" data.
  - If the user is not logged in or incorrectly tries to log in without a token, the screen should display that the user is not authorized for the content.

- The application will need to be styled and polished. Remember Bootstrap 4 for quick styling, or any other CSS scaffolding libraries out there.

- Again, the [API](https://github.com/twhitacre/simple-rails-auth/blob/master/README.md) you will use to sign up, login, store the secret message, and retrieve the message from can be viewed [HERE](https://github.com/twhitacre/simple-rails-auth/blob/master/README.md).

### Hard Mode:

- Use `redux-form` to create a form that can be validated easily and meshes well with Redux.

- Correctly get the `logout` method to work and destroy the cookie.

# Results

Once complete, you should see the following functionality in your application:

- [SecretKeeper.gif](https://tiy-learn-content.s3.amazonaws.com/8172189f-SecretKeeper.gif)
