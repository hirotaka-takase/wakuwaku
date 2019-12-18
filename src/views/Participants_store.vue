<template>
    <v-container fill-width py-12 mb-10>
        <v-row align="center" class="mb-10">
            <v-col cols="12" sm="6">
                <div class="text-center">
                <div class="my-2">
                    <v-btn x-large color="warning" dark to="participants_dance">コンテストエントリー</v-btn>
                </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="text-center">
                <div class="my-2">
                    <v-btn x-large color="warning" dark to="participants_store">出店者希望</v-btn>
                </div>
                </div>
            </v-col>
        </v-row>
    <Title :title="'出店者希望エントリー'"></Title>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctUtWdU0KTVO-fGFMGA1gWobQW92akTA9ZQqal18hyIBNUAw/viewform?embedded=true" width="100%" height="760" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </v-container>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
    components: {
    Title
  }  
}
</script>

