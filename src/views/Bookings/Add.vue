<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/bookings", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>
        <div id="ReservationForm" class="form">
            <div class="flex  gap-1">
              <div class="flex flex-column gap-2">
                <label for="room_type">{{$t('rooms.room.type')}}</label>
                <Dropdown v-model="room_type" :options="room_types" id="room_type" optionLabel="name" :placeholder="$t('rooms.room.type')" class="w-full md:w-14rem" />
              </div> 
                
              <div class="flex flex-column gap-2">
                <label for="floor">{{$t('rooms.room.floor')}}</label>
                <InputNumber autocomplete="off" id="floor" v-model="floor" :placeholder="$t('rooms.room.floor')" /> 
              </div>
            </div> 

            <div class="flex flex-3 gap-1">
              <div class="flex flex-column gap-2">
                <label for="number_of_beds">{{$t('rooms.room.n_beds')}}</label>
                <InputNumber autocomplete="off" id="number_of_beds" v-model="number_of_beds" :placeholder="$t('rooms.room.n_beds')" /> 
              </div>

              <div class="flex flex-column gap-2">

                <label for="number_of_people">{{$t('rooms.room.n_people')}}</label>
                <InputNumber autocomplete="off" id="number_of_people"  v-model="number_of_people" :placeholder="$t('rooms.room.n_people')" /> 
          
              </div>
              
              <div class="flex flex-column gap-2">

                <label for="number_of_babies">{{$t('rooms.room.n_babies')}}</label>
                <InputNumber autocomplete="off" id="number_of_babies"  v-model="number_of_babies" :placeholder="$t('rooms.room.n_babies')" /> 
          
              </div>
                
            </div> 
 
            <div class="flex flex-column gap-2">

              <label for="">{{$t('bookings_add.period')}}</label>
            
            </div>
 
            <div class="p-inputgroup flex-1">
              <Calendar v-model="dates" selectionMode="range" :manualInput="false" />


               </div> 
 
            
            <Button severity="success" :label="$t('buttons.available')" v-on:click="getAvailableRooms()" />
            


        </div>

            
      </div>
</template>
<script>
  import Utility from '../../js/functions';
  export default {
    name: "Add Booking",
    components: {
    },
    data () {
      return { 
        room_types: [],
        room_type: null,
        number_of_people: 1,
        number_of_beds: 1,
        number_of_babies: 0,
        dates: null, 
        floor: null
       }
    },
    mounted() {
      let that = this
      Utility.getDeferredReq('rooms/types', {}).then( (response) => {
        that.loadRoomTypes(response)
      } )
      
     }, 
    methods: {
      loadRoomTypes(data) {
        this.room_types = data.status == 'success' ? data.room_types : []

      },
      getAvailableRooms() {
        let that = this
        let data = {
          room_type: that.room_type,
          number_of_babies: that.number_of_babies,
          number_of_beds: that.number_of_beds,
          number_of_people: that.number_of_babies,
          dates: that.dates,
          floor: that.floor
        }
        Utility.postDeferredReq('booking/availability', data).then( response => {
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="scss">
#ReservationForm {

  & .input {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 100px auto;
    justify-content: start;
    align-items: center;


  }
}
 
</style>