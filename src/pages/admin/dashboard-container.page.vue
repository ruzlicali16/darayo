<template>
  <q-page>
    <title>Dashboard | Darayo</title>
    <DashboardContent />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DashboardContent from "./dashboard/dashboard.content.vue";

@Component({
  components: { DashboardContent }
})
export default class DashboardContainerPage extends Vue {
  name: string = "dashboard-container-page";
}
</script>

<style></style>
