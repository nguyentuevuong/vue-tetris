import { Vue, Component } from '@/cores/providers';

import TMatrix from '../matrix/index.vue';

@Component({
    components: { TMatrix }
})
export default class BlockViewModel extends Vue {
}