<template>
  <q-page>
    <title>Manage Books | Darayo</title>
    <ManageBooksContent />
    <AddBookDialog />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ManageBooksContent from "./manage-books/manage-books.content.vue";
import AddBookDialog from "components/dialog-components/add-books.dialog.vue";

@Component({
  components: { ManageBooksContent, AddBookDialog }
})
export default class ManageBooksContainerPage extends Vue {
  name: string = "dashboard-container-page";
}
</script>

<style></style>
