<template>
  <div>
    <v-img id="fv"
        src="@/assets/img/fv.jpg"
        height="650"
        width="100%"
        alt="わくわくフェスティバル"
    >
    </v-img>
    <v-container>
      <div>
        <p class="title text-center">【わくわくフェスティバル延期のご通知】</p>
        <p>令和2年4月25日（土）、26日（日）に開催予定でありました「わくわくフェスティバル」は、新型肺炎・コロナウイルスの影響による社会状勢を鑑み、皆様の健康への影響を考慮した結果、止む無く延期とさせていただく事になりました。
        主催者としましては、わくフェス（呼称）開催に向け万全の準備をしておりましたので大変残念なところでございます。
        楽しみにされていたお客様にはご迷惑をおかけしますことをお詫び申し上げます。
        以上、新型肺炎・コロナウイルスによるこの度の、わくフェス（呼称）延期につきましては何卒ご理解いただけますようお願い申し上げます。
        引き続きわくわくフェスティバルの変わらぬご愛顧何卒よろしくお願い申し上げる次第です。</p>
      </div>
      <div>
        <p class="title text-center">【わくわくフェスティバル代替開催日決定のお知らせ】</p>
        <p>令和2年4月25日（土）、26日（日）に予定していた、わくフェス（呼称）延期につき、令和2年10月24日（土）、25日（日）に代替開催することに決定いたしました。
          会場は今回同様AICHI SKY EXPO（愛知国際会議展示場）ホールFです。こちらも1万人収容の大展示場となっております。
          愛犬家はもとよりお子様から大人まで楽しんでいただけるフェスとして万全の準備をして参ります。</p>
      </div>
      <div>
        <p class="title text-center">【チケット払い戻し】</p>
        <p>令和2年4月25日（土）、26日（日）に開催予定していた、わくフェス（呼称）延期に伴い、すでにお買い求めていただいている前売りチケットは払い戻しをさせていただきます。
          払い戻しの詳細についてはお買い求めいただいた下記のURLをご覧ください。<br>
          「ローソンチケット」<a href="http://l-tike.com/oc/lt/haraimodoshi/" target="_blank" rel="noopener">http://l-tike.com/oc/lt/haraimodoshi/</a><br>
          「チケットぴあ」<a href="http://md.pia.jp/pia/guide/refund.jsp" target="_blank" rel="noopener">http://md.pia.jp/pia/guide/refund.jsp</a><br>
          「e+（イープラス）」<a href="http://eplus.jp/refund1/" target="_blank" rel="noopener">http://eplus.jp/refund1/</a></p>
      </div>
    </v-container>
    <!--
    <v-parallax
    height="560"
    dark
    id="top-img1"
    src="@/assets/img/top-dog.jpg"
    alt="ワンチャン"
    >
        <v-container class="top-desc">
          <div class="wf-roundedmplus1c d-flex justify-center mb-8" style="font-weight: bold;">
            <div>
              <p class="desc-title">愛犬家大集合!</p>
              <p class="mb-1 top-desc-title" style="color: #00008B;">東海ペットイベント!</p>
              <p class="mb-3 top-desc-title">交流広場</p>
              <ul>
                  <li>
                    ・ペットカット選手権 
                  </li>
                  <li>
                    ・わん芸 IT'sショータイム!
                  </li>
                  <li>
                    ・うちの子自慢トークショー
                  </li>
                  <li>
                    ・全員参加でじゃんけんポン! 
                  </li>
              </ul>
            </div>
            <div>
              <p class="desc-title2">お子様から大人までご家族で楽しめるイベントです! </p>
              <p class="mb-3 top-desc-title">たくさんのワンちゃんも見られますよ!</p>
                <ul>
                    <li>
                      ・縁日・キッズパーク
                    </li>
                    <li>
                      ・キッズダンスコンテスト 
                    </li>
                    <li>
                      ・ご当地アイドル男女でショー 
                    </li>
                </ul>
              </div>
            </div>
            <h2 class="text-center">
               <v-btn class="title" x-large height="100" color="primary" to="/about">2020わくわく<br>フェスティバル東海とは</v-btn>
            </h2>
        </v-container>
  </v-parallax>
    <v-card color="mb-3">
      <v-parallax
        height="auto"
        class="py-10"
        id="top-img2"
        src="@/assets/img/bg2.jpg"
        alt="壁の背景"
          >
        <v-container fill-width>
        <v-tabs
          v-model="tab"
          grow
          icons-and-text
          color="deep-purple accent-4"
        >
          <v-tab
            v-for="item in items"
            :key="item.title"
            class="title font-weight-black"
          >
            {{ item.title }}
            <i :class=item.icon></i>
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
                  <li><a href="https://www.aichiskyexpo.com/access/" target="_blank">AICHI SKY EXPO 屋内ホールA</a></li>
                  <li>
                    愛知県常滑市セントレア5丁目10番地1号
                  </li>
                  <li class="mb-3">
                    （名鉄中部国際空港駅より徒歩5分）
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
                <li class="mb-3">子供（中学生以下）：700円</li>
                <li class="py-2 font-weight-bold">当日券</li>
                <li>大人（高校生以上）：1,600円</li>
                <li class="mb-3">子供（中学生以下）：900円</li>
                <li>※3歳未満無料</li>
                <li>※ご入場の際、お子様には縁日、キッズパークで使えるお楽しみ券を１枚進呈します。</li>
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
          <p>「オフ会しよう!」オフ会には最適広場! <br>事前にお申入いただければスペース確保いたします。(無料）</p>
          <p>「ペットカット選手権」ライブ形式。好みのスタイル見つけて下さい。</p>
          <p>「わん芸 IT's ショータイム」芸達者なワンちゃんが登場します。</p>
          <p>「うちの子自慢 トークショー」こんなことあんなこと何でもアリアリ!<br>自慢して下さい! </p>
          <ul>
            <li>◉ 愛犬お手入簡単アドバイス</li>
            <li>◉ プロトリマー向けアレンジレッスン</li>
            <li>◉ プロの訓練士によるワンポイントアドバイス</li>
            <li>◉ セラピードックで癒し効果</li>
          </ul>
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
            <li>・輪投げ</li>
            <li>・スイカ割り</li>
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
            <li>・フワフワトランポリン</li>
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
    <p class="px-5 silver-text" style="color: #444444;">※シルバー優先席あります。ごゆっくりおくつろぎください</p>
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
              height="450"
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
                <div class="text-center">
                  <p style="color: #6495ED">キッズダンスコンテスト<br><small>「<span class="wf-roundedmplus1c">子供</span>と<span class="wf-roundedmplus1c">言</span>ってあなどらないで！」</small></p>
                  <p style="color: #FA8072">ご<span class="wf-roundedmplus1c">当地</span>アイドル男女でショー<br><small>「どんなかんじ？こんなかんじ！」</small></p>    
                  <p><span class="wf-roundedmplus1c">東京</span>から<span class="wf-roundedmplus1c">急遽出演決定</span>！<br><span class="wf-roundedmplus1c">男性</span>ボーカルユニットBLACK IRIS<br>オリコンデイリーランキング1位<br>オリコンウィークリーランキング3位</p>
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
        出展情報！
      </v-btn>    
    </div>
    <div class="mb-5 mx-1">
      <v-btn height="100" x-large class="btns" tile outlined color="success" to="/form/trim">
        ペットカット選手権出場者募集!
      </v-btn>    
    </div>
    <div class="mb-5 mx-1">
      <v-btn height="100" x-large class="btns" tile outlined color="indigo" to="/form/freemarket">
        フリーマーケット出店募集！
      </v-btn>
    </div>
  </div>
  </v-container>
  -->
  </div>
</template>

<script>
export default {
  name: 'home',
	mounted: function(){
      document.title = "わくわくフェスティバル2020";
      document.querySelector("meta[property='og:title']").setAttribute('content', "わくわくフェスティバル2020");
      document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020では子供から大人まで愛犬と一緒に楽しめるイベントです！わんちゃんたちと最高の思い出を作りましょう！皆様のご参加お待ちしております。");
      document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020では子供から大人まで愛犬と一緒に楽しめるイベントです！わんちゃんたちと最高の思い出を作りましょう！皆様のご参加お待ちしております。");
  },
  data() {
    return {
      tab: null,
      items: [
        {title: '日時・場所',icon: "fas fa-clock"},
        {title: '料金', icon: "fas fa-money-check-alt"}
      ],
    }
  },
}
</script>

<style scoped>
#top-img1,#top-img2 {
  object-fit: cover;
}
.desc-title {
 font-size: 55px;
 color: #FF0000;
 margin-bottom: 0;
}
.desc-title2 {
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  padding: 25px 30px;
  font-size: 28px;
  width: 450px;
}
.top-desc-title {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
  color: #fff;
}
.top-desc ul li {
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  color: #fff;
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
  font-size: 2.8rem!important;
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
#top-img1 {
  height: 720px!important;
}
.top-desc {
  text-align: center;
  width: 100%;
}
.desc-title {
 font-size: 38px;
}
.desc-title2 {
  font-size: 18px;
  padding: 25px 15px;
  width: 280px;
}
.top-desc-title {
  font-size: 20px;
}
.top-desc ul li {
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
.silver-text {
  padding-bottom: 30px;
}
#banner-text p {
  font-size: 1.7rem!important;
  font-weight: bold;
  line-height: 1.1;
}
#banner-text small {
  font-size: 1.2rem!important;
  font-weight: lighter;
}
#banner-posision {
left: -10px;
top: -40px;
font-size: 21px;
border: 1px solid #ffa72d;
}

}
</style>

