<template>
  <div>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <div :class="$q.screen.lt.sm ? 'q-px-sm q-pb-md' : 'q-pb-xl'">
            <div
              class="col-12 text-deep-orange "
              :class="$q.screen.lt.sm ? 'text-h3' : 'text-h2'"
            >
              Story Books
            </div>
            <div class="col-12 text-subtitle1 text-grey-8 q-pt-xl">
              Our Meranaw Books Lesson Plans are a great resource for parents
              and teachers who want to teach children to do more than just read.
              Each Lesson Plan provides themes, summaries, talking points,
              discussion ideas, activity ideas and even vocab cards. Download a
              Meranaw Books Lesson Plan PDF by clicking on the image of each
              title below.
            </div>
          </div>

          <q-select
            dense
            outlined
            style="min-width: 200px"
            v-model="type"
            :options="['All', 'Family', 'Tragic', 'Lovestory']"
            class="float-right"
            label="Category"
          />
        </div>
      </q-card-section>
      <q-card-section class="q-mx-sm">
        <div class="row q-col-gutter-lg">
          <div
            class="col-lg-3 col-sm-12 col-xs-12 col-md-3"
            v-for="(book, index) in getData2"
            :key="index"
          >
            <q-card style="background-color: #292845" class="text-white">
              <q-img
                :src="require(`../../assets/${book.image}`)"
                ratio="1"
                basic
                spinner-color="red-5"
                spinner-size="3rem"
              />

              <q-card-actions class="bg-deep-orange" align="right">
                <span class="text-white">
                  {{ book.title }}
                </span>
                <q-space />
                <q-btn
                  flat
                  round
                  color="white"
                  icon="menu_book"
                  :size="$q.screen.lt.sm ? 'sm' : 'md'"
                >
                  <q-tooltip
                    v-if="!$q.screen.lt.sm"
                    content-class="bg-white text-deep-orange"
                    anchor="top middle"
                    self="bottom middle"
                    :offset="[10, 10]"
                  >
                    Read
                  </q-tooltip>
                </q-btn>
                <q-btn
                  flat
                  round
                  color="white"
                  icon="get_app"
                  :size="$q.screen.lt.sm ? 'sm' : 'md'"
                >
                  <q-tooltip
                    v-if="!$q.screen.lt.sm"
                    content-class="bg-white text-deep-orange"
                    anchor="top middle"
                    self="bottom middle"
                    :offset="[10, 10]"
                  >
                    Download
                  </q-tooltip>
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-pagination
          v-model="page"
          :min="currentPage"
          :max="Math.ceil(getData().length / totalPages)"
          :input="true"
          input-class="text-grey-9"
          icon-first="skip_previous"
          icon-last="skip_next"
          icon-prev="fast_rewind"
          icon-next="fast_forward"
          color="deep-orange"
        >
        </q-pagination>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const storyBooks = [
  {
    image: "storybook1.png",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "storybook2.png",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "coloringbook2.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "lovestory"
  },
  {
    image: "coloringbook3.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "lovestory"
  },
  {
    image: "coloringbook4.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "coloringbook5.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "storybook2.png",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "coloringbook2.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  },
  {
    image: "coloringbook3.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  },
  {
    image: "coloringbook2.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  },
  {
    image: "storybook1.png",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "storybook2.png",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  },
  {
    image: "coloringbook5.jpg",
    title: "Lorem ipsum dolor sit amet",
    type: "family"
  },
  {
    image: "storybook1.png",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  },
  {
    image: "storybook2.png",
    title: "Lorem ipsum dolor sit amet",
    type: "tragic"
  }
];
@Component
export default class StoryBookContent extends Vue {
  name: string = "story-book-content";

  // UI Local Data
  books = storyBooks;
  type: string = "All";
  page: number = 1;
  currentPage: number = 1;
  nextPage: any = null;
  totalPages: number = 8;

  // UI Logic
  getData() {
    if (this.type == "All") {
      if (this.$q.screen.lt.sm) {
        this.totalPages = 4;
      }
      return this.books;
    } else {
      let self = this;
      return this.books.filter(function(item) {
        return item.type.toLowerCase() == self.type.toLowerCase();
      });
    }
  }
  get getData2() {
    return this.getData().slice(
      (this.page - 1) * this.totalPages,
      (this.page - 1) * this.totalPages + this.totalPages
    );
  }
}
</script>

<style></style>
