<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto">
            <v-card-text>
                <Title :title="'理念'"></Title>
                <ul class="text--primary">
                    <li v-for="cat in cats" :key="cat.id" class="subtitle-1 mb-3">
                       <p class="mb-0 font-weight-bold title">★{{ cat.title }}</p>
                        <p>{{ cat.text }}</p>
                    </li>            
                </ul>
            </v-card-text>
        </v-card>
    </v-container>
</template> 

<script>
import Title from '../components/Title.vue';

export default {
  name: 'companion',
    components: {
    Title
  },
  data() {
    return {
      cats: [
        {id: 1,title: 'わんわんカーニバル',text: '動物愛護精神の高揚に寄付し、人とペットが共生による人間社会の融和と発展に寄付することを目的とします。飼主のマナー向上キャンペーンを実施します。'},
        {id: 2,title: 'キッズコンテスト',text: '未来を担う子供たちの、心・技・体の成長や表現力をダンスを通して強まる事を願い、また仲間とのコミュニケーションを豊かにすることにより、友達との絆がさらに深まることを目的とします。'},
        {id: 3,title: '子供の未来',text: '保護者の思いも受け止め、ともに子育てすることを基本とし、安全で安心できる遊び場を提供して無邪気な好奇心を刺激する事で能動的な想像力をはぐくめる環境づくりを目的とします。'},
      ]
    }
  }
  
}
</script>


<style scoped>
ul {
  list-style-type: none;
}
</style>