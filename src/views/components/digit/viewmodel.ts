import { Vue, Prop, Component } from '@/cores/providers';

@Component
export default class DigitViewModel extends Vue {
    @Prop({ default: () => undefined })
    public readonly score: number | undefined;

    @Prop({ default: () => undefined })
    public readonly level: number | undefined;

    @Prop({ default: () => undefined })
    public readonly speed: number | undefined;

    public get text() {
        const vm = this;

        if (vm.score !== undefined) {
            return 'score';
        }

        if (vm.level !== undefined) {
            return 'level';
        }

        if (vm.speed !== undefined) {
            return 'speed';
        }

        return 'score';
    }

    public get displayNumber(): string {
        const vm = this;
        const sNum: string[] = `${vm.speed || vm.level || vm.score || 0}`.split('');

        while (sNum.length < 5) {
            sNum.unshift('0');
        }

        return sNum.map((m: string, i: number) => `<span class="${m !== '0' || i === sNum.length - 1 ? 'active' : 'inactive'}">${m}</span>`).join('');
    }
}