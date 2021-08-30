<template>
  <div id="app">
    <ButtonVue></ButtonVue>
    <ButtonString></ButtonString>
    <ButtonTemplateString></ButtonTemplateString>
    <ButtonXTemplate></ButtonXTemplate>
    <ButtonInline inline-template>
      <button @click="click">
        Click Button Inline {{ count }} times
      </button>
    </ButtonInline>
    <ButtonRender></ButtonRender>
    <ButtonJSX></ButtonJSX>
  </div>
</template>

<script>
import ButtonVue from './ButtonVue.vue';

export default {
  name: 'App',
  components: {
    ButtonVue,
  },
};
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
