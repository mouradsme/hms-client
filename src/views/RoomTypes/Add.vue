<template> 

  <div class="view-container"> 
    <siine-viewcontrols :routes='[
        { route: "/rooms/types", class: "back", title: this.$t("buttons.back"), icon: "backward"}

      ]'/>

      <div class="form">
          <div class="p-inputgroup flex-1">
            <InputText autocomplete="off"  v-model="name"  :placeholder="$t('types.type.name')" /> 
          </div> 
          <div class="p-inputgroup flex-1">
              <InputNumber autocomplete="off"  v-model="default_number_of_beds" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_beds')" /> 
              <InputNumber autocomplete="off"  v-model="default_number_of_people" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_people')" /> 
              <InputNumber autocomplete="off"  v-model="default_number_of_babies" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('types.type.n_babies')" /> 
          </div>  

          <div class="switch-container p-inputgroup flex-1">
            <div class="switch">
              <label for="Refundable">{{ $t("types.type.refundable") }}</label>
              <InputSwitch id="Refundable" v-model="default_refundable" /> 
            </div>
          </div>

          <h3>{{ $t('rooms.room.description') }}</h3>
          <div class="p-inputgroup flex-1">
            <Editor v-model="description" editorStyle="height: 20rem" />

          </div>
          
          <Button severity="success" :label="$t('buttons.create')" v-on:click="addRoomType()" />
          


      </div>
    </div>
</template>
<script>
import Utility from '../../js/functions'

export default {
  name: "Add Room Type",
  components: {
  },
  data () {
    return {  
      name: '',
      description: '',
      default_number_of_beds: null,	
      default_number_of_people: null,	
      default_number_of_babies: null,
      default_refundable: true
     }
  },
  beforeMount() {
    let that = this
  }, 
  methods: { 
    addRoomType() {
      let that = this
      let data = {
        name: that.name,
        description: that.description,
        default_number_of_beds: that.default_number_of_beds,	
        default_number_of_people: that.default_number_of_people,	
        default_number_of_babies: that.default_number_of_babies,
        default_refundable: that.default_refundable,
      }
      Utility.postDeferredReq('types', data).then(response => {
        if (response.status == 'success') {
          
          if (response.code == 'roomtype_added') {
              Utility.Swal.fire({
                title: that.$t("success.title"),
                text: that.$t("success.rooms.roomtype_added"),
                icon: 'success',
                confirmButtonText: that.$t("buttons.ok")
              })
              
              that.name = ''
              that.description = ''
              that.default_number_of_beds = null	
              that.default_number_of_people = null
              that.default_number_of_babies = null

            }

          if (response.code == 'roomtype_not_added') {
          
            that.Utility.Swal.fire({
              title: that.$t("errors.title"),
              text: that.$t("errors.rooms.roomtype_not_added"),
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
