<template>
  <v-tabs
    fixed-tabs
    :color="'warning'"
  >
    <v-tab to="/">ホーム</v-tab>
    <v-tab to="philosophy">わくフェス理念</v-tab>
    <v-tab to="participants_dance">出場・出演者希望</v-tab>
    <v-tab to="companion">ペット同伴について</v-tab>
    <v-tab to="contact">お問い合わせ</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Header",
};
</script>
