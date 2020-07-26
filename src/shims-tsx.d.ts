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

  enum GAME_STATE {
    LOADING,
    PAUSED,
    STARTED,
    OVER
  }

  type PIECE = CELL_STATE[][];

  interface DataStore {
    date: Date;
    name: string;
    next: PIECE;
    matrix: MatrixCell;
    mute: boolean;
    pause: boolean;
  }

  interface MatrixCell {
    readonly cells: PIECE;

    readonly display: PIECE;

    readonly reset: {
      (): void;
    };
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: DataStore;
  }
}