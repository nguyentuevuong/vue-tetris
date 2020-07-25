import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface DataStore{
    time: Date;
    name: string;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: Storage;
  }
}