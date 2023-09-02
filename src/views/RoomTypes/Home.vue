<template> 

    <div class="view-container"> 
        <siine-viewcontrols :routes='[
          { route: "/rooms/type/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>
        
        <DataTable :value="types" tableStyle="min-width: 50rem">
          <Column field="id" :header="$t('types.type.id')"></Column>
          <Column field="name" :header="$t('types.type.name')"></Column>
          <Column field="default_number_of_beds" :header="$t('types.type.n_beds')"></Column>
          <Column field="default_number_of_people" :header="$t('types.type.n_people')"></Column>
          <Column field="default_number_of_babies" :header="$t('types.type.n_babies')"></Column>
          <Column field="default_refundable" :header="$t('types.type.refundable')">
            <template #body="slotProps">
                {{ $t("types.isrefundable." + slotProps.data.default_refundable) }}
            </template> 
          </Column>
 
    
     
      </DataTable>       
      <siine-loading v-if="loading" />

      </div>
</template>
<script> 
import Utility from '../../js/functions'
  export default {
    name: "Users",
    components: {
    },
    data () {
       return { 
        loading: true,
        types: [],
      }
    },
    beforeMount() {
      let that = this
      Utility.getDeferredReq('rooms/types', {}).then( response => that.loadRoomTypes(response) )
    }, 
    methods: {
      loadRoomTypes(data) {
        this.types = data.status == 'success' ? data.room_types : []
        this.loading = false
      } 
    }
  }
</script>
 