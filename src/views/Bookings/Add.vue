<template> 

    <div class="view-container"> 
      <siine-viewcontrols :routes='[
          { route: "/bookings", class: "back", title: this.$t("buttons.back"), icon: "backward"}
        ]'/>
        <div class="form">
            <div class="p-inputgroup flex-1">
              <InputText autocomplete="off"  v-model="room_name"  :placeholder="$t('rooms.room.name')" /> 
              <Dropdown v-model="room_type" :options="room_types" optionLabel="name" :placeholder="$t('rooms.room.type')" class="w-full md:w-14rem" />
            </div>
            <div class="p-inputgroup flex-1">
                <InputNumber autocomplete="off"  v-model="room_number" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.number')" /> 
                <InputNumber autocomplete="off"  v-model="floor_number" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.floor')" /> 
            </div> 
            <div class="p-inputgroup flex-1">
                <InputNumber autocomplete="off"  v-model="number_of_beds" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_beds')" /> 
                <InputNumber autocomplete="off"  v-model="number_of_people" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_people')" /> 
                <InputNumber autocomplete="off"  v-model="number_of_babies" inputId="withoutgrouping" :useGrouping="false"  :placeholder="$t('rooms.room.n_babies')" /> 
            </div> 
            <div class="p-inputgroup flex-1">
                <InputNumber autocomplete="off" @input="calculateVat()" mode="currency" currency="DZD"  :min="0" v-model="default_price" :placeholder="$t('rooms.room.price')" /> 
                <InputNumber autocomplete="off" @input="calculateVat()" :min="0" :max="100"  v-model="default_vat" :useGrouping="false" :placeholder="$t('rooms.room.vat')" /> 
                <InputNumber mode="currency" currency="DZD" :key="forceupdateDefaultPriceVat" v-model="default_price_vat" readonly  :placeholder="$t('rooms.room.price_vat')" /> 
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
            
            <Button severity="success" :label="$t('buttons.create')" v-on:click="addRoom()" />
            


        </div>

            
      </div>
</template>
<script>

  export default {
    name: "Add Booking",
    components: {
    },
    data () {
      return { 
        
       }
    },
    mounted() {
      
      
     }, 
    methods: {
    }
  }
</script>

<style>

 
</style>