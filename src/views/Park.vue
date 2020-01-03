<template>
  <div>
      <v-parallax
      dark
      height="300"
      src="../assets/img/park1.jpg"
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
              src="../assets/img/park2.jpg"
              alt="子供達"
            >
            </v-img>
            <v-card-text>
              <div align="center" class="mb-5">
                <Title align="center" :title="'子供の楽園'"></Title>
                <h4 class="title">〜思いっきり遊んで思いっきり楽しもう!〜</h4>
                <p class="subtitle-1">（休憩スペースも完備）</p>
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
          name: 'わたがし',
        },
        {
          id: 3,
          name: 'ポップコーン',
        },
        {
          id: 4,
          name: 'スイカ割り',
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
          name: 'キッズスペース（小さいお子様連れのお母さんも安心!!）',
        },
        {
          id: 9,
          name: '縁日コーナー 「けん玉・わなげ・射的・ボールすくい・お菓子詰め放題・的当てゲーム」',
        },
      ],
    }),
  }
</script>
