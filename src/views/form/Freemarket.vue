<template>
    <v-container fill-width py-5 mb-5>
    <div class="py-5 text-center">
        <v-btn x-large color="warning" width="380px" dark to="/carnival">愛犬大集合のページへ戻る</v-btn>
    </div>
    <div align="center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6y54a33UeQ4oKlRtTkU6NJRksiWAI374dKCiyE_aktGGivw/viewform?embedded=true" width="640" height="1850" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    </v-container>
</template> 
<script>

export default {
	mounted: function(){
	document.title = "フリーマーケット出品者エントリー";
  },
}
</script>

