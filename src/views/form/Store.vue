<template>
    <v-container fill-width py-5 mb-10>
    <div class="py-5 text-center">
        <v-btn x-large color="warning" width="380px" dark to="/carnival">愛犬大集合のページへ戻る</v-btn>
    </div>
    <div align="center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEQPaGGiWn7TRe_hPuFWaXpHJYjbVj-0v1D2l-zrMdO3SmQw/viewform?embedded=true" width="640" height="952" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    </v-container>
</template> 
<script>
export default {
	mounted: function(){
	document.title = "コンテストエントリー";
  },
}
</script>

