<template>
<div>
      <v-parallax
      dark
      height="300"
      src="../assets/img/idol1.jpg"
      alt="ショーイメージ"
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
            <v-img
              class="white--text align-end"
              height="270px"
              alt="アイドルダンス"
              src="../assets/img/idol.jpg"
            >
            </v-img>
            <v-card-text class="py-10">
            <Title :title="'ご当地アイドルでショー'"></Title>
                <div align="center" class="mb-3">
                  <p class="subtitle-1">
                      年齢、性別関係なく応募で集まったメンバーによるチアダンスショー
                  </p>
                  <p class="headline blue--text">エントリー無料!!<br>(定員になり次第締切)</p>
                </div>
                  <v-list-item class="mb-2 subtitle-1 text-center">
                    <v-list-item-content>
                      <v-list-item-title>4月25日(土)</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <div class="guest-info pa-5 d-flex justify-space-around">
                    <p><span>東京から特別出演 【AXXX1S】</span><br>
                      詳細<br>
                      2020年3月31日発売<br>
                      メジャーシングル「キミホリ」<br>
                      絶賛リリースイベント期間中
                    </p>
                    <div>
                      <p>出演者一覧</p>
                      <ul class="pa-0" style="list-style-type: none;">
                        <li>AXXX1S</li>
                        <li>岐阜♡濃know姫隊</li>
                        <li>Az1</li>
                        <li>村脇優</li>
                        <li>小島千輝</li>
                      </ul>
                    </div>                 
                  </div>
                  <v-list-item class="mb-2 subtitle-1 text-center">
                    <v-list-item-content>
                      <v-list-item-title>4月26日(日)</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <div class="guest-info pa-5 d-flex justify-space-around">
                    <p><span>東京から特別出演 【BLACK IRIS】</span><br>
                      詳細<br>
                      2019年12月3日発売<br>
                      ミニアルバム「METEOR」<br>
                      オリコンデイリーランキング１位<br>
                      ウィークリーランキング３位獲得
                    </p>
                    <div>
                      <p>出演者一覧</p>
                      <ul class="pa-0" style="list-style-type: none;">
                        <li>BLACK IRIS</li>
                        <li>Az1</li>
                        <li>村脇優</li>
                        <li>小島千輝</li>
                      </ul>
                    </div>                 
                  </div>
                <template>
                  <v-carousel
                    cycle
                    height="500"
                    show-arrows-on-hover
                    interval="4000"
                    class="mb-9 carousel"
                  >
                    <v-carousel-item
                      v-for="(slide, i) in slides_sat"
                      :key="i"
                    >
                      <v-sheet
                        height="100%"
                      >
                      <v-row
                       align="center"
                       justify="center"
                      >
                       <v-img class="pc" :aspect-ratio="16/9" :src="slide" contain alt="ゲスト"></v-img>
                       <v-img class="sp" :aspect-ratio="16/16" :src="slide" contain alt="ゲスト"></v-img>
                      </v-row>
                     </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </template>
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
       <!--         <v-btn to="/form/participants_cheer" class="ma-2" x-large outlined color="primary" dark>エントリーページへ</v-btn> -->
              </div>
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
      document.title = "ご当地アイドル男女でショー";
      document.querySelector("meta[property='og:title']").setAttribute('content', "わくフェスキッズダンスコンテスト");
      document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020のご当地アイドル男女でショー情報です。皆んなで力を合わせて最高のショーを作ろう!!");
      document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020のご当地アイドル男女でショー情報です。皆んなで力を合わせて最高のショーを作ろう!!");
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
        slides_sat: [
          require('@/assets/img/idol25-1.jpg'),
          require('@/assets/img/idol26-1.jpg'),
          require('@/assets/img/idol25-2.jpg'),
          require('@/assets/img/idol25-3.jpg'),
          require('@/assets/img/idol25-4.jpg'),
          require('@/assets/img/idol25-5.jpg'),
        ],
      }
    },
  }
</script>

<style scoped>
.pc {
  display: block;
}
.sp {
  display: none;
}
@media (max-width: 750px) {
.pc {
  display: none;
}
.sp {
  display: block;
}
.guest-info {
  align-items: center;
  flex-direction: column;
}
.carousel {
  height: 300px!important;
}
}
</style>