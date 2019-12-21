<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto mb-12">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/dancer.jpg"
              alt="ダンサー達"
            >
            </v-img>
            <v-card-text>
                <Title :title="'わくフェスキッズダンスコンテスト'"></Title>
                <div align="center">
                  <h4 class="title">★ナンバーワンはどのチームだ！！</h4>
                  <p class="subtitle-1">
                      小学生の部（土曜日）と中学生（日曜日）に分かれて１チームごとに踊り審査員がその中から順位を決める<br>
                      入賞チームはイベント最後に発表。その際に、クリスタルトロフィー・副賞を渡す。
                  </p>
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
                        <td width="70%">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
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
              <v-btn to="participants_dance" class="ma-2" x-large outlined color="primary" dark>エントリーページへ</v-btn> 
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto mb-12">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/cheer.jpg"
              alt="チアダンス"
            >
            </v-img>
            <v-card-text>
                <Title :title="'チアダンスショー参加者募集！'"></Title>
              <div align="center" class="mb-5">
                  <h4 class="title">募集要項</h4>
              </div>
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
              <v-btn to="participants_cheer" class="ma-2" x-large outlined color="primary" dark>エントリーページへ</v-btn> 
            </div>
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
    mounted: function(){
      document.title = "ダンスコンテスト＆ショー";
    },
    data () {
      return {
        details: [
          {
            title: '日時',
            text: '未定 土・日開催 || 土曜日 小学生の部 ・ 日曜日 中学生の部 || 10:00受付開始 11:00スタート 16:00 終了'
          },
          {
            title: 'エントリー費',
            text: '無料（会場入場料別）'
          },
          {
            title: '対象年齢',
            text: '小学1年生〜中学3年生'
          },
          {
            title: 'チーム数',
            text: '各30チーム'
          },
          {
            title: 'ジャンル',
            text: 'ジャンル規定なし'
          },
          {
            title: 'MC&ジャッジ',
            text: 'MCヒロ | bigsky bigsky bigsky'
          },
        ],
        results: [
          {
            title: '優勝',
            text: 'クリスタルトロフィー授与 | （副賞） 中学生の部 3万円相当商品券贈呈　（副賞） 小学生の部 2万円相当商品券贈呈'
          },
          {
            title: '準優勝',
            text: 'クリスタルトロフィー授与 | （副賞） 小学生・中学生の部 1万円相当商品券贈呈　（副賞） 小学生の部 2万円相当商品券贈呈'
          },
          {
            title: '3位',
            text: 'クリスタルトロフィー授与 | （副賞） 小学生・中学生の部 5千円相当商品券贈呈'
          },
          {
            title: '特別賞',
            text: 'クリスタルトロフィー授与 | （副賞） 小学生・中学生の部 3千円相当商品券贈呈'
          },
        ],
      }
    },
  }
</script>

<style scoped>
@media (max-width: 480px) {
table tr td {
   width: 100%;
   display: block!important;
   min-height: 50px;
   height: auto;
   padding: 10px 0;
   text-align: center;
}
}
</style>