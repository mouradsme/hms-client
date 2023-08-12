
<template>
  <div class="view-container">
        <siine-viewcontrols :routes='[
          { route: "/rooms/add", class: "add", title: this.$t("buttons.create"), icon: "plus"}
        ]'/>

      <DataView :value="rooms" :layout="layout">
          <template #header>
              <div class="flex justify-content-end">
                  <DataViewLayoutOptions v-model="layout" />
              </div>
          </template>

          <template #list="slotProps">
              <div class="col-12">
                  <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                      <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                          <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                              <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                              <div class="flex align-items-center gap-3">
                                  <span class="flex align-items-center gap-2">
                                      <i class="pi pi-tag"></i>
                                      <span class="font-semibold">{{ slotProps.data.username }}</span>
                                  </span>
                               </div>
                          </div>
                          <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                              <span class="text-2xl font-semibold">${{ slotProps.data.id }}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </template>

          
    <template #grid="slotProps">
        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag"></i>
                        <span class="font-semibold">{{ slotProps.data.username }}</span>
                    </div>
                </div>
                <div class="flex flex-column align-items-center gap-3 py-5">
                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-2xl font-semibold">${{ slotProps.data.role }}</span>
                </div>
            </div>
        </div>
    </template>
      </DataView>
  </div>
</template>

<script>
import Utility from '../../js/functions'
  export default {
    name: "Rooms",
    components: {
    },
    data () {
      return { 
        loading: true,
        rooms: [],
        layout: 'grid'
      }
    },
    beforeMount() {
      let that = this
      Utility.getDeferredReq('rooms', {}).then( response => that.loadRooms(response) )
      
    }, 
    methods: {
        loadRooms(data) {
          this.$emit('DataFetched')
        this.rooms = data.status == 'success' ? data.rooms : []
         this.loading = false

      }
    }
  }
</script>

<style >
.loader-container {
  width: 100%;
  text-align: center;
}
</style>