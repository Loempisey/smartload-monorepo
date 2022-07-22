export function initFacebookSdk() {
    return new Promise((resolve) => {
      if (typeof window === "undefined") return;
      // wait for facebook sdk to initialize before starting the react app
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '727408775237369',
          cookie: true,
          xfbml: true,
          version: "v14.0",
        });
  
        FB.getLoginStatus(function (response) {
          console.log(response);
        });
      };
  
      // load facebook sdk script
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
  }


  export function loginFacebook(setAccount) {
    FB.login(function (response) {
      console.log(response);
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        FB.api("/me", function (response) {
            console.log(response.name);
            setAccount(response.id);
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  }

  export function getPages(userId, setPages) {
    const route = `/${userId}/accounts`;

    console.log(route);
    FB.api(route, function (response) {
      if (response && !response.error) {
        setPages(response);
      }
    });
  }
  
  export function logoutFacebook() {
    FB.logout(function (response) {
      console.log(response);
      window.location.reload();
    });
  }

