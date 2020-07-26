import { Vue, Prop, Component } from '@/cores/providers';

import TCell from '../cell/index.vue';

@Component({
    components: { TCell }
})
export default class MatrixViewModel extends Vue {
    @Prop({ default: () => [] })
    public readonly matrix!: CELL_STATE[][];
}