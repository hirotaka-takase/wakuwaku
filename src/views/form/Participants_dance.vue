<template>
    <v-container fill-width py-5 mb-5>
         <div class="my-2 mb-10 text-center">
            <v-btn x-large color="warning" width="380px" dark to="/form/participants_cheer">チアダンスショー<br>参加者募集ページへ</v-btn>
         </div>
         <div align="center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHm4Z3HO1CH148wmaDu0aDNEfyzE0HPsREUuXXgSVDqz7K7Q/viewform?embedded=true" width="640" height="1450" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>       
        </div>
    </v-container>
</template> 
<script>

export default {
    components: {
  },
	mounted: function(){
	document.title = "コンテストエントリー";
  },
}
</script>

