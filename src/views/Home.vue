<template>
  <div>
    <v-img id="fv"
        src="@/assets/img/fv.jpg"
        height="650"
        width="100%"
    >
    </v-img>
    <v-parallax
    height="540"
    dark
    id="top-img1"
    src="@/assets/img/top-dog.jpg"
    >

        <v-container class="top-desc">
          <div class="wf-roundedmplus1c d-flex justify-center" style="font-weight: bold;">
            <div>
              <p class="desc-title">愛犬家大集合!</p>
              <v-list-item fives-line>
                <v-list-item-content>
                  <v-list-item-title class="mb-3 desc-item-title">交流広場</v-list-item-title>
                  <v-list-item-subtitle class="desc-item">
                    ・ペットカット選手権 
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="desc-item">
                    ・わん芸 IT'sショータイム!
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="desc-item">
                    ・うちの子自慢トークショー
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="desc-item">
                    ・全員参加でじゃんけんポン! 
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div>
            <p class="desc-title2">お子様から大人までご家族で<br>楽しめるイベントです! </p>
              <v-list-item four-line class="text-center">
                <v-list-item-content>
                  <p class="mb-3 desc-item-title">たくさんのワンちゃんも見れますよ! </p>
                  <v-list-item-subtitle class="desc-item">
                    ・縁日・キッズパーク
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="desc-item">
                    ・キッズダンスコンテスト 
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="desc-item">
                    ・ご当地アイドルでショー 
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-container>
  </v-parallax>
    <v-card color="mb-3">
      <v-parallax
        height="auto"
        class="pb-10"
        id="top-img2"
        src="@/assets/img/bg2.jpg"
          >
        <v-card-title class="text-center justify-center pt-7 pb-12">
          <h2 class="wf-roundedmplus1c">わくわくフェスティバルは愛犬はもちろんお子様と一緒にご家族で楽しめるイベントです！</h2>
        </v-card-title>
        <v-container fluid>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
        >
          <v-tab
            v-for="item in items"
            :key="item"
            class="white--text title font-weight-black"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        </v-container>
        <v-container fill-width>
        <v-tabs-items id="tab" v-model="tab">
          <v-tab-item>
            <v-card>
              <v-card-text>
                <ul class="pa-0 subtitle-1 text-center">
                  <li class="py-3 font-weight-bold">日時</li>
                  <li>4月25日（土）4月26日（日）</li>
                  <li>10：00～17：00</li>
                  <li class="py-3 font-weight-bold">会場<br>（10,000人収容）</li>
                  <li><a href="https://www.aichiskyexpo.com/access/" target="_blank">AICHI SKY EXPO 展示ホールA</a></li>
                  <li class="mb-4">
                    愛知国際会議展示場<br>愛知県常滑セントレア5丁目10番地1号<br>
                    （名鉄中部国際空港駅より徒歩5分）<br>
                  </li>  
                  <li>
                   〔お車でお越しのお客様〕<br>
                    セントレア東ICを降りて直進約2Kｍ<br>
                    大駐車場有（24時間最大800円）
                  </li>            
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <ul class="pa-0 text-center subtitle-1">
                <li class="py-2 font-weight-bold">前売り券<br>（ローソン、セブンイレブン、ファミリーマート各コンビニにて2020年2月15日（土）より販売開始）</li>
                <li>大人（高校生以上）：1,400円</li>
                <li class="mb-3">子子供（中学生以下）：700円</li>
                <li class="py-2 font-weight-bold">当日券</li>
                <li>大人（高校生以上）：1,600円</li>
                <li class="mb-3">子供（中学生以下）：900円</li>
                <li>※3歳未満無料</li>
                <li>※ご入場の際、お子様には縁日、キッズパークで使えるお楽しみ券を１枚贈呈します。</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-container>
      </v-parallax>
    </v-card>
    <v-container>
      <v-card
      width="700"
      class="mb-5 white--text"
      color="pink"
    >
      <p class="card_title mb-0 py-3 px-5" style="font-family: 'Kosugi Maru', sans-serif; border-bottom: 1px solid #fff;">
       交流広場
      </p>
      <v-card-text class="white--text card-text">
          <p>「オフ会しよう!」オフ会には最適広場! </p>
          <p>「ペットカット選手権」ライブ形式。好みのスタイル見つけて下さい。</p>
          <p>「わん芸 IT's ショータイム」芸達者なワンちゃんが登場します。</p>
          <p>「うちの子自慢 トークショー」こんなことあんなこと何でもアリアリ!<br>自慢して下さい! </p>
        <v-row no-gutters>
          <template v-for="n in koryu">
          <v-col :key="n.id">
            <p>{{ n.title }}</p>
          </v-col>
          <v-responsive
            v-if="n.id === 2"
            :key="`width-${n.id}`"
            width="100%"
          ></v-responsive>
          </template>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      width="480"
      class="ml-auto mr-9 mb-5 white--text"
      color="#1F7087"
    >
      <p class="card_title mb-0 py-3 px-5" style="border-bottom: 1px solid #fff;">
        じゃんけん大会
      </p>
      <v-card-text class="card-text white--text">
        <p>ご来場者様全員でじゃんけん大会! </p>
        <p>一日3回開催豪華賞品ご期待下さい</p>
        <p>その他催しありますよ!楽しみにして下さい! </p>
      </v-card-text>
    </v-card>
    <v-card
      width="700"
      class="mb-5 white--text"
      color="#952175"
    >
      <p class="card_title mb-0 py-3 px-5" style="border-bottom: 1px solid #fff;">
        縁日コーナー・<br>キッズパーク
      </p>
      <v-divider></v-divider>
      <v-card-text class="white--text card-text">
        <div class="arrow d-flex mb-6" style="position: relative;">
          <p style="width: 20%;">縁日</p>
          <ul>
            <li>・射的</li>
            <li>・わなげ</li>
            <li>・すいか割り</li>
            <li>・ラッキーボール</li>
            <li>・カラス倒しゲーム </li>
          </ul>
          <div class="arrow_box">
            <p>
            お祭り気分でワクワク!! <br>
            お母さんもお父さんも <br>
            お楽しみください! 
            </p>
          </div>
        </div>
        <div class="arrow d-flex mb-6" style="position: relative;">
          <p style="width: 20%;">キッズパーク</p>
          <ul>
            <li>・ふわふわトランポリン</li>
            <li>・ボールプール</li>
            <li>・巨大迷路</li>
            <li>・キッズスペース(幼児対象)</li>
          </ul>
          <div class="arrow_box arrow_box_add">
            <p>
            遊び場 <br>
            満載!! 
            </p>
          </div>
        </div>
        <p class="card-text">※一部有料のコンテンツあります。</p>
      </v-card-text>
    </v-card>
    <v-card
      width="600"
      class="ml-auto mr-9 mb-9 white--text"
      color="#4169E1"
    >
      <p class="card_title mb-0 py-3 px-5" style="border-bottom: 1px solid #fff;">
        フードコート
      </p>
      <v-card-text class="white--text card-text">
        <p>飲食ゾーンあります</p>
        <p>・カレーライス・牛丼・焼きそば / ・タピオカジュース・フレッシュジュース</p>
        <p>・フランクフルト・サンドウィッチ / ・ウーロン茶・コーラ等</p>
      </v-card-text>
    </v-card>
    <p class="px-5" style="color: #444444;">※シルバー優先席あります。ごゆっくりおくつろきください</p>
    <v-item-group>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-item v-slot:default="{ active, toggle }" class="mb-12">
            <v-card
              :color="active ? 'primary' : ''"
              align="right"
              class="d-flex align-center justify-center"
              height="260"
              @click="toggle"
              id="bannar"
              style="position: relative;"
              to="/dance"
            >
            <p id="banner-posision" class="wf-nicomoji" style="opacity: 0.9;">
              わくフェス
            </p>
              <v-scroll-y-transition>
                <v-card-title
                  id="banner-text"
                   class="wf-nicomoji"
                >
                <div>
                  <p style="color: #6495ED">キッズダンスコンテスト<br><small>「<span class="wf-roundedmplus1c">子供</span>と<span class="wf-roundedmplus1c">言</span>ってあなどらないで！」</small></p>
                  <p style="color: #FA8072">ご<span class="wf-roundedmplus1c">当地</span>アイドルでショー<br><small>「どんなかんじ？こんなかんじ！」</small></p>    
                </div>              
                </v-card-title>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
  </v-item-group>
  <div class="top-btn text-center d-flex justify-space-around">
    <div class="mb-5 mx-1">
      <v-btn height="100" x-large class="btns" tile outlined color="warning" to="/form/store">
        ペットグッズ出展者大募集！<br>
        出展者情報
      </v-btn>    
    </div>
    <div class="mb-5 mx-1">
      <v-btn height="100" x-large class="btns" tile outlined color="success" to="/form/trim">
        ペットカット選手権出場者大募集！<br>
        出場者情報
      </v-btn>    
    </div>
    <div class="mb-5 mx-1">
      <v-btn height="100" x-large class="btns" tile outlined color="indigo" to="/form/freemarket">
        フリーマーケット出店者大募集！<br>
        出店者情報
      </v-btn>
    </div>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
	mounted: function(){
	document.title = "わくわくフェスティバル";
  },
  data() {
    return {
      tab: null,
      items: [
         '日時・場所', '料金',
      ],
      koryu: [
        {id: 1,title: '◉ 愛犬お手入簡単アドバイス'},
        {id: 2,title: '◉ プロトリマー向けアレンジレッスン'},
        {id: 3,title: '◉ プロの訓練士によるワンポイントアドバイス'},
        {id: 4,title: '◉ セラピードックで癒し効果'}
      ]
    }
  },
}
</script>

