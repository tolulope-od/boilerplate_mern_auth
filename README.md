# User Auth App (Boilerplate)

## Table of Contents

1. <a href="#hosted-app">Link to Hosted App</a>
2. <a href="#tech-stack-used">Tech Stack Used</a>
3. <a href="#application-features">Application Features</a>
4. <a href="#how-to-use">How To Use</a>
5. <a href="#api-endpoints">API endpoints</a>
6. <a href="#author">Author</a>

## Link to Hosted App

https://auth-boilerplate-app.herokuapp.com/

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Html]()
- [React](https://reactjs.org/)

## Application Features

- Register a user
- Login a user

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/tolulope-od/mailfeed.git
# Install dependencies
$ npm install

# Run the app
$ npm run dev

```

The app uses an mLab database, so to use this, you might need to create an account on mLab and link your database to it.

This app is simply a boilerplate for user authorization for a MERN stack app and can be used as a starting point to build a more complex application.

## API endpoints

```
POST Request -> localhost:5000/api/users/register
POST Request -> localhost:5000/api/users/login
GET Request -> localhost:5000/api/users/current_user
```

## Author

Odueke Tolulope
