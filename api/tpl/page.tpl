
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PingiPing.com Admin</title>
    
   
  </head>
  <body>
<div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>    
    <a href="javascript:void(0)" onClick="niu()">agmin</div>
    
<div>
  <img src="http://cdn.iciba.com/news/2016/0804/20160804025551286.jpg">
</div>
    
    
  </body>
        <script>
function niu() {   
  FB.getLoginStatus(function(response) {
    console.log( 'accessToken=');
     console.log( response);
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
    
    console.log( accessToken);
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
  } else {
    // the user isn't logged in to Facebook.
  }
 });
  /*
  
  FB.api("491432140996544/feed",function(response){
     var posts = response.data // posts.lenghth == 24
    console.log(response);
  }) ;  
  */
}        
        
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '1205272002845732',
              xfbml      : true,
              version    : 'v2.7'
            });
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        </script>   
</html>

