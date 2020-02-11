<template>
<v-container full-width class="py-12 mb-5">
  <div align="center">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZRJJXeyaVbh7nHxwigjy6kgvoHq04lx_49u_OdnLZS9gphg/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
  </div>
</v-container>
</template>

<script>

  export default {
	mounted: function(){
    document.title = "お問い合わせ";
    document.querySelector("meta[property='og:title']").setAttribute('content', "名古屋で行われる、地域限定わくわくフェスティバル2020についてのお問い合わせ");
    document.querySelector("meta[name='description']").setAttribute('content', "名古屋で行われる、地域限定わくわくフェスティバル2020について、わんちゃん、ダンス、会場、イベントのことなどなど、お問い合わせください。");
    document.querySelector("meta[property='og:description']").setAttribute('content', "名古屋で行われる、地域限定わくわくフェスティバル2020について、わんちゃん、ダンス、会場、イベントのことなどなど、お問い合わせください。");
  },
}
</script>



