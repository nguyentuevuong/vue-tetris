import { Vue, Prop, Component } from '@/cores/providers';

@Component
export default class CellViewModel extends Vue {
    @Prop({ default: () => 0 })
    public readonly state!: CELL_STATE;
}