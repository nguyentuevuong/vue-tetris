import { Vue, Prop, Component } from '@/cores/providers';

@Component
export default class ButtonViewModel extends Vue {
    @Prop({ default: () => '' })
    public readonly icon!: string;

    @Prop({ default: () => '' })
    public readonly text!: string;
}