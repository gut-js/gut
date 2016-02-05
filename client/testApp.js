var currentUsername;
var eatingPeople = [];

function addFriend(name){
  console.log('adding: ',name);
  $.ajax({
    url: '/addfriend',
    type: 'PUT',
    data: JSON.stringify({username:currentUsername,friendname:name}),
    contentType: 'application/json',
    success: function(data){
      console.log('success',data);
    },
    error: function(err){
      console.log('error',err);
    }
  })
}

function selectFriend(name){
  if (eatingPeople.indexOf(name)===-1){
    eatingPeople.push(name);
  };
  console.log('eatingPeople',eatingPeople);
}

function removeFriend(name){
  name = name.slice(1);
  console.log('removing ',name);
  $.ajax({
    url: '/removefriend',
    type: 'DELETE',
    data: JSON.stringify({username:currentUsername,friendname:name}),
    contentType: 'application/json',
    success: function(data){
      console.log('success',data);
    },
    error: function(err){
      console.log('error',err);
    }
  })
}


$(document).ready(function(){

  $('#deletePreference').click(function(){
    console.log('delete preference clicked');
    $.ajax({
      url: '/preference',
      type: 'DELETE',
      data: JSON.stringify({username:currentUsername}),
      contentType: 'application/json',
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  })

  $('#pollButton').click(function(){
    console.log('poll button');
    $.ajax({
      url: '/poll',
      type: 'GET',
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  })

  $('#restaurantSearchForm').submit(function(e){
    e.preventDefault();
    console.log('restaurant search');
    $.ajax({
      url: '/yelp',
      type: 'GET',
      data: {location:$('#cityName').val()},
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  })

  $('#eatWithFriends').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: '/eat',
      type: 'GET',
      data: {diners:JSON.stringify(eatingPeople), location:'vancouver'},
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  })

  function drawFriends(friends){
    $('#friends').html('');
    friends.forEach(function(friend){
      var username = friend.username;
      $('#friends').append('<div>'+username+'</div>');
      $('#friends').append('<button onclick="selectFriend(this.id)" id="'+username+'">Select</button>');
      $('#friends').append('<button onclick="removeFriend(this.id)" id="0'+username+'">Remove</button>');
    })
  }

  $('#searchFriends').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: '/friends',
      type: 'GET',
      data: {username: currentUsername},
      success: function(data){
        console.log('data',data);
        drawFriends(data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  });

  function drawPeople(people){
    $('#people').html('');
    people.forEach(function(person){
      $('#people').append('<div>'+person.username+'</div>');
      $('#people').append('<button onclick="addFriend(this.id)" id="'+person.username+'">Add</button>');
    });
  }

  $('#searchPeople').submit(function(e){
    e.preventDefault();
    var searchTerm = $('#peopleText').val();
    console.log('searchTerm',searchTerm);
    $.ajax({
      url: '/users',
      type: 'GET',
      data: {username: 'shin', searchTerm:searchTerm},
      success: function(data){
        console.log('success',data);
        drawPeople(data);
      },
      error: function(err){
        console.log('error',err);
      }
    });
  });

  $('#eatNear').submit(function(e){
    e.preventDefault();
    console.log('eat near called');
    $.ajax({
      url: '/eat',
      type: 'GET',
      data: {
        username: 'shin20'
      },
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    });
  });

  $('#eatForm').submit(function(e){
    e.preventDefault();
    var location = $('#eatLocation').val();
    $.ajax({
      url: '/eat',
      type: 'GET',
      data: {
        username: 'shin20',
        location: location
      },
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('error',err);
      }
    })
  })

  $('#locationForm').submit(function(e){
      e.preventDefault();
      var location = $('#location').val();
      $.ajax({
        url: '/yelp',
        type: 'GET',
        data: {location:location},
        success: function(data){
          console.log('data',data);
          var businesses = data.map(function(item){
            var keep = {
              id: item.id,
              name: item.name,
              image_url: item.image_url,
              categories: item.categories
            };
            return keep;
          })
          //console.log(businesses);
          var random1 = Math.floor(Math.random()*businesses.length);
          var business1 = businesses.splice(random1,1)[0];
          var random2 = Math.floor(Math.random()*businesses.length);
          var business2 = businesses.splice(random2,1)[0];
          //console.log('business1',business1);

          var category1 = JSON.stringify(business1.categories);
          var category2 = JSON.stringify(business2.categories);

          $('#survey').html('');
          $('#survey').append('<h1>Which do you prefer?</h1>');
          $('#survey').append('<img class="logo" id="business1" src='+business1.image_url+'>');
          $('#survey').append('<img class="logo" id="business2" src='+business2.image_url+'>');

          $('#business1').click(function(){
            recommend(business1,business2);
          });

          $('#business2').click(function(){
            recommend(business2,business1);
          })

        },
        error: function(err){
          console.log('error',err);
        }
      });
  });

  function recommend(selected,unselected){
    console.log('YEA',selected.categories);
    console.log('nah',unselected.categories);
    data = {
      username: 'shin5',
      selected: selected.categories,
      unselected: unselected.categories
    }
    $.ajax({
      url: '/preference',
      type: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data){
        console.log('success',data);
      },
      error: function(err){
        console.log('err',err);
      }

    })
    /*
    $('#survey').html('');
    $('#survey').append('You should go to:');
    $('#survey').append('<h1>'+business.name+'</h1>');
    */
  }

  $('#signupForm').submit(function(e){
      e.preventDefault();
      var username = $('#signupUsername').val();
      var password = $('#signupPassword').val();
      var data = {username:username,password:password}
      $.ajax({
          url: '/signup',
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          success: function(data){
              console.log('success');
              console.log('data', data);
          },
          error: function(err){
              console.log('error',err);
          }
      });
  });

  $('#loginForm').submit(function(e){
    e.preventDefault();
    var username = $('#loginUsername').val();
    var password = $('#loginPassword').val();
    var loginData = {username:username,password:password};
    console.log('loginData:', loginData);
    $.ajax({
      url: '/login',
      type: 'POST',
      data: JSON.stringify(loginData),
      contentType: 'application/json',
      success: function(data){
        console.log('success');
        console.log('data', data);
        currentUsername = username;
        eatingPeople.push(currentUsername);
        console.log('eatingPeople',eatingPeople);
      },
      error: function(err){
        console.log('error',err);
      }
    });
  });


})