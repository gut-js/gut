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

#### APIs Used:
* [Yelp API](https://www.yelp.com/developers/documentation/v2/overview)
* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro?hl=en_US)
* [Google Maps Geolocation API](https://developers.google.com/maps/documentation/geolocation/intro?hl=en_US)
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/?hl=en_US)
* [Google Places API Web Service](https://developers.google.com/places/?hl=en_US)
* [Uber API](https://developer.uber.com/docs)

#### To start contributing to the Gut codebase:
* Fork the repo
* Clone your fork locally
* Ensure MongoDB is installed. If not, install MongoDB globally
```
brew install mongod
```
* Start a MongoDB instance
```
mongod
```
* Create a config.js file in the root of the server directory
```
server
└── config.js
// your config file will contain the following:
module.exports = {
  google_api_key: 'INSERT KEY HERE',
  uberClientId: 'INSERT_CLIENT_ID_HERE',
  uberServerToken: 'INSERT_SERVER_TOKEN_HERE'
};
```
* Install server and client dependencies
* Generate bundle.js file and compile ES6 syntax using Babel
* Run the app on a local server
```
npm install
webpack -w
npm start
```
* Visit http://localhost:5679/ on your browser for the landing page

## Front-End
### Client Application Information
SnapPea leverages React to render our views. We use Redux by Dan Abramov to facilitate our state management. Because of this, our client folder is broken down as follows:

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

Below, you'll find our container and component structure:

```
Index.js
└── Main.js
    ├── HomePage.js // container
    │   └── Navigation.js
    │       ├── SignIn.js
    │       └── Register.js
    │  
    └── Profile.js // container
        ├── Navigation.js
        │
        ├── Poll.js
        │   └── PollCategory.js
        │   
        └── ProfileHome.js
            ├── LocationPref.js
            │
            ├── FriendsPref.js
            │   ├── SelectedFriends.js
            │   │   └── SelectedFriendEntry.js
            │   │
            │   └── FriendsList.js
            │       └── FriendEntry.js
            │   
            ├── RestaurantPref.js
            │   ├── Map.js
            │   │   └── Marker.js
            │   │
            │   └── UberInfo.js
            │   
            ├── Friends.js
            │   ├── AddFriend.js
            │   │
            │   └── FriendsList.js
            │       └── FriendEntry.js
            │      
            └── RefinePref.js
                ├── Poll.js
                │   └── PollCategory.js
                │
                └── DeletePref.js

```

### Redux and Application State

State management for SnapPea utilizes Redux. The following directories manage our state:

  * reducers
  * actions
  * containers

For every action file, there is a corresponding reducer file.
* Auth - Manages the logged in state of the user
* Diner - Manages the state of the user's recommendations
* Friend - Manages the state of the user's friends and friend search queries
* Poll - Manages the state of the preferences poll (selected, unselected, businesses displayed, etc.)
* View - Manages the state of the views displayed when logged in

All API calls are made using [redux-thunk](https://github.com/gaearon/redux-thunk) middleware within the reducers. These actions are mapped to our components via mapDispatchToProps() within the containers. The containers are also where state is mapped as props and the store is passed down to our components to render.

### Views

All views are within the components directory. Please view the diagram above for the hierarchy.

## Back-End
The Snap-Pea Custom RESTful API is built with Node.js, Node Express, MongoDB, and Mongoose. Its restaurant data is powered by Yelp's Search API.

### Server
The Node.js/Express server has the following routes and functions.
```
server
├── routes
│   ├── addFriendRoute.js
│   ├── authenticationRoute.js
│   ├── eatRoute.js
│   ├── friendsRoute.js
│   ├── historyRoute.js
│   ├── loginRoute.js
│   ├── oauthSigninRoute.js
│   ├── photoRoute.js
│   ├── pollRoute.js
│   ├── preferenceRoute.js
│   ├── removeFriendRoute.js
│   ├── signupRoute.js
│   ├── uberRoute.js
│   ├── usersRoute.js
│   └── yelpRoute.js
│
├── functions
│   ├── getGeolocationData.js
│   ├── getRecommendation.js
│   ├── historyToArray.js
│   ├── request_uber.js
│   └── request_yelp.js
```


### REST/CRUD Outline:

### Database

## SnapPea Team
* [Daisy Tsao](https://github.com/madcurie)
* [Shin Adachi](https://github.com/shin064)
* [Justin Tan](https://github.com/justanman)
* [Carl Bernardo](https://github.com/carlbernardo)
