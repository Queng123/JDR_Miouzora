<template>
  <div v-if="isStat(this.attributs)">
    {{'&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(indent) + label }}: <stat-input-text :label="this.label" :attributs="this.attributs" />
  </div>
  <div v-else>{{ label }} :
    <div v-for="(value, attribut) in this.attributs">
      <tree-menu :label='attribut' :attributs='value' :indent="this.indent+1" />
    </div>
  </div>
</template>

<script>
  import StatInputText from '@/components/generic/StatInputText.vue'

  export default {
    props: [
      'label',
      'attributs',
      'indent'
      ],
    components: {
      StatInputText
    },
    name: 'tree-menu',
    // setup() {
    //   let inputText = ref([])
    // },
    methods: {
      isStat: (attributs) => {
        if (Object.keys(attributs)
          .filter((key) => key !== 'required')
          .filter((key) => key !== 'unique')
          .filter((key) => key !== 'multiline').length == 0) {
          return true;
        } else {
          return false;
        }
      },
      isCaracteristics: (attributs) => {
        if (attributs === 'required' || attributs === 'unique' || attributs !== 'multiline') {
          return false
        } else {
          return true;
        }
      },
      getInputs: () => {

      }
    }
  }
</script>
