<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/park.jpg"
            >
            </v-img>
            <v-card-text>
                <Title align="center" :title="'子供の楽園'"></Title>
                <div align="center">
                  <h4 class="headline">〜思いっきり遊んで思いっきり楽しもう!〜</h4>
                  <p class="title">内容</p>
                </div>
                <ul class="px-12" v-for="item in contents" :key="item.name">
                    <li class="subtitle-1">{{ item.name }}</li>
                </ul>
            </v-card-text>
        </v-card>
    </v-container>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
    components: {
      Title
    },
    data: () => ({
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
          name: '縁日コーナー 「・けん玉、・わなげ、・射的、・ボールすくい、・お菓子詰め放題、・的当てゲーム」',
        },
      ],
    }),
  }
</script>

