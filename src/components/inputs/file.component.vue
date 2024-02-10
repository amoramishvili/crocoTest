<template>
  <label
    :class="[
      'px-4',
      'py-0.5',
      'pr-0.5',
      'border',
      'flex',
      'items-center',
      'justify-between',
      'rounded-md',
      'focus:outline-none',
      'w-80',
      'font-neue-Regular',
      'text-sm',
      !!errorMessage ? 'border-red-500  text-red-500' : 'border-gray-6 text-gray-4',
    ]"
  >
    <span class="text-gray-4">{{ inputValue ? inputValue['name'] : props.placeholder }}</span>
    <div class="w-10 h-10 rounded-full bg-green-1 flex items-center justify-center">
      <icon name="Gallery" class="fill-current text-white" />
    </div>
    <input
      :name="props.name"
      :id="props.name"
      type="file"
      :placeholder="props.placeholder"
      @input="handleChange"
      @blur="handleBlur"
      class="hidden"
      :accept="props.accept"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    accept: {
      type: String,
      default: '',
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
