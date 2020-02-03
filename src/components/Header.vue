<template>
  <div class="mb-12">
    <v-app-bar
      color="warning lighten-1"
      dense
      dark
      fixed
    >
      <v-toolbar-title>
        <router-link class="wf-nicomoji" tag="h1" to="/" text--white>わくわくフェスティバル</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fas fa-list</v-icon>
          </v-btn>
        </template>

        <template>
          <v-card
            class="mx-auto"
            height="280"
            width="500"
          >
            <v-navigation-drawer
              absolute
              dark
              src="@/assets/img/bg3.jpg"
              width="100%"
              permanent
            >
              <v-list>
                <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">わくわくフェスティバル</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-divider></v-divider>
                <v-list-item
                  v-for="([link, text], i) in items"
                  :key="i"
                  link
                >
                    <router-link :to="link" style="color: #fff; text-decoration: none; font-weight: bold; cursor: pointer;">{{ text }}</router-link>
                </v-list-item>
              </v-list>
              <template v-slot:append>
                <div class="pa-2">
                  <v-btn block to="/">HOME</v-btn>
                </div>
              </template>
            </v-navigation-drawer>
          </v-card>
        </template>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
    data () {
      return {
        items: [
        ['/participants_dance', 'コンテスト＆アイドルでショー'],
        ['/companion', '愛犬家のみなさまへ'],
        ['/contact', 'お問い合わせ'],
        ],
      }
    },
};
</script>

<style>
h1 {
  cursor: pointer;
  font-size: 30px;
}
@media (max-width: 750px) {
h1 {
  font-size: 26px;
}
}
</style>