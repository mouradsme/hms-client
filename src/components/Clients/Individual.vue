<template> 
        <div class="form" >
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'user']" />
                </span>
                <InputText v-model="last_name" :placeholder="$t('clients.client.last_name')" />
                <InputText v-model="first_name" :placeholder="$t('clients.client.first_name')" />
                <InputText v-model="middle_name" :placeholder="$t('clients.client.middle_name')" />
            </div>
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'user']" />
                </span>
                <InputText dir="rtl" v-model="last_name_ar" :placeholder="$t('clients.client.last_name_arabic')" />
                <InputText dir="rtl" v-model="first_name_ar" :placeholder="$t('clients.client.first_name_arabic')" />
                <InputText dir="rtl" v-model="middle_name_ar" :placeholder="$t('clients.client.middle_name_arabic')" />
            </div>
            <div class="p-inputgroup flex-1">
                <span v-tooltip.top="$t('tooltips.clients.is_db_full')" class="p-inputgroup-addon" style="gap: 10px">
                  {{ $t('clients.client.is_db_full')  }}
                <InputSwitch v-model="is_db_full" />
                </span> 
                <Calendar v-if="is_db_full" v-model="dob" :placeholder="$t('clients.client.dob')" showIcon  />
                <Calendar v-else v-model="yob" :placeholder="$t('clients.client.yob')" view="year" :dateFormat="'yy'" showIcon  />

            </div> 
              
              <div class="p-inputgroup flex-1">
                  <label for="nationality" class="p-inputgroup-addon">
                      <font-awesome-icon :icon="['fa', 'hashtag']" />
                  </label>
                  <InputText id="nationality" v-model="nationality" :placeholder="$t('clients.cards.nationality')" />
                  <label for="id_number" class="p-inputgroup-addon">
                      <font-awesome-icon :icon="['fa', 'hashtag']" />
                  </label>
                  <InputText id="id_number" v-model="id_number" :placeholder="$t('clients.cards.id_number')" />
  
              </div>
            <div class="p-inputgroup flex-1">
                <label for="pob" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'address-card']" />
                </label>
                <InputText id="pob" v-model="pob" :placeholder="$t('clients.client.pob')" />
            </div>
            <div class="p-inputgroup flex-1">
                <label for="rh" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'hand-holding-droplet']" />
                </label>
                <Dropdown id="rh" v-model="rh" :options="['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']"  :placeholder="$t('clients.client.select_rh')" class="w-full md:w-14rem" />
                <label for="gender" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'user']" />
                </label>
                <Dropdown id="gender" v-model="gender" :options="['Homme', 'Femme']"  :placeholder="$t('clients.client.gender')" class="w-full md:w-14rem" />

            </div>   
            <div class="p-inputgroup flex-1">
                <label for="phone" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'phone']" />
                </label>
                <InputText id="phone" v-model="phone" :placeholder="$t('clients.client.phone')" />
                <label for="email" class="p-inputgroup-addon">
                    <font-awesome-icon :icon="['fa', 'envelope']" />
                </label>
                <InputText id="email" v-model="email" :placeholder="$t('clients.client.email')" />

            </div>
            


            <TabView>
                <TabPanel :header="$t('clients.cards.id')">
                  <div class="p-inputgroup flex-1">
                      <InputText v-model="authority" :placeholder="$t('clients.cards.authority')" />
                      <InputText v-model="id_card_number" :placeholder="$t('clients.cards.id_card_number')" />

                  </div>
                  <hr>
                  <div class="p-inputgroup flex-1">
                      <Calendar v-model="issue_date" :placeholder="$t('clients.cards.issue_date')" showIcon/>
                      <Calendar v-model="expiry_date" :placeholder="$t('clients.cards.expiry_date')" showIcon/>

                  </div>
                  
                </TabPanel>
                <TabPanel :header="$t('clients.cards.passport')">
                  <div class="p-inputgroup flex-1">
                      <InputText v-model="pp_authority" :placeholder="$t('clients.cards.authority')" />
                      <InputText v-model="pp_card_number" :placeholder="$t('clients.cards.pp_number')" />

                  </div>
                  <hr>
                  <div class="p-inputgroup flex-1">
                      <Calendar v-model="pp_issue_date" :placeholder="$t('clients.cards.issue_date')" showIcon/>
                      <Calendar v-model="pp_expiry_date" :placeholder="$t('clients.cards.expiry_date')" showIcon/>

                  </div>
                </TabPanel>
                <TabPanel :header="$t('clients.cards.other')">
                </TabPanel>
            </TabView>
            <div class="buttons">
              <Button v-on:click="addClient()" severity="success" >{{ $t('buttons.create')  }}</Button>
            </div>  


        </div> 
</template>
<script>
import Utility from '../../js/functions'
  export default { 
    name: "individual-Form",
    data () {
      return { 
        gender: 'Homme',
        rh: 'A+',
        first_name: '',
        last_name: '',
        middle_name: '',
        first_name_ar: '',
        last_name_ar: '',
        middle_name_ar: '',
        client_type: 0,
        is_db_full: true,
        dob: null,
        yob: null,
        pob: null,
        id_number: null,
        email: null,
        phone: null,
        pp_authority: null,
        pp_card_number: null,
        pp_expiry_date: null,
        pp_issue_date: null,
        authority: null,
        id_card_number: null,
        expiry_date: null,
        issue_date: null,
        nationality: null,
        loading: false,
       }
    },
    mounted() {
     }, 
    methods: {
      addClient() {
        let that = this
        let data = {
        gender: that.gender,
        rh: that.rh,
        first_name: that.first_name,
        last_name: that.last_name,
        middle_name: that.middle_name,
        first_name_ar: that.first_name_ar,
        last_name_ar: that.last_name_ar,
        middle_name_ar: that.middle_name_ar,
        client_type: 0,
        is_db_full: that.is_db_full,
        dob: that.dob,
        yob: that.yob,
        pob: that.pob,
        id_number: that.id_number,
        email: that.email,
        phone: that.phone,
        pp_authority: that.pp_authority,
        pp_card_number: that.pp_card_number,
        pp_expiry_date: that.pp_expiry_date,
        pp_issue_date: that.pp_issue_date,
        authority: that.authority,
        id_card_number: that.id_card_number,
        expiry_date: that.expiry_date,
        issue_date: that.issue_date,
        nationality: that.nationality
        } 
        this.loading = true
        Utility.postDeferredReq('clients/individual', data).then(response => {
        if (response.status == 'success') {
          if (response.code == 'client_added') {
            window.location.href = '/clients'
          }
          if (response.code == 'client_not_added') {
          
            that.Utility.Swal.fire({
              title: that.$t("errors.title"),
              text: that.$t("errors.clients.client_not_added"),
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
 
</style>