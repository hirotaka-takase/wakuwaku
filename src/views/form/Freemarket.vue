<template>
    <v-container fill-width py-5 mb-5>
    <div align="center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLLI2E6AehpGG-BogzRplVwboIA4F7Lo2U-uudtj8l0KKRuw/viewform?embedded=true" width="640" height="2558" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    </v-container>
</template> 
<script>

export default {
	mounted: function(){
      document.title = "フリーマーケット出店者エントリー";
      document.querySelector("meta[property='og:title']").setAttribute('content', "フリーマーケット出店者エントリー");
      document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020ではフリーマーケット出店者を募集しています。目標動員数16,000人にもなるイベントで、自分のアイテムを販売してみませんか？");
      document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020ではフリーマーケット出店者を募集しています。目標動員数16,000人にもなるイベントで、自分のアイテムを販売してみませんか？");
  },
}
</script>

