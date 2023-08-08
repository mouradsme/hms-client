import $ from 'jquery'
var Utility = { 
    csrfConn() {
        let csrfToken = Address + "csrf"

        $.ajax({
            type: "GET",
            url: csrfToken,
            data: "",
            dataType: "json",
           // headers : { "X-CSRF-TOKEN" : csrfResponse.csrf },
            success: function(csrfResponse) { 
                let data = {
                    "_token": csrfResponse.csrf,
                    username, password
                }
            }
        })
    },
     testConn(ip, callbackSuccess, callbackFailure) {
        let Address = "http://" + ip + "/public/api/"
        let testURL = Address + "test"
        $.ajax({
            type: "GET",
            url: testURL,
            data: {},
            dataType: "json",
            success: function (response) {
                if (response.status == 'success' && response.code == 'connected')
                    callbackSuccess()
                else
                callbackFailure()
            }
        });
    },

    login(username, password, callbackSuccess, callbackFailure) {
        let Address = "http://" + localStorage.getItem('ip_address') + "/public/api/"
        let loginURL = Address + "authenticate"
        
        $.ajax({
            type: "GET",
            url: loginURL,
            data: {username, password},
            contentType: 'application/json',

            success: function (response) {
                if (response.status == 'success')
                    callbackSuccess(response)
                else
                callbackFailure(response)
            }
        });
    },
    getReq(endpoint, data, callbackSuccess, callbackFailure) {
        let UserAuth = JSON.parse(window.localStorage.UserAuth)
        $.ajax({
            type: "GET",
            url: window.API_URL + endpoint + "?auth_username=" + UserAuth.username + "&auth_password=" + UserAuth.password,
            data: data,
            contentType: 'application/json',

            success: function (response) {
                if (response.status == 'success')
                    callbackSuccess(response)
                else
                callbackFailure(response)
            }
        });

    }

}
  
export default Utility