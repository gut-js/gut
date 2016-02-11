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
│
├── businesses.js
├── cities.js
├── config.js
├── db.js
└── server.js
```


### REST/CRUD Outline:
To register for an account:
POST request to /signup
data: {username:’String’, password:’String’, firstname:’String’, lastname: ‘String’,  email: ‘String’}
return value: {username:String, token:String, businesses:Array}

To login:
POST request to /login
data: {username:String, password:String}
return value: {username:String, token:String}

To submit poll result:
PUT request to /preference
data: {username:’username’, selected:[array of categories],  unselected:[array of categories]}
return value: updated user data

To go out to eat:
GET request to /eat?diners=(Stringified Array of usernames)&location=location
Location is optional. If none is given, geolocation is used.
return value: array of businesses in recommended order as determined by the user’s preference

To refine user preferences:
GET request to /poll
return value: array of 20 businesses to be used in poll

To delete user preferences:
DELETE request to /preference
data: {username:String}
return value: updated user info

Friend Stuff:
To search for users in the database except for yourself:
GET request to /users?username=String&searchTerm=String
if searchTerm is an empty string, server will return all users excluding your friends. If searchTerm is provided, server will return all users whose username contains the searchTerm, excluding your friends.
return value: array of objects, each object containing a username and userID.

To add a friend:
PUT request to /addfriend
data: JSON.stringify({username:String, friendname:String})
return value: array of objects representing updated friendlist

To get all of your friends:
GET request to /friends?username=username
Return value: Array of objects representing all of your friends. Each object contains all information about a friend.

To remove a friend:
DELETE request to /removefriend
data: JSON.stringify({username:String, friendname:String})
return value: name of the removed friend

To save a restaurant into user’s beenTo property:
PUT request to /history
data: JSON.stringify({username:String, restaurantName:String, restaurantId:String})
return value: updated beenTo property for that user

To delete a user’s beenTo property:
DELETE request to /history
data: JSON.stringify({username:String})
return value: updated beenTo property for that user (which should be an empty array now)

### Database
The MongoDB/Mongoose database stores basic information about the user, as well as the user's preferences. The user schema is as shown below:
```
db.userSchema = new db.Schema ({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  firstname: {type: String},
  lastname: {type: String},
  categories: {},
  friends: {},
  beenTo: {},
  email: { type: String },
  gravatarUrl: { type: String },
  searchTerm: {type: String},
  avatarUrl: {type: String}
});
```

The preferences for that user are stored in the categories object, and is constantly updated as the algorithm learns more about the types of food that the user likes/dislikes.

## SnapPea Team
* [Daisy Tsao](https://github.com/madcurie)
* [Shin Adachi](https://github.com/shin064)
* [Justin Tan](https://github.com/justanman)
* [Carl Bernardo](https://github.com/carlbernardo)
