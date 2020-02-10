<template>
  <v-card color="warning" class="wf-roundedmplus1c">
    <v-card-title class="text-center justify-center pa-0 pt-1">
      <h1><router-link class="white--text wf-nicomoji" style="text-decoration: none;" to="/">わくわくフェスティバル</router-link></h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      fixed-tabs
      center-active
      dark
      show-arrows
      class="wf-roundedmplus1c"
    >
      <v-tab
        v-for="item in items"
        :key="item.title"
        :to="item.to"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data () {
      return {
        tab: null,
        items: [
          {title: 'コンテスト・アイドルでショー', to: '/participants_dance'},
          {title: '愛犬家のみなさまへ', to: '/companion'},
          {title: 'お問い合わせ', to: '/contact'},
        ],
      }
    }
};
</script>

<style>
h1 {
  cursor: pointer;
  font-size: 27px;
}
</style>