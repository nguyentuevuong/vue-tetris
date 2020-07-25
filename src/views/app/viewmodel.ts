import { Vue, Component } from '@/cores/providers';

import TReact from '../components/react/index.vue';

import { TMatrix } from '../components';

@Component({
    components: { TReact, TMatrix }
})
export default class TetrisAppViewModel extends Vue {
    transform: string = 'none';

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