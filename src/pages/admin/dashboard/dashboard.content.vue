<template>
  <div :class="$q.screen.lt.sm ? 'q-px-md q-py-sm' : 'q-pa-lg'">
    <div :class="$q.screen.lt.sm ? '' : 'row'" class="q-pb-md items-center">
      <div
        class="col-9  text-grey-9"
        :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'"
      >
        Welcome to Dashboard
      </div>
      <div class="col">
        <q-breadcrumbs :align="$q.screen.lt.sm ? 'left' : 'right'">
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Dashboard" icon="dashboard" />
        </q-breadcrumbs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DashboardContent extends Vue {
  name: string = "dashboard-content";
}
</script>

<style></style>
