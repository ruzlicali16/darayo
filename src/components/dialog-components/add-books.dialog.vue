<template>
  <q-dialog
    v-model="addBookDialog"
    transition-show="fade-in"
    transition-hide="fade-out"
  >
    <q-card style="width: 500px">
      <q-toolbar>
        <q-avatar>
          <q-icon name="library_books" size="sm" color="deep-orange" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">Add</span> Books</q-toolbar-title
        >

        <q-btn flat round dense icon="close" @click="closeDialog" />
      </q-toolbar>

      <q-card-section class="q-gutter-sm">
        <q-select
          ref="category"
          v-model="category"
          outlined
          dense
          clearable
          hide-bottom-space
          :options="categoryOptions"
          :behavior="$q.screen.lt.sm ? 'dialog' : 'menu'"
          label="Category"
          color="deep-orange"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please enter category *']"
        >
          <template v-slot:prepend>
            <q-icon name="category" />
          </template>
        </q-select>
        <q-input
          ref="title"
          v-model="title"
          outlined
          dense
          hide-bottom-space
          label="Title"
          color="deep-orange"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please enter title *']"
        >
          <template v-slot:prepend>
            <q-icon name="title" />
          </template>
        </q-input>
        <q-input
          v-if="category == 'Story Book'"
          ref="genre"
          v-model="genre"
          outlined
          dense
          hide-bottom-space
          label="Genre"
          color="deep-orange"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please enter genre *']"
        >
          <template v-slot:prepend>
            <q-icon name="subtitles" />
          </template>
        </q-input>
        <q-input
          v-if="category == 'Story Book'"
          ref="storyContent"
          v-model="storyContent"
          outlined
          dense
          type="textarea"
          label="Story Body"
          color="deep-orange"
          hide-hint
          hide-bottom-space
          hint="Enter the whole story here*"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please enter story *']"
        >
          <template v-slot:prepend>
            <q-icon name="local_library" />
          </template>
        </q-input>
        <q-file
          ref="imageFile"
          v-model="imageFile"
          outlined
          dense
          clearable
          counter
          hide-bottom-space
          accept=".jpg, .png, image/*"
          label="Upload Cover Photo"
          color="deep-orange"
          @rejected="onRejected"
          @input="inputFile"
          @clear="clearImage"
          lazy-rules
          :rules="[imageFile => imageFile != null || 'Please cover photo *']"
        >
          <template v-slot:prepend>
            <q-icon name="photo" />
          </template>
        </q-file>
        <div v-if="imageFile" class="shadow-2">
          <q-img
            :style="
              this.$q.screen.lt.sm
                ? ''
                : 'width: 600px; max-height: 400px; max-width: 100%;'
            "
            :src="selectedFile"
          ></q-img>
        </div>
        <q-file
          ref="pdfFile"
          v-model="pdfFile"
          outlined
          dense
          clearable
          counter
          label="Upload PDF File"
          color="deep-orange"
          accept=".pdf"
          @rejected="onRejected"
          lazy-rules
          :rules="[imageFile => imageFile != null || 'Please pdf file *']"
          ><template v-slot:prepend>
            <q-icon name="picture_as_pdf" />
          </template>
        </q-file>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Close" color="deep-orange" @click="closeDialog" />
        <q-btn
          :loading="loading"
          :disable="loading"
          label="Upload"
          color="deep-orange"
          @click="addBooks"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
interface AddBooks extends Vue {
  validate(): void;
  hasError: boolean;
}
import { date } from "quasar";
import { Vue, Component } from "vue-property-decorator";
import { db, firebaseStorage } from "src/firestore/firebaseInit";

@Component
export default class AddBooksDialog extends Vue {
  name: string = "add-books-dialog";
  $refs!: {
    title: AddBooks;
    category: AddBooks;
    genre: AddBooks;
    storyContent: AddBooks;
    imageFile: AddBooks;
    pdfFile: AddBooks;
  };

  // Book Data
  title: string = "";
  category: string = "";
  genre: string = "";
  storyContent: string = "";
  pdfFile: any = null;
  imageFile: any = null;
  selectedFile: any = null;
  categoryOptions: string[] = ["Story Book", "Coloring Book"];
  currentDate: string = "";
  // UI Data
  loading: boolean = false;

  // UI Logic Computed
  get addBookDialog(): boolean {
    return this.$store.state.siteNav.addBookDialog;
  }
  set addBookDialog(val: boolean) {
    this.$store.dispatch("siteNav/addBookDialog", val);
  }

