import { Vue, Prop, Component } from '@/cores/providers';

import TTime from '../time/index.vue';

@Component({
    components: { TTime }
})
export default class StateBarViewModel extends Vue {

}