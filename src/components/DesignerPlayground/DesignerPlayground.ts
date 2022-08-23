import { defineComponent } from 'vue';
import { baseFloorLevelLayout } from '../../assets/dataState';

import FloorElevator from '../FloorElevator/FloorElevator.vue';

export default defineComponent({
  name: 'DesignerPlayground',
  components: {
    FloorElevator,
  },
  data() {
    return {
      baseLevels: baseFloorLevelLayout,
    };
  },
});

