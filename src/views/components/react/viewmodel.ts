import { Vue, Component } from '@/cores/providers';
import TMatrix from '../matrix/index.vue';
import TBlock from '../block/index.vue';
import TDigit from '../digit/index.vue';
import TState from '../state/index.vue';

@Component({
    components: {
        TState,
        TDigit,
        TBlock,
        TMatrix,
        TBorder: {
            props: ['types'],
            template: `<div class="top-border"><t-dot :key="c" :class="c" v-for="c in types"></t-dot></div>`,
            components: {
                TDot: {
                    template: '<div><div v-for="i in [1,2,3,4,5]" :key="i" class="dot"></div></div>'
                }
            }
        }
    }
})
export default class ReactViewModel extends Vue {
    classNames: string[] = ['left', 'right'];
}