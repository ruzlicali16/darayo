<template>
  <q-footer class="text-white">
    <q-toolbar class="bg-blue-5">
      <q-toolbar-title
        class="text-overline q-py-md"
        :class="this.$q.screen.lt.sm ? 'text-center' : ''"
      >
        <q-btn flat round size="sm" icon="fab fa-facebook" />
        <q-btn flat round size="sm" icon="fab fa-twitter" />
        <q-btn flat round size="sm" icon="fab fa-instagram" />
        <q-btn flat round size="sm" icon="fab fa-linkedin" />
        | Meranaw Folktales <q-icon name="copyright" size="xs" />
      </q-toolbar-title>
    </q-toolbar>
    <q-banner class="bg-white text-black text-center">
      <span class="text-overline" style="font-size: 10px">
        <q-icon name="code" size="20px" />
        Developed by: Mohamed Rusli Dipatuan Cali
      </span>
    </q-banner>
  </q-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Footer extends Vue {
  name: string = "footer-component";
}
</script>

<style></style>
