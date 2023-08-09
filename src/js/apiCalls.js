import Utility from './functions'
 
const API = {
    lastResult: null,
    loading: false,
    getResults() {
        return this.lastResult
    },
    async loadUsers() {
        let that = this
        this.loading = true
        await Utility.getReq('users', {}, function(response) {
          that.lastResult = response.users
          that.loading = false
         }, function(err) {
          that.loading = false
        })
        
    },

    async addUser(data) {
        let that = this
        this.loading = true
        await Utility.postReq('users', data, function(response) {
          that.lastResult = response
          that.loading = false
         }, function(err) {
          that.loading = false
        })

    }
}
export default API