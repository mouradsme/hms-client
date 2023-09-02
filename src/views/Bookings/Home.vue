<template> 

    <div class="view-container"> 
        <siine-viewcontrols :routes='[
          { route: "/bookings/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>
        <span class="view-subtitle">{{ $t("bookings.title") }}</span>
        <siine-scheduler :bookings="bookings"/>

    </div>

</template>
<script> 
import Utility from '../../js/functions'
 
export default {
name: "Bookings",
components: {
   
},
data() { 
  return { 
    bookings: []
  }
},
beforeMount() {
  let that = this
  Utility.getDeferredReq('bookings/rooms', {}).then( response => that.loadBookings(response) )

},
mounted() {
  
 },
methods: { 
  loadBookings: function(data) {
        this.bookings = data.status == 'success' ? JSON.stringify(data.bookings) : JSON.stringify("")
        this.loading = false

  }
}
}
</script>

<style scoped>

</style>