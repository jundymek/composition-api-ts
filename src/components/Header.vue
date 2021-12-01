<template>
  <header class="header">
    <h1>To jest header</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({});
</script>

<style>
.header {
  background-color: red;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
