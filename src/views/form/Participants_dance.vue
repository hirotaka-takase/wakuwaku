<template>
    <v-container fill-width py-5 mb-5>
         <div class="my-2 mb-10 text-center">
            <v-btn x-large outlined color="warning" width="380px" dark to="/participants_idol">ご当地アイドルでショー<br>参加者募集ページへ</v-btn>
         </div>
     <!--    <div align="center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSez5Yh59ovvLq4xMmL40n0zY92q9PJzaZhJ-Q83dcpveIXS3Q/viewform?embedded=true" width="640" height="2372" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div> -->
    </v-container>
</template> 
<script>
export default {
    components: {
  },
	mounted: function(){
    document.title = "キッズダンスコンテストエントリー";
    document.querySelector("meta[property='og:title']").setAttribute('content', "キッズダンスコンテスト");
    document.querySelector("meta[name='description']").setAttribute('content', "わくわくフェスティバル2020はわんちゃんと遊ぶだけじゃない！キッズダンスコンテストもあるよ！皆んなで力を合わせて賞を勝ち取ろう!");
    document.querySelector("meta[property='og:description']").setAttribute('content', "わくわくフェスティバル2020はわんちゃんと遊ぶだけじゃない！キッズダンスコンテストもあるよ！皆んなで力を合わせて賞を勝ち取ろう!");
  },
}
</script>

