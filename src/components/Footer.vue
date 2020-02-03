<template>
  <v-footer
    padless
  >
    <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>

    <v-card
      flat
      tile
      width="100%"
      class="warning lighten-1 white--text text-center"
    >
      <v-card-text>
            <v-btn
            v-for="link in links"
            :key="link.id"
            :to="link.to"
            color="rgba(0, 0, 0, 0.54)"
            text
            class="pt-1 mx-10 my-1"
            small
            id="btn"
            width="20%"
            >
               {{ link.name }}
            </v-btn>
            <v-btn
            v-for="link in sns"
            :key="link.id"
            :href="link.to"
            target="_blank"
            color="rgba(0, 0, 0, 0.54)"
            text
            class="pt-1 mx-10 my-1"
            small
            id="btn"
            width="20%"
            >
               {{ link.name }}
            </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
                    <p class="mb-1">お問い合わせ先</p>
                    <p>
                        わくわくフェスティバル運営企画部
                        <span class="pl-4 d-block">
                        TEl: 058-263-5577
                        （平日 9:00〜18:00)
                        </span>
                    </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright © {{ new Date().getFullYear() }} - <strong>STYLE CREATION INC.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
      return {
          links: [
              {id: 1, name: "ホーム", to: "/"},
              {id: 2, name: '会社概要', to: "/outline"},
       ],
            sns: [
                {id: 3, name: '前売券コンビニで発売中!', to: "https://eplus.jp/sf/detail/3188790001-P0030001"},
                {id: 4, name: 'Facebook', to: "https://www.facebook.com/wakuwaku.fs"},
                {id: 5, name: 'Instagram', to: "http://instagram.com/wakuwakufestival"},
                {id: 6, name: 'Twetter', to: "https://Twitter.com/waku.fes"}
       ]
    }
  }
};
</script>
