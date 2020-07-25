import { Vue, Component } from '@/cores/providers';

import { TMatrix } from '../components';

@Component({
    components: { TMatrix }
})
export default class TetrisAppViewModel extends Vue {
    transform = 'none';

    mounted() {
        /* const vm = this;
        const app = vm.$el;

        vm.$nextTick(() => {
            if (app && window.innerHeight < app.clientHeight) {
                vm.transform = `scale(${window.innerHeight / app.clientHeight})`;
            }
        }); */
    }
}