<template>
  <div>
    <div> 
      <v-img id="fv"
        src="@/assets/img/fv.jpg"
        height="600"
        width="100%"
      ></v-img>
    </div>    
    <v-card color="mb-8">
      <v-parallax
        height="auto"
        class="pb-10"
        id="top-img"
        src="@/assets/img/bg2.jpg"
      >
        <v-card-title class="text-center justify-center pt-7 pb-12">
          <h1 class="font-weight-black headline">わくわくフェスティバルは<br>愛犬はもちろんお子様と一緒にご家族で楽しめるイベントです！</h1>
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
                  <li>4月25日 4月26日</li>
                  <li>10：00〜17：00</li>
                  <li class="py-3 font-weight-bold">会場</li>
                  <li><a href="https://www.aichiskyexpo.com/access/" target="_blank">Aichi Sky Expo 展示ホールA</a></li>
                  <li>
                    愛知県国際展示場<br>愛知県常滑市セントレア5丁目10番地1号<br>
                    (名鉄中部国際空港駅より徒歩5分)
                  </li>              
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <ul class="pa-0 text-center subtitle-1">
                <li class="py-3 font-weight-bold">当日券</li>
                <li>大人（高校生以上）:1,600円</li>
                <li class="mb-3">子供:900円</li>
                <li class="py-3 font-weight-bold">前売り券<br>（コンビニ各店にて2020年2月より販売開始）</li>
                <li>大人:1,400円</li>
                <li class="mb-3">子供:700円</li>
                <li>※入場料 3歳未満無料</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-container>
      </v-parallax>
    </v-card>
    <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="bannar in bannars"
          :key="bannar.id"
          cols="12"
          md="12"
        >
          <v-item v-slot:default="{ active, toggle }" class="mb-12">
            <v-card
              :color="active ? 'primary' : ''"
              align="center"
              class="d-flex align-center justify-center"
              height="250"
              @click="toggle"
              id="bannar"
              :to="bannar.to"
            >
              <v-scroll-y-transition>
                <v-card-title
                  class="pa-2 font-weight-thin"
                  id="banner-text"
                  :style="{color: bannar.color}"
                >
                  {{ bannar.name }}
                </v-card-title>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  </div>
</template>

<script>
// @ is an alias to /src

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
      bannars: [
        {id: 1,name: 'わんわんカーニバル',to: '/carnival',color: "#F48FB1"},
        {id: 2,name: 'わくフェスキッズダンスコンテスト&チアダンスショー',to: '/dance',color: '#00ACC1'},
        {id: 3,name: '子供の楽園/各種催し',to: '/park',color: '#5C6BC0'},
      ]
    }
  },
}
</script>

<style scoped>
#top-img {
  object-fit: cover;
}
#bannar {
  background-image: url('../assets/img/bg1.jpg');
  background-position: 100%; 
  background-size: cover;
}
ul {
  list-style-type: none;
}
#banner-text {
  font-size: 2.1rem!important;
  font-weight: bold;
}
@media (max-width: 480px) {
#fv {
   max-height: 250px;
}
h1.headline {
  font-size: 1rem!important;
}
div.display-2 {
  font-size: 1.7rem!important;
}
#banner-text {
  font-size: 1.7rem!important;
}
}
</style>

