<template>
    <v-container fill-width py-12 mb-10>
        <v-card class="mx-auto">
            <v-card-text>
                <Title :title="'ペット同伴について'"></Title>
                <ul class="text--primary">
                    <li v-for="rule in rules" :key="rule.id" class="subtitle-1 mb-3">
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
        {id: 1,text: '同伴するわんちゃんには必ず予防注射をお願いします。'},
        {id: 2,text: '家庭での環境と異なるため、犬が思わぬ行動を取ることがあります。飼い主は常に犬から目を話さないよう注意し、他のお客様や犬の迷惑にならないようにしてください'},
        {id: 3,text: '攻撃的になる恐れのあるワンちゃんは入場できません。退場していただく可能性があります。'},
        {id: 4,text: '会場内でワンちゃん同士が喧嘩やトラブルが起きた場合は、当事者同士で対応していただきます。'},
        {id: 5,text: 'リードは必ず短くお持ちください。'},
        {id: 6,text: 'トラブルの原因にもなりますので、リードは協力つけてください。'},
        {id: 7,text: 'ワンちゃん用にトイレはご用意いたしますが、所定の場所以外でしてしまった場合は必ず対処の方よろしくお願いします。'},
        {id: 8,text: '排出物はトイレに流さず、各自お持ち帰りください。'},
      ]
    }
  }  
}
</script>
