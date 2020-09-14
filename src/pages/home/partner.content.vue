<template>
  <div
    :class="this.$q.screen.lt.sm ? '' : 'row q-px-md'"
    class="justify-center"
  >
    <div class="col-12 text-center q-py-md">
      <div
        :class="this.$q.screen.lt.sm ? 'q-pb-sm text-h4 q-px-md' : 'q-pb-md'"
        class="col-12 text-center text-h3 text-accent text-weight-bolder"
        style="font-family: inherit"
      >
        Partners
      </div>
    </div>
    <div class="col-4">
      <q-card
        class="my-card text-center text-subtitle1 text-weight-bold text-grey-8"
        flat
      >
        <q-card-section>
          <q-avatar color="green" text-color="white" icon="thumb_up" />
        </q-card-section>
        <div>The More Words, the Better</div>
        <q-card-section>
          <div class="text-weight-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            id temporibus possimus cum illo corrupti voluptates, veritatis
            architecto eligendi libero aliquid dignissimos dicta esse,
            praesentium nesciunt odio modi perferendis nisi.
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-4">
      <q-card
        class="my-card text-center text-subtitle1 text-weight-bold text-grey-8"
        flat
      >
        <q-card-section>
          <q-avatar color="blue" text-color="white" icon="flag" />
        </q-card-section>
        <div>Read Every Day</div>

        <q-card-section class="text-weight-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id
          temporibus possimus cum illo corrupti voluptates, veritatis architecto
          eligendi libero aliquid dignissimos dicta esse, praesentium nesciunt
          odio modi perferendis nisi.
        </q-card-section>
      </q-card>
    </div>
    <div class="col-4">
      <q-card
        class="my-card text-center text-subtitle1 text-weight-bold text-grey-8"
        flat
      >
        <q-card-section>
          <q-avatar color="deep-orange" text-color="white" icon="alarm" />
        </q-card-section>
        <div>Start Them Young</div>
        <q-card-section class="text-weight-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id
          temporibus possimus cum illo corrupti voluptates, veritatis architecto
          eligendi libero aliquid dignissimos dicta esse, praesentium nesciunt
          odio modi perferendis nisi.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PartnerContent extends Vue {
  name: string = "partner-content";
}
</script>

<style></style>