<style scoped>
#top-img1,#top-img2 {
  object-fit: cover;
}
.top-desc {
  width: 1100px;
}
.desc-title {
 font-size: 61px;
 color: #FF0000;
}
.desc-title2 {
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  padding: 30px 20px;
  font-size: 28px;
}
.desc-item-title {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
}
.desc-item {
  font-size: 25px;
}
.card_title {
  font-family: 'Kosugi Maru', sans-serif;
  font-size: 30px;
}
.card-text {
  font-family: 'Kosugi Maru', sans-serif;
}
.arrow_box {
	position: absolute;
  right: 50px;
  padding: 20px 40px;
	background: #fff;
  border-radius: 50%;
  color: #000000;
}
.arrow_box p {
  position: relative;
  margin-bottom: 0;
}
.arrow_box p:before {
  position: absolute;
  left : -75px;
  top: 20px;
  bottom: 0;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 50px 15px 0;
  border-color: transparent #fff transparent transparent;
}

.arrow_box_add p:before {
  top: 10px;
}

#bannar {
  background-image: url('../assets/img/bg1.jpg');
  background-position: 100%; 
  background-size: cover;
}
ul {
  list-style-type: none;
}
#banner-text p {
  font-size: 3rem!important;
  font-weight: bold;
  line-height: 1.1;
}
#banner-text small {
  font-size: 1.5rem!important;
  font-weight: lighter;
}
#banner-posision {
position: absolute;
background: #fff;
left: 5px;
top: 70px;
font-size: 35px;
border: 2px solid #ffa72d;
color:  #444444;
padding: 10px; 
border-radius: 50%; 
transform: rotate(-25deg);
}
.btns {
  width: 300px;
}
@media (max-width: 750px) {
#fv {
   max-height: 250px;
}
.top-desc {
  text-align: center;
  width: 100%;
}
.desc-title {
 font-size: 38px;
}
.desc-title2 {
  padding: 30px 20px;
  font-size: 18px;
}
.desc-item-title {
  font-size: 20px;
}
.desc-item {
  font-size: 18px;
}
.top-desc .d-flex {
  flex-direction: column;
}
h1.headline {
  font-size: 1rem!important;
}
div.display-2 {
  font-size: 1.7rem!important;
}
.top-btn {
  flex-direction: column;
}

.arrow {
  padding-bottom: 140px;
}
.arrow_box {
  right: 30px;
  bottom: 0;
  padding: 20px 40px;
  border-radius: 50%;
}
.arrow_box p {
  position: relative;
  margin-bottom: 0;
}
.arrow_box p:before {
  position: absolute;
  left : calc(50% - 20px);
  top: -30px;
  bottom: 0;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 17.5px 20px 17.5px;
  border-color: transparent transparent #fff transparent;
}

.arrow_box_add p:before {
  top: -35px;
}
#banner-text p {
  font-size: 1.4rem!important;
  font-weight: bold;
  line-height: 1.1;
}
#banner-text small {
  font-size: 1rem!important;
  font-weight: lighter;
}
#banner-posision {
left: 0;
top: -15px;
font-size: 25px;
border: 1px solid #ffa72d;
}

}
</style>

