<template>
  <div class="common home">
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
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-card-title class="text-center justify-center pt-7 pb-12">
      <h1 class="font-weight-bold headline">わくわくフェスティバルは<br>子供から大人まで愛犬と一緒に楽しめるイベントです！</h1>
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
        class="white--text title font-weight-bold"
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
              <li>9:00〜18:00</li>
              <li class="py-3 font-weight-bold">会場</li>
              <li><a href="https://www.aichiskyexpo.com/access/" target="_blank">Aichi Sky Expo 展示ホールA</a></li>
              <li>愛知県国際展示場<br>愛知県常滑市セントレア5丁目10番地1号</li>              
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <ul class="pa-0 text-center subtitle-1">
            <li class="py-3 font-weight-bold">前売り券<br>（コンビニ各店にて販売中）</li>
            <li>大人:1,300円</li>
            <li>子供（小学生以下）:700円</li>
            <li>学生:1,000円</li>
            <li class="py-3 font-weight-bold">当日券</li>
            <li>大人:1,600円</li>
            <li>子供（小学生以下）:900円</li>
            <li class="mb-3">学生:1,300円</li>
            <li>※学生の方は、ご入場の際に学生証の提示をお願いする場合があります。</li>
            <li>※入場料 2歳以下無料</li>
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
              class="d-flex align-center"
              height="250"
              @click="toggle"
              id="bannar"
              :to="bannar.to"
            >
              <v-scroll-y-transition>
                <div
                  class="display-2 pa-2 flex-grow-1 text-center font-italic"
                  :class="bannar.color"
                >
                  {{ bannar.name }}
                </div>
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
        {id: 1,name: 'わんわんカーニバル',to: '/carnival',color: 'red--text'},
        {id: 2,name: 'わくフェスキッズダンスコンテスト&チアダンスショー',to: '/dance',color: 'purple--text'},
        {id: 3,name: '子供の楽園',to: '/park',color: 'blue--text'},
      ]
    }
  },
}
</script>

<style scoped>
#bannar {
  background-image: url('../assets/img/fv.jpg');
  background-position: 100%; 
  background-size: cover;
}
ul {
  list-style-type: none;
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
}
</style>

