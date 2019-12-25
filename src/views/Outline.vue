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
  },
    data () {
      return {
        profiles: [
          {
            title: '本店',
            text: '〒500-8842 岐阜市金町8丁目20番地 株式会社スタイルクリエーション',
          },
          {
            title: '東京営業所',
            text: '〒105-0004東京都港区新橋2-16-1ニュー新橋ビル116 昭和63年9月設立',
          },
          {
            title: '資本金',
            text: '100万円',
          },
          {
            title: '代表',
            text: '中山 大治郎(昭和35年6月18日生)',
          },
          {
            title: '会社の沿革',
            text: '弊社取締役中山大治郎が医療法人市田信美容整形外科医及び、京都サンクス美容外科に事務、総務長として在任中、医療界における情報及び知識を生かし、お客様のニーズにそった健康器等を開発するべく弊社を設立。自社パテント商品として、脚スタイルの改善及び、脚の健康を目的としたインソール「プティー」を製品化。販売拡販に注力し、各通販、東急ハンズ、パルコ、ロフト、各生協等に販売。以後、時代背景に基づくニーズに合わせ業態変革を行い、鉄道乗車券・航空券・商品券・プリペイドカードの卸売及び小売販売を主な業務としている。2008年度より日本とベトナム間の架け橋助行本格参入。20017年度より本邦において日本語教育機関（日本語学校）を設立。',
          },
          {
            title: '許認可',
            text: 'H16年 旅行業 第3-262号 取得',
          },
        ],
      }
    },
  }
</script>