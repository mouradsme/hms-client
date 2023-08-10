<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/rooms", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>

        <div class="form">
            <div class="p-inputgroup flex-1">
              <InputText v-model="room_name"  :placeholder="$t('rooms.room.name')" /> 
              <Dropdown v-model="room_type" :options="room_types" optionLabel="name" :placeholder="$t('rooms.room.type')" class="w-full md:w-14rem" />
            </div>
            <div class="p-inputgroup flex-1">
                <InputNumber v-model="room_number" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.number')" /> 
                <InputNumber v-model="floor_number" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.floor')" /> 
            </div> 
            <div class="p-inputgroup flex-1">
                <InputNumber v-model="number_of_beds" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_beds')" /> 
                <InputNumber v-model="number_of_people" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_people')" /> 
                <InputNumber v-model="number_of_babies" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_babies')" /> 
            </div> 
            <div class="p-inputgroup flex-1">
                <InputNumber v-model="default_price" :placeholder="$t('rooms.room.price')" /> 
                <InputNumber v-model="default_tax" :useGrouping="false" :placeholder="$t('rooms.room.vat')" /> 
                <InputNumber v-model="default_price_vat" disabled :placeholder="$t('rooms.room.price_vat')" /> 
            </div>

            <div class="switch-container p-inputgroup flex-1">
              <div class="switch">
                <label for="Refundable">{{ $t("rooms.room.refundable") }}</label>
                <InputSwitch id="Refundable" v-model="refundable" /> 
              </div>
              <div class="switch">
                <label for="Usable">{{ $t("rooms.room.usable") }}</label>
                <InputSwitch id="Usable" v-model="usable" />
              </div>
            </div>




            <h3>{{ $t('rooms.room.description') }}</h3>
            <div class="p-inputgroup flex-1">
              <Editor v-model="description" editorStyle="height: 20rem" />

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
        room_number: null,
        room_name: '',
        room_type: 0,
        room_types: [],
        description: '',
        floor_number: null,
        default_price: null,	
        default_price_vat: null,	
        default_tax: null,
        number_of_beds: null,	
        number_of_people: null,	
        number_of_babies: null,
        refundable: true,
        usable: true
          
       }
    },
    beforeMount() {
      let that = this
      Utility.getDefferedReq('roomtypes', {}).then( response => that.loadRoomTypes(response) )
    }, 
    methods: { 
      loadRoomTypes(data) {
        this.room_types = data.status == 'success' ? data.room_types : []

      }
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
div.switch-container {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column; 
  place-items: center;
}
div.switch {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column; 
  place-items: center;
}
</style>
