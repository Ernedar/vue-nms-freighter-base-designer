import { defineComponent } from 'vue';
import DesignerLegend from '../DesignerLegend/DesignerLegend.vue';
import DesignerPlayground from '../DesignerPlayground/DesignerPlayground.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    DesignerLegend,
    DesignerPlayground,
  },
});

