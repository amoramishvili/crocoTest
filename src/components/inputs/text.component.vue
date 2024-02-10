<template>
  <div class="TextInput">
    <input
      :name="props.name"
      :id="props.name"
      :type="props.type"
      :value="inputValue"
      :placeholder="props.placeholder"
      @input="handleChange"
      @blur="handleBlur"
      :class="[
        'px-4',
        'py-3',
        'border',
        'block',
        'rounded-md',
        'focus:outline-none',
        'w-80',
        'font-neue-Regular',
        'text-sm',
        'placeholder-gray-4',
        !!errorMessage ? 'border-red-500  text-red-500' : 'border-gray-6 text-gray-4',
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import { useField } from 'vee-validate';
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, props.rules, {
      initialValue: props.value,
    });

    watch(
      () => props.value,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          inputValue.value = newValue;
        }
      }
    );

    return {
      inputValue,
      handleChange,
      handleBlur,
      errorMessage,
      meta,
      props,
    };
  },
});
</script>
