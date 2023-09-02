import $ from 'jquery'
import Swal from 'sweetalert2'
var Utility = { 
    Swal: Swal,
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
        let Address = "http://" + ip + window.API_PATH
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
        let Address = "http://" + localStorage.getItem('ip_address') + window.API_PATH
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
    getDeferredReq(endpoint, data) {
        var defer = $.Deferred(); 
        let UserAuth = JSON.parse(window.localStorage.UserAuth)
        $.ajax({
            type: "GET",
            url: window.API_URL + endpoint + "?auth_username=" + UserAuth.username + "&auth_password=" + UserAuth.password,
            data: data,
            contentType: 'application/json',

            success: function (response) {
                if (response.status == 'success')
                    defer.resolve(response)
                else
                defer.reject(response)
            }, 
            error: function(req, status, err) { 
              defer.reject(err); 
            } 
        });
        return defer.promise();

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

    },
    postDeferredReq(endpoint, data) {
        let defer = $.Deferred()
        let UserAuth = JSON.parse(window.localStorage.UserAuth) 
        var settings = {
            "url": window.API_URL + endpoint + "?auth_username=" + UserAuth.username + "&auth_password=" + UserAuth.password,
            "method": "POST",
            "data": data,
            "timeout": 0,
            "headers": {
             },
          };
          
          $.ajax(settings).done(function (response) {
            if (response.status == 'success')
                defer.resolve(response)
            else
            defer.reject(response)
          })    
          return defer.promise()

    },
    postReq(endpoint, data, callbackSuccess, callbackFailure) {

        let UserAuth = JSON.parse(window.localStorage.UserAuth) 

        var settings = {
            "url": window.API_URL + endpoint + "?auth_username=" + UserAuth.username + "&auth_password=" + UserAuth.password,
            "method": "POST",
            "data": data,
            "timeout": 0,
            "headers": {
             },
          };
          
          $.ajax(settings).done(function (response) {
            if (response.status == 'success')
                callbackSuccess(response)
            else
            callbackFailure(response)
          });       

    },
    
    getDatesBetween(startDate, endDate) {
        const currentDate = new Date(startDate.getTime());
        const dates = [];
        while (currentDate <= endDate) {
          dates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    },

    cutString(str, len) {
        return str.substring(0, len)
    }

}
  
export default Utility