import Utility from './functions'
 
const API = {
    lastResult: null,
    getResults() {
        return this.lastResult
    }, 
    loadRoomTypes() {
        
    },
    async loadUsers() {
        let result = null
        
        await Utility.getReq('users', {}, function(response) {
          result = response.users
         }, function(err) {
        })
        return result
        
    },

    async addUser(data) {
        let that = this
        await Utility.postReq('users', data, function(response) {
          that.lastResult = response
         }, function(err) {
        })

    }, 
 
}
export default API