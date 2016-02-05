# SnapPea

#### Follow your gut.

## Developer Documentation
#### Tools Used:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React Router](https://github.com/rackt/react-router)
* [React Router Redux](https://github.com/rackt/react-router-redux)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.github.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)
* [MongoDB](https://www.mongodb.org/)
* [Sass](http://sass-lang.com/)
* [Bootstrap](http://getbootstrap.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Yelp API](https://www.yelp.com/developers/documentation/v2/overview)

#### To start contributing to the Gut codebase:
1. Fork the repo
2. Clone your fork locally
3. Ensure MongoDB is installed. If not, 'brew install mongod' > install MongoDB globally
4. 'mongod' > start a MongoDB instance
5. 'npm install' > server and client dependencies
7. 'webpack -w' > generates bundle.js file and compiles ES6 syntax using Babel
8. 'npm start' > runs the app on a local server
9. Visit http://localhost:5679/ on your browser for the landing page

## Front-End
### Client Application Information
SnapPea was built using React for our views and Redux for our state container and data flow management. Because of this, our client folder is broken down as follows:

```
client
├── actions
│   ├── authActions.js
│   ├── dinerActions.js
│   ├── friendActions.js
│   ├── pollActions.js
│   └── viewActions.js
│   
├── components
│   ├── AddFriend.js
│   ├── DeletePref.js
│   ├── FriendEntry.js
│   ├── Friends.js
│   ├── FriendsList.js
│   ├── FriendsPref.js
│   ├── LocationPref.js
│   ├── Map.js
│   ├── Marker.js
│   ├── Navigation.js
│   ├── Poll.js
│   ├── PollCategory.js
│   ├── ProfileHome.js
│   ├── RefinePref.js
│   ├── Register.js
│   ├── RestaurantPref.js
│   ├── SelectedFriendEntry.js
│   ├── SelectedFriends.js
│   ├── Signin.js
│   └── UberInfo.js
│   
├── containers
│   ├── HomePage.js
│   ├── Main.js
│   └── Profile.js
│  
├── reducers
│   ├── authReducer.js
│   ├── dinerReducer.js
│   ├── friendReducer.js
│   ├── pollReducer.js
│   └── viewReducer.js
│  
├── static
│   ├── assets
│   └── styles
│  
├── index.html
├── index.js
└── routes.js
```

### General

## Back-End
### Server

### REST/CRUD Outline:

### Database

## Team
* Daisy Tsao
* Shin Adachi
* Justin Tan
* Carl Bernardo
