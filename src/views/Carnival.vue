<template>
<div>
      <v-parallax
      dark
      height="320"
      src="../assets/img/dog3.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <p>
            <span
              id="top-text"
              v-for="(t, index) in text"
              :key="index"
              class="item-animation font-weight-thin"
              :style="{animationDelay: index*100+'ms'}"
              v-text="t"
            />
          </p>
        </v-col>
      </v-row>
    </v-parallax>
<v-container fill-width py-12>
  <v-card class="mx-auto px-10 py-5">
    <v-card-text class="text-center">
        <Title :title="'愛犬家大集合'"></Title>
        <p class="title text--primary">ドッグランやその他コンテンツも充実!!</p>
    </v-card-text>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
        >
        <v-card
            :color="item.color"
            dark
        >
            <v-card-title class="title">{{ item.title }}</v-card-title>
            <v-card-text class="white pt-4 text--primary">
            <p>{{ item.text }}</p>
            </v-card-text>
        </v-card>
        </v-timeline-item>
    </v-timeline>
    <v-divider></v-divider>
    <ul>
        <v-card-text tag="li">
            <p class="mb-0">ペットカットしてくれるトリマーさん大募集！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/trim">募集要項・応募希望</v-btn>
        </v-card-text>
                <v-card-text tag="li">
            <p class="mb-0">ペットグッズ出展者大募集！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/store">募集要項・出展希望</v-btn>
        </v-card-text>
        <v-card-text tag="li">
            <p class="mb-0">同時にフリーマーケットも開催！！出展者大募集！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/freemarket">募集要項・出展希望</v-btn>
        </v-card-text>
    </ul>
  </v-card>
</v-container>
</div>
</template>

<script>
import Title from '../components/Title.vue';

  export default {
    name: 'pets',
    components: {
     Title,
  },
    data: () => ({
      text: 'Wakuwaku Festival',
      items: [
        { 
          title: 'ペットカットスタイリングショー',
          text: '好みのスタイルを見つけてね！',
          color: 'red lighten-2',
          icon: 'fas fa-cut',
        },
        {
          title: '愛犬ファッションショー',
          text: 'かわいいファッションを自慢しよう!!',
          color: 'purple darken-1',
          icon: 'fas fa-tshirt',
        },
        {
          title: 'かけっこ選手権',
          text: 'うちの子がナンバーワン！！',
          color: 'green lighten-1',
          icon: 'fas fa-running',
        },
        {
          title: 'ペット関係グッズ売場',
          text: 'なんと40店舗以上！！',
          color: 'indigo',
          icon: 'as fa-store-alt',
        },
      ],
    }),
  }
</script>

<style scoped>
p.title {
  font-weight: bold;
}
</style>