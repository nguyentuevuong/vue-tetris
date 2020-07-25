import { Vue } from '@/cores/providers';

class Storage implements DataStore {
    time: Date = new Date();
    name: string = 'Vue Tetris';
}

// Khai báo store
export const store: DataStore = Vue.observable(new Storage());

Vue.use({
    install: () => {
        // Gắn store vào ViewModel
        Vue.prototype.$store = store;

        // Cập nhật thời gian liên tục
        setInterval(() => { store.time = new Date(); }, 100);
    }
});

