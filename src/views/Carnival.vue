<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="270px"
              src="../assets/img/inu.jpeg"
            >
            </v-img>
            <v-card-text>
                <Title :title="'わんわんカーニバル'"></Title>
                <p align="center" class="headline">
                    ブースとイベントステージ
                </p>
                <v-treeview
                    dense
                    hoverable
                    color="warning"
                    activatable
                    open-on-click
                    :items="items"
                    class="subtitle-1"
                ></v-treeview>
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

    data: () => ({
      items: [
        {
          id: 1,
          name: '(ブース) ショップ :',
          children: [
            { id: 2, name: 'ペットフード' },
            { id: 3, name: '雑貨用品（リード・食器など）' },
            { id: 4, name: '服' },
            { id: 5, name: 'グルーミング' },
            { id: 6, name: '時短シャンプー' },
            { id: 7, name: '自然食品' },
            { id: 8, name: '冷感マットなどエコ商品' },
            { id: 9, name: '＊普段販売されない優れもの特集(ショードック関連)' },
          ],
        },
        {
          id: 10,
          name: '(ブース) 関連ブース :',
          children: [
            { id: 11, name: 'ペットホテル' },
            { id: 12, name: 'トリミング学校' },
            { id: 13, name: '保険' },
            { id: 14, name: 'お仕事コーナー（グルーミング体験）' },
            { id: 15, name: '写真スポット（インスタ映え）' },
            { id: 16, name: '愛犬似顔絵イラスト）' },
            { id: 17, name: '愛犬そっくりカフェイラスト' },
          ],
        },
        {
          id: 18,
          name: '(ブース) 福祉 :',
          children: [
            { id: 19, name: 'ペットの介護情報' },
            { id: 20, name: 'ペットの急な病気、ケガの応急処置' },
            { id: 21, name: '夜間動物病院の情報' },
            { id: 22, name: 'ペットの車椅子、義足製作等の取り込み' },
            { id: 23, name: 'グルーミング' },
            { id: 24, name: 'カット、爪切り、足裏靴、歯石取り' },
            { id: 25, name: '歯磨き教室、お手入れ、ボディーケア' },
            { id: 26, name: 'ペット悩み相談' },
            { id: 27, name: '災害時の心得（ペットと一緒に避難するには' },
            { id: 28, name: '獣医さんによる検診、健康診断' },
          ],
        },
        {
          id: 29,
          name: '(ブース) 教養ブース :',
          children: [
                { id: 30, name: '現職トリマーがプロに教えるカッティング技術' },
          ],
        },
        {
          id: 31,
          name: '(イベントステージ) 観覧型 :',
          children: [
                { id: 32, name: 'スタイリングショー（ホットモデルズ主催)' },
                { id: 33, name: 'チャンピョン犬' },
                { id: 34, name: '珍しい犬種、見栄えのする犬種（フルコートのアフガン、ホルゾイ等)' },
          ],
        },
        {
          id: 35,
          name: '(イベントステージ) 参加型 :',
          children: [
                { id: 36, name: '愛犬ファッションショー' },
                { id: 37, name: '愛ペットと人のコスプレショー' },
                { id: 38, name: 'ビンゴ大会（番犬ボールを犬が選ぶ' },
                { id: 39, name: '◎✖︎クイズ（ペットに関する問題）' },
                { id: 40, name: 'うちの子ナンバー１、わんわん競争' },
          ],
        },
        {
          id: 41,
          name: '(イベントステージ) 広場 :',
          children: [
                { id: 42, name: '運動会' },
                { id: 43, name: '徒競走' },
                { id: 44, name: 'ジャンプ' },
                { id: 45, name: '待て大会' },
                { id: 46, name: 'トレーナーによるしつけ教室' },
                { id: 47, name: '散歩体験' },
                { id: 48, name: 'トリミング競技会' },
                { id: 49, name: '同犬種交流活動' },
          ],
        },
      ],
    }),
  }
</script>

