import { defineComponent } from 'vue';
import { baseFloorLevelLayout, baseFloorLayout } from '../../assets/dataState';
export default defineComponent({
  name: 'DesignerPlayground',
  data() {
    return {
      baseLevels: baseFloorLevelLayout,
    };
  },
});

