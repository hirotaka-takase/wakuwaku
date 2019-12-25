<template>
    <v-container fill-width py-5 mb-5>
         <div class="my-5 text-center">
            <v-btn x-large color="warning" width="450px" dark to="/form/participants_dance">わくフェスキッズダンス<br>コンテストエントリーページへ</v-btn>
         </div>
        <div align="center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiMkyGTf6E_o0px5RIAb5L2jsG6bU4QDBaw8Go5pqxCiCR4w/viewform?embedded=true" width="640" height="1371" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> 
       </div>
    </v-container>
</template> 

<script>
export default {
	mounted: function(){
	document.title = "チアダンスショーエントリー";
  },
}
</script>

