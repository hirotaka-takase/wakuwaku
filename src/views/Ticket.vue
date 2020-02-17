<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <Title :title="'チケット購入方法'"></Title>
            </v-card-text>
            <v-row dense class="pa-5">
                <v-col cols="12">
                    <v-card
                        color="#483D8B"
                        dark
                        elevation="0"
                        class="text-center"
                    >
                        <v-card-title class="justify-center headline">チケットぴあ</v-card-title>
                        <v-card-subtitle class="pt-3">
                            <span>・セブン-イレブンでの直接購入</span><br>
                            セブン-イレブン店頭「マルチコピー機」から[チケットぴあ]を選択しPコード『644841』を入力ください。<br>
                            24時間利用可能 ※毎週火・水曜の1:30～5:30は除く<br>
                            ご利用ガイド：<a href="http://t.pia.jp/guide/sej-t.jsp" target="_blank">http://t.pia.jp/guide/sej-t.jsp</a>
                        </v-card-subtitle>
                        <v-card-subtitle>
                            <span>・チケットぴあ店頭で購入</span><br>
                            発売初日はPM13:00～/各店舗営業時間によります。<br>
                            チケットぴあ店舗一覧<a href="http://ticket-search.pia.jp/pia/spst/spst_map01.do" target="_blank"> http://ticket-search.pia.jp/pia/spst/spst_map01.do</a>                       
                        </v-card-subtitle>
                        <v-card-subtitle>
                            <span>・インターネットでの予約／購入</span><br>
                            ※チケットの予約・購入には会員登録が必要です。<br>
                            <a href="https://t.pia.jp/" target="_blank">https://t.pia.jp/</a><br>
                            ※パソコン/モバイル共通
                        </v-card-subtitle>
                        <v-card-actions class="text-center">
                            <v-btn
                            icon
                            @click="show = !show"
                            class="font-weight-bold"
                            >
                                詳細、ご不明な点のお問合せ
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                チケットぴあ：0570-02-9111<br>
                                ※音声認識による受付は24時間対応、10:00－18:00（オペレーター対応）<br>
                                ※毎週（火）・（水）2:30～5:30はシステムメンテナンスのため受付休止。
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card
                        color="#385F73"
                        dark
                        elevation="0"
                        class="text-center"
                    >
                        <v-card-title class="justify-center headline">ローチケ</v-card-title>
                        <v-card-subtitle class="pt-3">
                            <span>・ローソン／ミニストップでの直接購入</span><br>
                            ローソン・ミニストップ店頭「Loppi（ロッピー）」から<br>
                            Lコード『43228』を入力ください。<br>
                            購入URL：<a href="https://l-tike.com/wakuwakufes/" target="_blank">https://l-tike.com/wakuwakufes/</a>
                        </v-card-subtitle>
                        <v-card-actions class="text-center">
                            <v-btn
                            icon
                            @click="show = !show"
                            class="font-weight-bold"
                            >
                                詳細、ご不明な点のお問合せ
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                ローソンチケット：0570-000-777＜10:00－18:00＞
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card
                        color="#B22222"
                        dark
                        elevation="0"
                        class="text-center"
                    >
                        <v-card-title class="justify-center headline">イープラスチケット</v-card-title>
                        <v-card-subtitle class="pt-3">
                            <span>・ファミリーマートでの直接購入</span><br>
                            ファミリーマート店頭「ファミポート」から「わくわくフェスティバル」を検索ください。<br>
                            ご利用ガイド：<a href="https://www.family.co.jp/services/famiport.html" target="_blank">https://www.family.co.jp/services/famiport.html</a>
                        </v-card-subtitle>
                        <v-card-subtitle>
                            <span>・インターネットでの予約／購入</span><br>
                            <a href="https://eplus.jp/" target="_blank">https://eplus.jp/</a><br>
                            ※チケットの予約・購入には会員登録が必要です。<br>
                            ご利用ガイド：<a href="http://eplus.jp/qa/" target="_blank">http://eplus.jp/qa/</a>
                        </v-card-subtitle>
                        <v-card-actions class="text-center">
                            <v-btn
                            icon
                            @click="show = !show"
                            class="font-weight-bold"
                            >
                                詳細、ご不明な点のお問合せ
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-text>
                                <a href="http://eplus.jp/qa/" target="_blank">http://eplus.jp/qa/</a><br>
                                イープラスカスタマーセンター：0570-06-9911＜受付時間10:00－18:00・土日祝含む＞
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
  name: 'companion',
    components: {
    Title
  },
  mounted: function(){
    document.title = "チケット購入方法";
    document.querySelector("meta[property='og:title']").setAttribute('content', "チケット購入方法について");
    document.querySelector("meta[name='description']").setAttribute('content', "名古屋のわくわくフェステバル2020のイベントチケット購入情報です。4月25・26日は名古屋に集合！ペットと楽しく遊ぼう！");
    document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋のわくわくフェステバル2020のイベントチケット購入情報です。4月25・26日は名古屋に集合！ペットと楽しく遊ぼう！");
  },
  data: () => ({
    show: false,
  }), 
}
</script>

<style scoped>
a {
    color: #ffffff!important;
}
span {
    font-size: 18px;
}
</style>