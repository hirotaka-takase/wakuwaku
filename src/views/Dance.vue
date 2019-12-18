<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/dance.jpg"
            >
            </v-img>
            <v-card-text>
                <Title :title="'キッズダンスコンテスト'"></Title>
                <div align="center">
                  <h4 class="headline">★九州ナンバーワンキッズはどのチームだ!!</h4>
                  <p class="subtitle-1">
                      小学生の部（土曜日）と中学生（日曜日）に分かれて１チームごとに踊り審査員がその中から順位を決める<br>
                      入賞チームはイベント最後に発表。その際に、クリスタルトロフィー・副賞を渡す。
                  </p>
                </div>
                <v-simple-table class="mb-8">
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="item in details" :key="item.name">
                        <td width="20%">{{ item.title }}</td>
                        <td width="80%">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table class="mb-8">
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="item in results" :key="item.name">
                        <td width="20%">{{ item.title }}</td>
                        <td width="80%">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <p align="center" class="headline">タイムテーブル</p>
                <v-list-item align="center" two-line class="d-block" widh="100%">
                  <v-list-item-content v-for="item in schedules" :key="item.time">
                      <v-list-item-title>{{ item.time }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
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
            text: '30チーム（合計60チーム）'
          },
          {
            title: 'ジャンル',
            text: 'ジャンル規定なし'
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
        schedules: [
          {
            time: '10:00',
            text: '受付開始'
          },
          {
            time: '11:00',
            text: '審査員紹介（ダンスショーケース）'
          },
          {
            time: '11:30',
            text: 'コンテスト1部 15チーム✖︎5分（1チーム) = 75分'
          },
          {
            time: '12:40',
            text: '休憩（30分）'
          },
          {
            time: '13:10',
            text: 'コンテスト2部 15チーム✖︎5分（1チーム) = 65分'
          },
          {
            time: '14:25',
            text: '休憩・審査員結果集計（65分）'
          },
          {
            time: '15:30',
            text: '結果発表・表彰・審査員総評'
          },
          {
            time: '16:00',
            text: '終了'
          },
        ]
      }
    },
  }
</script>