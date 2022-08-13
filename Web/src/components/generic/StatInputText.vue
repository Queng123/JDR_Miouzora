<template>
  <div v-if="!isMultiline(this.attributs)">
    <input v-model="message" :placeholder="this.label" type="number"/>
  </div>
  <div v-else>
    <textarea class="textArea" v-model="message" :placeholder="this.label"></textarea>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    props: [
      'label',
      'attributs'
      ],
    name: 'stat-input-text',
    data: () => {
      return {
        message: ''
      }
    },
    methods: {
      isMultiline: (attributs) => {
        if (attributs['multiline'] === true) {
          return true
        } else {
          return false;
        }
      }
    }
  }
</script>

<style>
.textArea {
  min-height: 15px;
  height: 15px;
  min-width: 165px;
}
</style>
