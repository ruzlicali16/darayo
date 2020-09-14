<template>
  <div :class="$q.screen.lt.sm ? 'q-px-md q-py-sm' : 'q-pa-lg'">
    <div :class="$q.screen.lt.sm ? '' : 'row'" class="q-pb-md items-center">
      <div
        class="col-9  text-grey-9"
        :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'"
      >
        Manage Books
      </div>
      <div class="col">
        <q-breadcrumbs :align="$q.screen.lt.sm ? 'left' : 'right'">
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Manage Books" icon="library_books" />
        </q-breadcrumbs>
      </div>
    </div>
    <q-table
      class="shadow-3"
      title="Treats"
      row-key="id"
      :data="data"
      :columns="columns"
      :grid="$q.screen.lt.sm"
      :filter="filter"
      :loading="loading"
      :pagination="initialPagination"
      @request="onRequest"
    >
      <template v-slot:top>
        <q-btn
          color="deep-orange"
          :disable="loading"
          label="Add Books"
          @click="addBookDialog = true"
          icon="add"
        />
        <q-space />
        <q-input
          dense
          debounce="300"
          color="deep-orange"
          placeholder="Search"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width class="text-grey-8">
            Action
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn
              round
              class="q-mr-xs"
              size="sm"
              color="green"
              icon="edit"
              title="Edit"
            />
            <q-btn
              round
              size="sm"
              color="red-5"
              icon="visibility"
              title="View"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { db } from "src/firestore/firebaseInit";

@Component
export default class DashboardContent extends Vue {
  name: string = "dashboard-content";

  loading: boolean = false;
  filter: any = "";
  rowCount: number = 10;
  columns: any[] = [
    {
      name: "desc",
      required: true,
      label: "Title",
      align: "left",
      field: (row: any) => row.title,
      format: (val: any) => `${val}`,
      sortable: true
    },
    {
      name: "category",
      align: "left",
      label: "Category",
      field: "category",
      sortable: true
    },
    {
      name: "genre",
      align: "left",
      label: "Genre",
      field: "genre",
      sortable: true
    },
    {
      name: "timestamp",
      label: "Date uploaded",
      field: "timestamp",
      align: "left",
      sortable: true
    }
  ];
  data: any[] = [];

  initialPagination: any = {
    rowsPerPage: 15
  };

  created() {
    this.getBooks();
  }

  // UI Logic Computed
  get addBookDialog(): boolean {
    return this.$store.state.siteNav.addBookDialog;
  }
  set addBookDialog(val: boolean) {
    this.$store.dispatch("siteNav/addBookDialog", val);
  }

  onRequest(props: any) {
    this.data = [];
    this.loading = false;
  }

  // Methods
  getBooks() {
    this.loading = true;
    db.collection("books").onSnapshot(
      (querySnapshot: any) => {
        this.onRequest({
          filter: this.filter
        });
        console.log("1")
        querySnapshot.forEach((doc: any) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            category: doc.data().category,
            genre: doc.data().genre,
            storyContent: doc.data().storyContent,
            timestamp: doc.data().timestamp
          };
          this.data.push(data);
        });
      },
      (err: any) => {
        // console.log("list-table-accounts.table.vue " + err.message);
      }
    );
  }
}
</script>

<style></style>
