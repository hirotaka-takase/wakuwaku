<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <Title :title="'会社概要'"></Title>
                <v-simple-table>
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="profile in profiles" :key="profile.name">
                            <td width="30%">{{ profile.title }}</td>
                            <td width="70%">{{ profile.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-container>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
    components: {
    Title
  },
	mounted: function(){
    document.title = "会社概要";
    document.querySelector("meta[property='og:title']").setAttribute('content', "会社概要");
    document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる、地域限定わくわくフェスティバル2020を運営している株式会社style creationの会社概要です。");
    document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる、地域限定わくわくフェスティバル2020を運営している株式会社style creationの会社概要です。");
  },
    data () {
      return {
        profiles: [
          {
            title: '本店（昭和63年9月設立）',
            text: '〒500-8842　岐阜市金町8丁目20番地　株式会社スタイルクリエーション',
          },
          {
            title: '東京営業所',
            text: '〒105-0004　東京都港区新橋2-16-1',
          },
          {
            title: '代表',
            text: '中山　大治郎',
          },
        ],
      }
    },
  }
</script>