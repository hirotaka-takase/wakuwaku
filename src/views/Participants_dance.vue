<template>
    <v-container fill-width py-5 mb-10>
        <v-row align="center" class="mb-8">
            <v-col cols="12" sm="6">
                <div class="my-2 text-center">
                    <v-btn x-large color="warning" width="380px" dark to="participants_cheer">チアダンスショー参加者募集</v-btn>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="my-2 text-center">
                    <v-btn x-large color="warning" width="380px" dark to="participants_store">出店者希望</v-btn>
                </div>
            </v-col>
        </v-row>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHm4Z3HO1CH148wmaDu0aDNEfyzE0HPsREUuXXgSVDqz7K7Q/viewform?embedded=true" width="100%" height="1450" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>       
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

