declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.svg' {
  const content;
  export default content;
}
