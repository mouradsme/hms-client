<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/rooms", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>

        <div class="form">
            <div class="p-inputgroup flex-1">
                <InputText v-model="room_name"  :placeholder="$t('rooms.room.name')" /> 
                <InputNumber v-model="room_number" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.number')" /> 

            </div>
            

        </div>
      </div>
</template>
<script>
import Utility from '../../js/functions'
  export default {
    name: "Add Room",
    components: {
    },
    data () {
      return {  
        room_number: 101,
        room_name: "Room 101"
          
       }
    },
    beforeMount() {
      let Users = Utility.getDefferedReq('users', {})
    },
    mounted() {
     }, 
    methods: { 
    }
  }
</script>

<style>
.form {
  margin: auto;
    width: 40rem;
    display: grid;
    gap: 1rem;
}
.radios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.radio-item {
  display: flex;
  gap: 1rem;
  margin: 5px;
  padding: 7px 22px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color:var(--white-color) ;
  cursor: pointer;
}
</style>
