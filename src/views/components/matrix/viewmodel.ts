import { Vue, Component } from '@/cores/providers';

import TCell from '../cell/index.vue';

@Component({
    components: { TCell }
})
export default class MatrixViewModel extends Vue {
    data: number[][] = [];

    created() {
        const vm = this;
        const data: number[][] = [];

        for (let r = 0; r < 20; r++) {
            const row: number[] = [];

            for (let i = 0; i < 10; i++) {
                row.push(i);
            }

            data.push(row);
        }

        vm.data = data;
    }
}