$(document).ready(function(){
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
        },
        error: function(err){
          console.log('error',err);
        }
      });
    });


})