
<template>
  <div id="siine-scheduler">
    <table id="table-scheduler">
      <thead>
        <tr>
          <th class="room">Room</th>
          <th v-for="(day, index) in Bookings" :day="Day = new Date(day)">{{ Day.getDate() + "   " + cutString($t("calendar.months["+(Day.getMonth())+"]"), 3) }}</th>
        </tr>
      </thead>
      
      <tr v-for="booking in Bookings" :key="booking">
 

      </tr>

    </table>

  </div>
</template>

<script>
import Utility from '../js/functions';
export default {
  name: "siine-scheduler",
  props: {
    bookings: String
  },
  methods: {
    cutString(str, len) {
      return Utility.cutString(str, len)
    },
    async Bookings() {
      return this.bookings.length ? JSON.parse(this.bookings) : [];
    }, 
    getDatesList(Bookings) {
      const Current = new Date();
      const startDate = new Date(Current)
      startDate.setDate(Current.getDate() - 31);
      const endDate = new Date(Current)
      endDate.setDate(Current.getDate() + 27);
      let days =  Utility.getDatesBetween(startDate, endDate);
      let Days = []
      let booked = []
      days.forEach(day => {
        booked = []
        Bookings.forEach( Booking => {
          
          Booking.data.forEach( booking => {
            let Date1 = new Date(day)
            let Date2 = new Date(booking.start_date)
            let Date3 = new Date(booking.end_date)
            if (Date1 >= Date2 && Date3 >= Date1 )
              booked.push(booking)
          })
        } )
        Days.push({
          'day': day,
          'booked': booked
        })
      });
      console.log(Bookings, Days)
      return Days
    }
  },
  beforeMount() {

   },
  data() {
    let dates = this.getDatesList(this.Bookings())
    return {
      Bookings: dates
    }
  }
}
</script>
<style lang="scss">
$width: 1000px;
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
    width: 1em;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px green;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: green;
    outline: 1px solid slategrey;
  }
#siine-scheduler {
  overflow-x: scroll;

}
#table-scheduler {
  width: $width;
  overflow-x: scroll;
  & td, & th {
    padding: 10px;
    text-align: left;
  }
}
.day {
  width: calc($width/10);

}
.room {
  position: sticky;
  left: 0;
  top: 0;
  background-color: red;
  width: calc($width/10);
}
</style>