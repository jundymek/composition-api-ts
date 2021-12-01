import { ref, Ref } from "vue";

const counter = ref<number>(0);
export const useCounter = (): {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  counter: Ref<number>;
} => {
  const increment = (): void => {
    counter.value += 1;
  };

  const decrement = (): void => {
    counter.value -= 1;
  };

  const reset = (): void => {
    counter.value = 1;
  };

  return {
    increment,
    decrement,
    reset,
    counter,
  };
};
