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

        <v-list>
          <v-list-item
            v-for="header in headers"
            :key="header.title"
            @click="() => {}"
          >
            <v-list-item-title>
              <router-link class="wf-roundedmplus1c" style="white-space:pre-wrap; word-wrap:break-word;" tag="nav" :to="header.to">
                <v-icon class="pr-3" :color="header.color">{{ header.icon }}</v-icon>{{ header.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
    data () {
      return {
        headers: [
          {
            title: `コンテスト＆
                アイドルでショー`,
            to: '/participants_dance',
            icon: 'fas fa-child',
            color: 'green'
          },
          {
            title: '愛犬家のみなさまへ',
            to: '/companion',
            icon: 'fas fa-dog',
            color: 'blue'
          },
          {
            title: 'お問い合わせ',
            to: '/contact',
            icon: 'far fa-envelope',
            color: 'purple'
          },
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
