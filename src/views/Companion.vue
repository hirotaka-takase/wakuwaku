<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <Title :title="'愛犬家のみなさまへ'"></Title>
                <ul class="text--primary">
                    <li v-for="rule in rules" :key="rule.id" class="subtitle-1 mb-5">
                        {{ rule.text }}
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
	mounted: function(){
	document.title = "ペット同伴について";
  },
  data() {
    return {
      rules: [
        {id: 1,text: 'ルール、マナーの遵守をお願い致します。'},
        {id: 2,text: 'ワンちゃんの管理は自己の責任で行っていただきます。'},
        {id: 3,text: 'トラブルの原因となりますので会場内では必ずリードをつけてください。'},
        {id: 4,text: '主催者のルールに従っていただけない場合はご退場させていただくことがあります。'},
      ]
    }
  }  
}
</script>