  // Methods
  getCurrentDate() {
    let timeStamp = Date.now();
    let formattedString = date.formatDate(
      timeStamp,
      "dddd, YYYY/MM/DD - h:mm:ss A"
    );
    return (this.currentDate = formattedString);
  }
  addBooks() {
    this.getCurrentDate();
    if (this.category == "Story Book") {
      this.$refs.title.validate();
      this.$refs.category.validate();
      this.$refs.genre.validate();
      this.$refs.storyContent.validate();
      this.$refs.imageFile.validate();
      this.$refs.pdfFile.validate();

      if (
        !this.$refs.title.hasError &&
        !this.$refs.category.hasError &&
        !this.$refs.genre.hasError &&
        !this.$refs.storyContent.hasError &&
        !this.$refs.imageFile.hasError &&
        !this.$refs.pdfFile.hasError &&
        this.category == "Story Book"
      ) {
        console.log("Story books");
        // this.loading = true;
        // this.uploadFiles();
      }
    } else {
      this.$refs.title.validate();
      this.$refs.category.validate();
      this.$refs.imageFile.validate();
      this.$refs.pdfFile.validate();

      if (
        !this.$refs.title.hasError &&
        !this.$refs.category.hasError &&
        !this.$refs.imageFile.hasError &&
        !this.$refs.pdfFile.hasError &&
        this.category == "Coloring Book"
      ) {
        console.log("Coloring books");
      }
    }
  }

  addData(photoURL: any, pdfURL: any) {
    db.collection("books")
      .add({
        title: this.title,
        category: this.category,
        genre: this.genre,
        storyContent: this.storyContent,
        photoURL: photoURL,
        pdfURL: pdfURL,
        timestamp: this.currentDate
      })
      .then((doc: any) => {
        // console.log(doc.docRef);
        // TO BE CONTINUE
        // if (this.category == 'Story Books') {

        // } else {

        // }
        this.success();
      })
      .catch(err => {
        console.log(err.message);
        this.error("Uploading data error.");
      });
  }
  uploadFiles() {
    const photoStorageRef = firebaseStorage
      .ref(`cover-photos/${this.imageFile.name}`)
      .put(this.imageFile);
    const pdfStorageRef = firebaseStorage
      .ref(`pdf-files/${this.pdfFile.name}`)
      .put(this.pdfFile);

    photoStorageRef.on(
      `state_changed`,
      snapshot => {},
      err => {
        console.log(err);
        this.error("Uploading image error.");
      },
      () => {
        photoStorageRef.snapshot.ref
          .getDownloadURL()
          .then(photoURL => {
            pdfStorageRef.on(
              `state_changed`,
              snapshot => {},
              err => {
                console.log(err);
                this.error("Uploading image error.");
              },
              () => {
                pdfStorageRef.snapshot.ref
                  .getDownloadURL()
                  .then(pdfURL => {
                    this.addData(photoURL, pdfURL);
                  })
                  .catch(err => {
                    console.log(err);
                    this.error("Uploading image error.");
                  });
              }
            );
          })
          .catch(err => {
            console.log(err);
            this.error("Uploading image error.");
          });
      }
    );
  }
  success() {
    this.title = "";
    this.category = "";
    this.genre = "";
    this.storyContent = "";
    this.imageFile = null;
    this.pdfFile = null;
    this.selectedFile = null;
    this.loading = false;
    this.addBookDialog = false;
    this.$q.notify({
      type: "positive",
      message: `Successfully Added!`,
      position: "bottom-left"
    });
  }
  error(err: any) {
    this.title = "";
    this.category = "";
    this.genre = "";
    this.storyContent = "";
    this.imageFile = null;
    this.pdfFile = null;
    this.selectedFile = null;
    this.loading = false;
    this.$q.notify({
      type: "negative",
      message: `ERROR: ${err.message}`,
      caption: `Please try again`,
      position: "bottom-left"
    });
  }
  onRejected(rejectedEntries: any) {
    this.$q.notify({
      type: "warning",
      message: `Please select appropriate file only.`
    });
  }
  clearImage() {
    this.imageFile = null;
    this.selectedFile = null;
  }
  inputFile(val: any) {
    if (this.imageFile != null) {
      this.selectedFile = URL.createObjectURL(val);
    }
  }
  closeDialog() {
    if (
      this.title ||
      this.category ||
      this.genre ||
      this.storyContent ||
      this.imageFile ||
      this.pdfFile
    ) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure you want to discard inputs?",
          cancel: true,
          persistent: true,
          color: "red"
        })
        .onOk(() => {
          this.title = "";
          this.category = "";
          this.genre = "";
          this.storyContent = "";
          this.imageFile = null;
          this.pdfFile = null;
          this.addBookDialog = false;
        })

        .onCancel(() => {
          this.addBookDialog = false;
        });
    } else {
      this.addBookDialog = false;
    }
  }
}
</script>

<style></style>
