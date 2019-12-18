<template>
  <div class="common home">
  <v-row align="center" class="mb-12"> 
    <v-img
      src="@/assets/img/fv.jpg"
      aspect-ratio="1"
      max-height="640"
      width="100%"
    ></v-img>
  </v-row>    
    <v-container>
      <v-row class="mb-5">
        <v-col md-12 align="center">
          <h1 class="display-1">わくわくフェスティバルは子供から大人まで<br class="pc">愛犬と一緒に楽しめるイベントです！</h1>
        </v-col>
      </v-row>
    </v-container>
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
                  class="display-2 flex-grow-1 text-center font-italic"
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
  data() {
    return {
      bannars: [
        {id: 1,name: 'わんわんカーニバル',to: '/carnival',color: 'red--text'},
        {id: 2,name: 'キッズコンテスト・チアダンスショー',to: '/dance',color: 'purple--text'},
        {id: 3,name: '子供の楽園',to: '/park',color: 'blue--text'},
      ]
    }
  }
  
}
</script>

<style scoped>
#bannar {
  background-image: url('../assets/img/fv.jpg');
  background-position: 100%; 
  background-size: cover;
}
</style>
