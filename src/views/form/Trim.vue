<template>
    <v-container fill-width py-5 mb-10>
    <div align="center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgk8j6c_BWVdk8LmKVA7_Zsd2RwWzd3t9KpWSVrlMT3W9-0Q/viewform?embedded=true" width="640" height="2413" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    </v-container>
</template> 
<script>

export default {
	mounted: function(){
      document.title = "ペットカットトリマーエントリー";
      document.querySelector("meta[property='og:title']").setAttribute('content', "ペットカットトリマーエントリー");
      document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020ではペットカットトリマーを募集しています。犬に優しいトリミング・アレンジスタイルについてワンポイントアドバイスもあります。");
      document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる地域限定わくわくフェスティバル2020ではペットカットトリマーを募集しています。犬に優しいトリミング・アレンジスタイルについてワンポイントアドバイスもあります。");
  },
}
</script>

