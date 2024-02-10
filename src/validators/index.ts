import { configure, defineRule } from 'vee-validate';
import { mimes, numeric, required, size } from '@vee-validate/rules';

export default {
  install(): void {
    defineRule('required', required);
    defineRule('numeric', numeric);
    defineRule('mimes', mimes);
    defineRule('size', size);

    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true,
    });
  },
};
