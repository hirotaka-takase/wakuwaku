<template>
<div>
      <v-parallax
      dark
      height="300"
      src="../assets/img/cheer1.jpg"
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
     <v-tabs
    fixed-tabs
    background-color="#fafafa"
    color="warning"
>
        <v-tab width="50%" to="dance">
        コンテスト
        </v-tab>
        <v-tab width="50%" to="idol">
        ご当地アイドルでショー
        </v-tab>
    </v-tabs>
    <v-container fill-width py-12>
        <v-card id="card-color" class="mx-auto">
            <!--<v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/cheer2.jpg"
              alt="チアダンス"
            >
            </v-img>-->
            <v-card-text class="py-10">
            <Title :title="'ご当地アイドルでショー'"></Title>
            <p class="text-center headline">coming soon</p><!--
                <div align="center">
                  <p class="subtitle-1">
                      年齢、性別関係なく応募で集まったメンバーによるチアダンスショー
                  </p>
                  <p class="headline blue--text">エントリー無料!!<br>(定員になり次第締切)</p>
                </div>
                <v-simple-table class="mb-8">
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="item in details" :key="item.name">
                        <td width="35%" class="font-weight-bold">{{ item.title }}</td>
                        <td width="65%" style="white-space:pre-wrap; word-wrap:break-word;">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <p align="center" class="title font-weight-bold">
                    募集要項
                </p>
                <ul class="subtitle-1 mb-8">
                    <li>
                      人数<br>
                      ４名以上とし、男女問わない。<br>年代別による編成分けはなく自由。様々な学年や年齢が混じったチームも可能
                    </li>
                    <li>
                      ステージ<br>
                      約横15m × 奥行き10m
                    </li>
                    <li>
                      演技時間<br>
                      2分以上4分以内<br>
                      ※エントリーに際し、重複エントリーも可能です。エントリーの際、お申し出下さい。ただし、十分な時間の確保はできません。
                    </li>
                </ul>
              <div align="center">
                <v-btn to="/form/participants_cheer" class="ma-2" x-large outlined color="primary" dark>エントリーページへ</v-btn> 
              </div>-->
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
      document.title = "ご当地アイドルでショー";
    },
    data () {
      return {
        text: 'Wakuwaku Festival',
        details: [
          {
            title: '日時',
            text: `2020年4月25日(土)26日(日)
11:00受付開始 12:00スタート 15:00 終了`
          },
          {
            title: 'エントリー費',
            text: '無料（会場入場料別）'
          },
          {
            title: '対象年齢',
            text: 'なし'
          },
          {
            title: 'チーム数',
            text: '各30チーム(合計 60チーム)'
          },
          {
            title: 'ジャンル',
            text: 'ジャンル規定なし'
          },
        ],
      }
    },
  }
</script>

