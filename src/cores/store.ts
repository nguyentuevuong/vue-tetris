import { Vue } from '@/cores/providers';
import { Matrix } from './tetris/matrix';

class Storage implements DataStore {
    date: Date = new Date();
    name: string = 'Vue Brick Game';
    matrix: MatrixCell = new Matrix();
    next: PIECE = [];

    time: number = 0;
    mute: boolean = true;
    pause: boolean = false;

    constructor() {
        const store = this;
        const next: PIECE = [];

        for (let r = 0; r < 2; r++) {
            const row: number[] = [];

            for (let i = 0; i < 4; i++) {
                row.push(0);
            }

            next.push(row);
        }

        store.next = next;
    }
}

// Khai báo store
export const store: DataStore = Vue.observable(new Storage());

Vue.use({
    install: () => {
        // Gắn store vào ViewModel
        Vue.prototype.$store = store;

        // Cập nhật thời gian liên tục
        setInterval(() => { store.date = new Date(); }, 1000);
    }
});

