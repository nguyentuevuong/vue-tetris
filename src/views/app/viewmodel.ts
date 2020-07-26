import { Vue, Component } from '@/cores/providers';

import { mobile } from '@/cores/util';

import TReact from '../components/react/index.vue';
import TControl from '../components/control/index.vue';

@Component({
    components: { TReact, TControl }
})
export default class TetrisAppViewModel extends Vue {
    mobile: boolean = false;
    transform: string = 'none';

    mounted() {
        const vm = this;
        // const app = vm.$el;

        vm.mobile = mobile();

        /*vm.$nextTick(() => {
            if (app && window.innerHeight < app.clientHeight) {
                vm.transform = `scale(${window.innerHeight / app.clientHeight})`;
            }
        });*/

        Object.assign(window, { vm });
    }
}