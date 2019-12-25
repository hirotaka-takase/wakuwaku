<template>
  <div>
      <v-parallax
      dark
      id="a"
      height="300"
      src="../assets/img/park_kid.jpg"
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
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/kid.jpg"
              alt="子供達"
            >
            </v-img>
            <v-card-text>
              <div align="center" class="mb-5">
                <Title align="center" :title="'子供の楽園'"></Title>
                  <h4 class="title">〜思いっきり遊んで思いっきり楽しもう!〜</h4>
              </div>
                <ul class="px-12" v-for="item in contents" :key="item.name">
                    <li class="subtitle-1">{{ item.name }}</li>
                </ul>
            </v-card-text>
        </v-card>
    </v-container>
  </div>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
    components: {
      Title
    },
    mounted: function(){
      document.title = "子供の楽園";
    },
    data: () => ({
      text: 'Wakuwaku Festival',
      contents: [
        {
          id: 1,
          name: 'ふわふわドーム',
        },
        {
          id: 2,
          name: '巨大迷路',
        },
        {
          id: 3,
          name: 'スライダー',
        },
        {
          id: 4,
          name: 'ボルダリングアスレチック',
        },
        {
          id: 5,
          name: 'だるまおとし',
        },
        {
          id: 6,
          name: 'ボールプール',
        },
        {
          id: 7,
          name: 'ハットトリックサッカー',
        },
        {
          id: 8,
          name: 'ストラックアウト',
        },
        {
          id: 9,
          name: '靴飛ばし（飛距離ベスト3を提示、商品はお菓子詰め合わせ放題',
        },
        {
          id: 10,
          name: 'キッズスペース',
        },
        {
          id: 11,
          name: '縁日コーナー 「けん玉・わなげ・射的・ボールすくい・お菓子詰め放題・的当てゲーム」',
        },
      ],
    }),
  }
</script>
