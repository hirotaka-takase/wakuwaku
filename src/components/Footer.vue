<template>
   <v-footer 
    padless
    class="border"
    >
    <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <v-row
      no-gutters
    >
        <v-col cols="8" class="pa-3">
            <v-btn
            v-for="link in links"
            :key="link.id"
            :to="link.to"
            color="rgba(0, 0, 0, 0.54)"
            text
            class="pt-1 mx-10 my-1 d-block"
            small
            width="20%"
            >
               {{ link.name }}
            </v-btn>
        </v-col>
        <v-col cols="4" class="my-2">
                <v-card-text class="font-weight-regular">
                    <p class="mb-1">お問い合わせ先</p>
                    <p>
                        ワクワクフェスティバル運営企画部
                        <span class="pl-4 d-block">
                        TEl: 058-263-5577
                        （平日 9:00〜18:00)
                        </span>
                    </p>
                </v-card-text>
        </v-col>        
      <v-col
        class="py-4 warning text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Style Creation Co.Ltd</strong>
      </v-col>
    </v-row>
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
              {id: 3, name: '前売券コンビニで発売中!', to: "/contact"},
              {id: 4, name: 'Facebook', to: "/particiants"},
              {id: 5, name: 'Instagram', to: "/philosophy"},
              {id: 6, name: 'Twetter', to: "/test"}
       ]
    }
  }
};
</script>