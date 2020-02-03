<template>
  <v-tabs
    fixed-tabs
    background-color="warning"
    dark
    show-arrows
    class="wf-roundedmplus1c"
  >
    <v-tab to="/">
      <h1>
        わくわくフェスティバル
      </h1>
    </v-tab>
    <v-tab to="/participants_dance">
      コンテスト・アイドルでショー
    </v-tab>
    <v-tab to="/companion">
      愛犬家のみなさまへ
    </v-tab>
    <v-tab to="/contact">
      お問い合わせ
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
h1 {
  cursor: pointer;
  font-size: 16px;
}
@media (max-width: 750px) {
h1 {
  font-size: 15px;
}
}
</style>