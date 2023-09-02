<template> 

  <div class="view-container"> 
    <siine-viewcontrols :routes='[
        { route: "/rooms/types", class: "back", title: this.$t("buttons.back"), icon: "backward"}

      ]'/>

      <div class="form">
          <div class="p-inputgroup flex-1">
            <InputText autocomplete="off"  v-model="type_name"  :placeholder="$t('types.type.name')" /> 
          </div> 
          <div class="p-inputgroup flex-1">
              <InputNumber autocomplete="off"  v-model="number_of_beds" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_beds')" /> 
              <InputNumber autocomplete="off"  v-model="number_of_people" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_people')" /> 
              <InputNumber autocomplete="off"  v-model="number_of_babies" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_babies')" /> 
          </div>  

          <div class="switch-container p-inputgroup flex-1">
            <div class="switch">
              <label for="Refundable">{{ $t("types.type.refundable") }}</label>
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
          
          <Button severity="success" :label="$t('buttons.create')" v-on:click="addRoom()" />
          


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
      default_vat: null,
      number_of_beds: null,	
      number_of_people: null,	
      number_of_babies: null,
      refundable: true,
      usable: true,
      forceupdateDefaultPriceVat: 0
        
     }
  },
  beforeMount() {
    let that = this
    Utility.getDeferredReq('rooms/types', {}).then( response => that.loadRoomTypes(response) )
  }, 
  methods: { 
    loadRoomTypes(data) {
      this.room_types = data.status == 'success' ? data.room_types : []
    },
    addRoom() {
      let that = this
      let data = {
        room_number: that.room_number,
        room_name: that.room_name,
        room_type: that.room_type,
        description: that.description,
        floor_number: that.floor_number,
        default_price: that.default_price,	
        default_price_vat: that.default_price_vat,	
        default_vat: that.default_vat,
        number_of_beds: that.number_of_beds,	
        number_of_people: that.number_of_people,	
        number_of_babies: that.number_of_babies,
        refundable: that.refundable,
        usable: that.usable
      }
      Utility.postDeferredReq('rooms', data).then(response => {
        if (response.status == 'success') {
          if (response.code == 'room_not_added') {
          
            that.Utility.Swal.fire({
              title: that.$t("errors.title"),
              text: that.$t("errors.rooms.room_not_added"),
              icon: 'error',
              confirmButtonText: that.$t("buttons.back")
            })

          }
        } else {
          
          that.Utility.Swal.fire({
            title: that.$t("errors.title"),
            text: that.$t("errors.detected_error"),
            icon: 'error',
            confirmButtonText: that.$t("buttons.back")
          })
        }
      })
    }, 
    calculateVat() {
      let vat = this.default_vat
      let price = this.default_price
      this.default_price_vat = parseFloat(price * (1 + parseFloat(vat/100))); 
      this.forceupdateDefaultPriceVat = (new Date()).getTime()
      this.$forceUpdate()
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
