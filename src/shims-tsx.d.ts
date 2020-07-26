import Vue, { VNode } from 'vue';

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

  enum CELL_STATE {
    hide = -1,
    inactive = 0,
    active = 1
  }

  type PIECE = CELL_STATE[][];

  interface DataStore {
    date: Date;
    name: string;
    next: PIECE;
    matrix: PIECE;
    mute: boolean;
    pause: boolean;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: DataStore;
  }
}