<template>
    <v-container fill-width py-5 mb-5>
         <div class="my-5 text-center">
            <v-btn x-large color="warning" width="450px" dark to="/participants_dance">わくフェスキッズダンス<br>コンテストエントリーページへ</v-btn>
         </div>
        <div align="center">
           coming soon...
       </div>
    </v-container>
</template> 

<script>
export default {
	mounted: function(){
    document.title = "ご当地アイドル男女でショー";
    document.querySelector("meta[property='og:title']").setAttribute('content', "ご当地アイドル男女でショー");
    document.querySelector("meta[name='description']").setAttribute('content', "わくわくフェスティバル2020はわんちゃんと遊ぶだけじゃない！皆んなでアイドルになりきってダンスしよう！力を合わせて最高のショーを披露しよう!");
    document.querySelector("meta[property='og:description']").setAttribute('content', "わくわくフェスティバル2020はわんちゃんと遊ぶだけじゃない！皆んなでアイドルになりきってダンスしよう！力を合わせて最高のショーを披露しよう!");
  },
}
</script>

