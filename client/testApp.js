$(document).ready(function(){
    $('#locationForm').submit(function(e){
        e.preventDefault();
        var location = $('#location').val();
        $.ajax({
          url: '/yelp',
          type: 'GET',
          data: {location:location},
          success: function(data){
            console.log('success');
          },
          error: function(err){
            console.log('error',err);
          }
        });
    });

    $('#signupForm').submit(function(e){
        e.preventDefault();
        var username = $('#signupUsername').val();
        var password = $('#signupPassword').val();
        data = {username:username,password:password}
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
    data = {username:username,password:password};
    console.log('data:', data);
    $.ajax({
        url: '/login',
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


})