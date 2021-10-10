import { ref } from "@vue/reactivity";

export default function (defaultValue = true) {
  const value = ref(defaultValue);
  function toggle() {
    value.value = !value.value;
  }

  return { value, toggle };
}
