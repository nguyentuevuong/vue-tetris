import { Vue, Prop, Watch, Component } from '@/cores/providers';

@Component
export default class TimeViewModel extends Vue {
    @Prop({ default: () => 0 })
    public readonly time!: number;

    public dot: boolean = true;

    public get minute() {
        const vm = this;

        return '00';
    }

    public get secon() {
        const vm = this;

        return '00';
    }

    @Watch('$store.date')
    public realTimeWatcher() {
        const vm = this;

        vm.dot = !vm.dot;
    }
}