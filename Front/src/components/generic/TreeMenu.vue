<template>
  <div v-if="isStat(this.attributs)">
    {{'&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(indent) + label }}
  </div>
  <div v-else>{{ label }} :
    <div v-for="(value, attribut) in this.attributs">
      <tree-menu :label='attribut' :attributs='value' :indent="this.indent+1" />
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      'label',
      'attributs',
      'indent'
      ],
    name: 'tree-menu',
    methods: {
      isStat: (attributs) => {
        if (Object.keys(attributs)
          .filter((key) => key !== 'required')
          .filter((key) => key !== 'unique').length == 0) {
          return true;
        } else {
          return false;
        }
      },
      isCaracteristics: (attributs) => {
        console.log(attributs);
        if (attributs === 'required' || attributs === 'unique') {
          return false
        } else {
          return true;
        }
      }
    }
  }
</script>
