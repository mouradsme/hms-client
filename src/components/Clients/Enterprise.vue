<template> 
  <div class="form" >
      <div class="p-inputgroup flex-1">
          <span class="p-inputgroup-addon">
              <font-awesome-icon :icon="['fa', 'user']" />
          </span>
          <InputText v-model="designation" :placeholder="$t('clients.company.designation')" />
      </div>
      <div class="p-inputgroup flex-1">
          <span class="p-inputgroup-addon">
              <font-awesome-icon :icon="['fa', 'hashtag']" />
          </span>
          <InputText v-tooltip.top="$t('clients.company.rib_full')" v-model="rib" :placeholder="$t('clients.company.rib')" />
          <InputText v-tooltip.top="$t('clients.company.nif_full')" v-model="nif" :placeholder="$t('clients.company.nif')" />
      </div>
      <div class="p-inputgroup flex-1">
          <span class="p-inputgroup-addon">
              <font-awesome-icon :icon="['fa', 'hashtag']" />
          </span>
          <InputText v-tooltip.top="$t('clients.company.nis_full')" v-model="nis" :placeholder="$t('clients.company.nis')" />
          <InputText v-tooltip.top="$t('clients.company.nrc_full')" v-model="nrc" :placeholder="$t('clients.company.nrc')" />
      </div>
      <div class="p-inputgroup flex-1">
          <span class="p-inputgroup-addon">
              <font-awesome-icon :icon="['fa', 'hashtag']" />
          </span>
          <InputText v-tooltip.top="$t('clients.company.nai_full')" v-model="nai" :placeholder="$t('clients.company.nai')" />
          <InputText v-model="social_cap" :placeholder="$t('clients.company.social_cap')" />

      </div>
        
      <div class="p-inputgroup flex-1">
          <span class="p-inputgroup-addon">
              <font-awesome-icon :icon="['fa', 'money-bill']" />
          </span>
          <InputText v-tooltip.top="$t('clients.company.bank_name')" v-model="bank_name" :placeholder="$t('clients.company.bank_name')" />
          <InputText v-model="bank_account_number" :placeholder="$t('clients.company.bank_account_number')" />

      </div>
        
        

      <div class="buttons">
        <Button v-on:click="addClient()" severity="success" >{{ $t('buttons.create')  }}</Button>
      </div>  


  </div> 
</template>
<script>
import Utility from '../../js/functions'
export default { 
name: "enterprise-Form",
data () {
return { 
  designation: null,
  rib: null,
  nis: null,
  nif: null,
  nai: null,
  nrc: null,
  bank_name: null,
  bank_account_number: null,
  social_cap: null,
  loading: false,
 }
},
mounted() {
}, 
methods: {
addClient() {
  let that = this
  let data = {
    designation: that.designation,
    rib: that.rib,
    nis: that.nis,
    nif: that.nif,
    nai: that.nai,
    nrc: that.nrc,
    bank_name: that.bank_name,
    bank_account_number: that.bank_account_number,
    social_cap: that.social_cap
  } 
  this.loading = true
  Utility.postDeferredReq('clients/enterprise', data).then(response => {
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