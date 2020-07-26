import { Vue } from '@/cores/providers';

import '@/cores/store';

import MainApp from '@/views/app/index.vue';

Vue.config.productionTip = false;

new Vue({ render: h => h(MainApp) }).$mount('#app');
