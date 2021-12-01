import { onBeforeMount, Ref, watch } from "@vue/runtime-core";

export const useLocalStorage = (
  key: string,
  ref: Ref
): {
  clearLocalStorage: () => void;
} => {
  onBeforeMount(() => {
    const value = window.localStorage.getItem(key);
    if (value) {
      ref.value = JSON.parse(value);
    }
  });

  watch(ref, () => {
    window.localStorage.setItem(key, JSON.stringify(ref.value));
  });

  const clearLocalStorage = () => {
    ref.value = "";
    window.localStorage.setItem(key, "");
  };

  return {
    clearLocalStorage,
  };
};
