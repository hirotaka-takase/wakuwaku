<template>
<div>
      <v-parallax
      dark
      height="320"
      src="../assets/img/dog.jpg"
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
            <p style="white-space:pre-wrap; word-wrap:break-word;">{{ item.text }}</p>
            <p style="white-space:pre-wrap; word-wrap:break-word;" v-if="item.text2">{{ item.text2 }}</p>            
            <p style="white-space:pre-wrap; word-wrap:break-word;" v-if="item.text3">{{ item.text3 }}</p>            
            </v-card-text>
        </v-card>
        </v-timeline-item>
    </v-timeline>
    <v-divider class="mb-4"></v-divider>
    <p class="text-center">出展者・出場者の皆様</p>
    <ul>
        <v-card-text tag="li">
            <p class="mb-0">ペットグッズ出展者申込！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/store">募集要項・出展希望</v-btn>
        </v-card-text>
        <v-card-text tag="li">
            <p class="mb-0">フリーマーケット出品者大募集！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/freemarket">募集要項・出品希望</v-btn>
        </v-card-text>
        <v-card-text tag="li">
            <p class="mb-0">ペットカット選手権出場トリマーさん大募集！！</p>
            <v-btn class="ma-2" outlined color="primary" to="/carnival/form/trim">募集要項・応募希望</v-btn>
        </v-card-text>
    </ul>
  </v-card>
</v-container>
</div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
	mounted: function(){
	document.title = "わんわんカーニバル";
  },
    name: 'pets',
    components: {
     Title,
  },
    data: () => ({
      text: 'Wakuwaku Festival',
      items: [
        { 
          title: 'ペットカット選手権',
          text:  `好みのスタイルを見つけて下さい！
特別賞（若干名）`,
          text2: `「審査員2人」
高い技術力・スキルを感じ、可愛く仕上げた方を選出致します。`,
          color: 'red lighten-2',
          text3: `「一般審査」
ご来場のお客様にお願い致します。
純粋にお客様の好みのカットに一票を投じていただきます`,
          icon: 'fas fa-cut',
        },
        {
          title: '愛犬交流広場',
          text: `・プロの訓練士によるワンポイントアドバイス！
・愛犬のお手入れ簡単アドバイス！
・プロトリマー向けアレンジスタイルレッスン！`,
          color: 'purple darken-1',
          icon: 'fas fa-tshirt',
        },
        {
          title: '各種催し',
          text: `・うちの子がナンバーワン！！ワンワン競争
・フォト
・じゃんけん大会
・他、催し時間開催`,
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