<template>
  <div class="counter">
    <p>Counter value: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useCounter } from "../composables/useCounter";
import { useLocalStorage } from "../composables/useLocalStorage";

export default defineComponent({
  setup() {
    const { increment, decrement, reset, counter } = useCounter();
    useLocalStorage("counter", counter);

    return { increment, decrement, reset, counter };
  },
});
</script>

<style lang="scss"></style>
