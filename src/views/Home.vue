<template>
  <div>
    <v-img id="fv"
        src="@/assets/img/fv.jpg"
        height="650"
        width="100%"
    >
    </v-img>
    <v-card color="mb-3">
      <v-parallax
        height="auto"
        class="pb-10"
        id="top-img"
        src="@/assets/img/bg2.jpg"
      >
        <v-card-title class="text-center justify-center pt-7 pb-12">
          <h3 class="font-weight-black headline">わくわくフェスティバルは<br>愛犬はもちろんお子様と一緒にご家族で楽しめるイベントです！</h3>
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
                  <li>4月25日(土) 4月26日(日)</li>
                  <li>10：00〜17：00</li>
                  <li class="py-3 font-weight-bold">会場</li>
                  <li><a href="https://www.aichiskyexpo.com/access/" target="_blank">Aichi Sky Expo 展示ホールA</a></li>
                  <li class="mb-4">
                    愛知県国際展示場<br>愛知県常滑市セントレア5丁目10番地1号<br>
                    (名鉄中部国際空港駅より徒歩5分)<br>
                  </li>  
                  <li>
                    (お車でお越しの方)<br>
                    セントレア東ICを降りて直進役2km<br>
                    大駐車場有(有料最大800円)
                  </li>            
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <ul class="pa-0 text-center subtitle-1">
                <li class="py-2 font-weight-bold">前売り券<br>（コンビニ各店にて2020年2月初月より販売開始）</li>
                <li>大人（高校生以上）:1,400円</li>
                <li class="mb-3">子供（中学生以下）:700円</li>
                <li class="py-2 font-weight-bold">当日券</li>
                <li>大人（高校生以上）:1,600円</li>
                <li class="mb-3">子供（中学生以下）:900円</li>
                <li>※入場料 3歳未満無料</li>
                <li>※ご入場の際、お子様には縁日、キッズパークで使えるお楽しみ券を贈呈致します。</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-container>
      </v-parallax>
    </v-card>
    <v-container>
    <v-timeline class="mb-8" reverse :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
        color="red lighten-2"
        icon="fas fa-tshirt"
        fill-dot
        >
          <v-card
              color="red lighten-2"
              dark
          >
              <v-card-title class="title">交流広場</v-card-title>
              <v-card-text class="white pt-4 text--primary">
                <p>「オフ会しよう！」オフ会には最適広場！</p>
                <p>「わん芸 it's ショータイム」芸達者なわんちゃんが登場します</p>
                <p>「うちの子自慢トークショー」こんなことやあんなことができる！など自慢して下さい</p>
                <p>「ペットカット選手権」ライブ方式。好みのスタイルを見つけてください</p>
                <br>
                ・愛犬お手入れ簡単アドバイス<br> ・プロトリマー向けアレンジレッスン<br>
                ・プロの訓練士による、ワンポイントアドバイス <br>・セラピードッグで癒し効果
              </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
        color="purple darken-1"
        icon="fas fa-hand-scissors"
        fill-dot
        >
          <v-card
              color="purple darken-1"
              dark
          >
              <v-card-title class="title">じゃんけん大会</v-card-title>
              <v-card-text class="white pt-4 text--primary">
                ご来場者様全員参加でじゃんけん大会！<br>
                1 日 3 回開催<br>
                豪華商品期待してください！
              </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
        color="green lighten-1"
        icon="fas fa-running"
        fill-dot
        >
          <v-card
              color="green lighten-1"
              dark
          >
              <v-card-title class="title">縁日コーナー・キッズパーク</v-card-title>
              <v-card-text class="white pt-4 text--primary">
                <div class="d-flex mb-5">
                   <p class="font-weight-bold">縁日</p>
                   <ul>
                    <li>・射的</li>
                    <li>・わなげ</li>
                    <li>・すいか割り</li>
                    <li>・ラッキーボール</li>
                   </ul>
                </div>
                <div class="balloon1-top">
                  <p>お祭り気分で<br>最高！</p>
                </div>
                <div class="d-flex">
                   <p class="font-weight-bold">キッズパーク</p>
                   <div>
                     <ul class="mb-5">
                       <li>・ふわふわトランポリン</li>
                       <li>・ポールプール</li>
                       <li>・巨大迷路</li>
                       <li>・キッズスペース（幼児対象）</li>
                     </ul>   
                      <div class="balloon1-top ">
                          <p>遊び場<br>満載！</p>
                      </div>                                      
                     <p>※一部有料のコンテンツあります</p>
                   </div>
                </div>
              </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
        color="indigo"
        icon="fas fa-utensils"
        fill-dot
        >
          <v-card
              color="indigo"
              dark
          >
              <v-card-title class="title">フードコート</v-card-title>
              <v-card-text class="white pt-4 text--primary">
                極グループの飲食ゾーンあります
              </v-card-text>
          </v-card>
        </v-timeline-item>
    </v-timeline>
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
            <p id="banner-posision">
              わくフェス
            </p>
              <v-scroll-y-transition>
                <v-card-title
                  id="banner-text"
                style="color: #444444;"
                >
                <div>
                  <p>キッズダンスコンテスト<br><span>「子供と言ってあなどるな！」</span></p>
                  <p>ご当地アイドルでショー<br><span>「どんな感じ？こんな感じ！」</span></p>    
                </div>              
                </v-card-title>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
  </v-item-group>
  <div class="top-btn text-center mb-5 d-flex justify-space-around">
    <div>
      <p>ペットグッズ出展社大募集！</p>
      <v-btn x-large class="ma-2" tile outlined color="success" to="/form/store">
        出展社情報
      </v-btn>    
    </div>
    <div>
      <p>ペットカット選手権出場者大募集！</p>
      <v-btn x-large class="ma-2" tile outlined color="success" to="/form/trim">
        出場者情報
      </v-btn>    
    </div>
    <div>
      <p>フリーマーケット出店者大募集！</p>
      <v-btn x-large class="ma-2" tile outlined color="success" to="/form/freemarket">
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
    }
  },
}
</script>

<style scoped>
#top-img {
  object-fit: cover;
}
.balloon1-top {
  position: relative;
  display: inline-block;
  margin: 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
}

.balloon1-top:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-bottom: 15px solid #e0edff;
}

.balloon1-top p {
  margin: 0;
  padding: 0;
}
.balloon1 p {
  margin: 0;
  padding: 0;
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
  font-size: 2.6rem!important;
  font-weight: bold;
  line-height: 1.1;
}
#banner-text span {
  font-size: 1.3rem!important;
  font-weight: lighter;
}
#banner-posision {
position: absolute;
background: #fff;
left: 30px;
top: -25px;
font-size: 30px;
border: 2px solid #ffa72d;
color:  #444444;
padding: 10px; 
border-radius: 50%; 
transform: rotate(-25deg);
}
@media (max-width: 750px) {
#fv {
   max-height: 250px;
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
#banner-text p {
  font-size: 1.5rem!important;
  font-weight: bold;
  line-height: 1.1;
}
#banner-text span {
  font-size: 0.9rem!important;
  font-weight: lighter;
}
#banner-posision {
left: 10px;
top: -25px;
font-size: 18px;
border: 1px solid #ffa72d;
}

}
</style>

