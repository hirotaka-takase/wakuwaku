<template>
<div>
      <v-parallax
      dark
      height="300"
      src="../assets/img/dance1.jpg"
      alt="コンテストイメージ"
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
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/dance2.jpg"
              alt="ダンスコンテスト"
            >
            </v-img>
            <v-card-text>
                <Title :title="'わくフェスキッズダンスコンテスト'"></Title>
                <div align="center">
                  <h4 class="title">ナンバーワンはどのチームだ！</h4>
                  <p class="subtitle-1">
                      小学生の部と中学生の部に分かれてチームごとにダンスを踊り、審査は審査員が行います。<br>
                      入賞チームにはイベント最後に発表。その際に、クリスタルトロフィー・副賞を贈呈致します。
                  </p>
                  <p class="headline blue--text">エントリー無料！！<br>（定員になり次第締切）</p>
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
                <v-simple-table class="mb-8">
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="item in results" :key="item.name">
                        <td width="30%" class="font-weight-bold">{{ item.title }}</td>
                        <td width="70%" style="white-space:pre-wrap; word-wrap:break-word;">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <div class="mb-9">
                  <p align="center" class="title font-weight-bold">
                      MC
                  </p>
                  <p align="center" class="title">
                      4月25日(土)・4月26日(日)
                  </p>
                  <div class="ochobo">
                    <span>おちょぼ(058funkstarz)</span>
                    <v-img style="object-fit: cover;" height="320" src="../assets/img/ochobo.jpg"></v-img>
                  </div>
                </div>
                <div class="mb-7">
                  <p align="center" class="title font-weight-bold">
                      審査員
                  </p>
                  <p align="center" class="title">
                      4月25日(土)
                  </p>
                  <template>
                    <v-item-group>
                      <v-container>
                        <v-row>
                          <v-col
                            v-for="judge in images_saturday"
                            :key="judge.name"
                            cols="12"
                            class="col-image"
                            md="4"
                          >
                            <span>{{ judge.name }}</span>
                            <v-item>
                              <v-img style="object-fit: cover;" height="350" :src="judge.img" alt="ジャッジ"></v-img>
                            </v-item>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-item-group>
                  </template>
                  <p align="center" class="title">
                      4月26日(日)
                  </p>
                  <template>
                  <v-item-group>
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="judge in images_sunday"
                          :key="judge.name"
                          cols="12"
                          class="col-image"
                          md="4"
                        >
                          <span>{{ judge.name }}</span>
                          <v-item>
                            <v-img style="object-fit: cover;" height="350" :src="judge.img" alt="ジャッジ"></v-img>
                          </v-item>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                </template>
                </div>
                <p align="center" class="title font-weight-bold">
                    コンテストルール
                </p>
                <ul class="subtitle-1 mb-8">
                    <li>
                      小学生部門<br>
                      メンバー全員が小学6年生以下
                      (メンバーに一人でも中学生が含まれる場合は中学生部門になります)
                    </li>
                    <li>
                      中学生部門<br>
                      メンバー全員が中学3年生以下
                    </li>
                    <li>
                      メンバー人数制限は2人以上です
                    </li>
                    <li>
                      入賞チームには商品券、トロフィーの授与があります
                    </li>
                    <li>
                      音源は1チーム4分以内。規定時間を越えると失格となりますので注意してください
                    </li>
                    <li>
                      エントリー後のチーム名の変更不可
                    </li>
                    <li>
                      出演順はあらかじめこちらでくじ引きにて決めさせていただき、当日に発表いたします
                    </li>
                </ul>
            <div align="center">
              <v-btn to="/participants_dance" class="ma-2" x-large outlined color="primary" dark>エントリーページへ</v-btn> 
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
      document.title = "わくフェスキッズダンスコンテスト";
      document.querySelector("meta[property='og:title']").setAttribute('content', "わくフェスキッズダンスコンテスト");
      document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020のキッズダンスコンテスト情報です。皆んなで力を合わせて賞を勝ち取ろう!");
      document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020のキッズダンスコンテスト情報です。皆んなで力を合わせて賞を勝ち取ろう!");
    },
    data () {
      return {
        text: 'Wakuwaku Festival',
        details: [
          {
            title: '日時',
            text: `2020年4月25日（土）小学生の部
2020年4月26日（日）中学生の部
10:00受付 11：00スタート 16：00終了`
          },
          {
            title: 'エントリー費',
            text: '無料（会場入場料別）'
          },
          {
            title: '対象年齢',
            text: '小学1年生から中学3年生'
          },
          {
            title: '音源時間',
            text: '4分以内'
          },
          {
            title: 'ジャンル',
            text: 'ジャンル規定なし'
          },
        ],
        results: [
          {
            title: 'グランプリ/準グランプリ',
            text: 'クリスタルトロフィー・豪華賞品贈呈'
          },
          {
            title: '3位/特別賞',
            text: 'クリスタルトロフィー授与'
          },
        ],
        images_saturday: [
          {
            name: 'RYOTARO(OUT LEAP)',
            img: require('@/assets/img/ryotaro.jpg')
          },
          {
            name: 'mio(AYLAH/off-wite)',
            img: require('@/assets/img/mio.jpg')
          },
          {
            name: 'Youkey(DIZZLEZ/Half in Fun’k)',
            img: require('@/assets/img/youkey.jpg')
          }
        ],
        images_sunday: [
          {
            name: 'MOTOTAKA(BANZAI PRODUCTION/GOLD ACTOR)',
            img: require('@/assets/img/mototaka.jpg')
          },
          {
            name: 'HIDEYOSHI(LOKI/DIZZLEZ)',
            img: require('@/assets/img/hideyoshi.jpg')
          },
          {
            name: 'スーパーYUKA(Man&Woman/off-wite)',
            img: require('@/assets/img/yuka.jpg')
          }
        ]
      }
    },
  }
</script>

<style scoped>
.ochobo {
  width: 350px;
  margin: 0 auto;
}
@media (max-width: 750px) {
table tr td {
   width: 100%;
   display: block!important;
   min-height: 50px;
   height: auto;
   padding: 10px 0;
   text-align: center;
}
.ochobo {
  width: 100%;
}
.col-image {
  padding: 0 0 10px 0;
}
}
</style>