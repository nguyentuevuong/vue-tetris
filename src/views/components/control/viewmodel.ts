import { Vue, Component } from '@/cores/providers';

import TButton from '../button/index.vue';


@Component({
    components: { TButton }
})
export default class ControlPaddViewModel extends Vue {

    public drop() {
        const vm = this;
        const { $store } = vm;

        $store.next = [[0, 0, 0, 0], [0, 0, 0, 0]];
    }

    public rotate() {
        const vm = this;
        const { $store } = vm;

        $store.next = [[0, 1, 0, 0], [1, 1, 1, 0]];
    }

    public left() {
        const vm = this;
        const { $store } = vm;

        $store.next = [[1, 1, 0, 0], [1, 1, 0, 0]];
    }

    public right() {
        const vm = this;
        const { $store } = vm;

        $store.next = [[1, 0, 0, 0], [1, 1, 1, 0]];
    }

    public down() {
        const vm = this;
        const { $store } = vm;

        $store.next = [[0, 0, 0, 0], [1, 1, 1, 1]];
    }

    public mute() {
        const vm = this;
        const { $store } = vm;

        $store.mute = !$store.mute;
    }

    public pause() {
        const vm = this;
        const { $store } = vm;

        $store.pause = !$store.pause;
    }

    public reset() {
        const vm = this;

        vm.$store.matrix.reset();
    }
}