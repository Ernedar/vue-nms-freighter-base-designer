import { buildingCategory } from '@/utils/interface';
import { defineComponent } from 'vue';
import { freighterProductSet } from '@/assets/dataAssets';

export default defineComponent({
  props: {
    category: {
      type: Object as () => buildingCategory,
      required: true,
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  setup(props) {
    const navCategory = props.category;
    const freighterProducts = freighterProductSet;

    return {
      navCategory,
      freighterProducts,
    };
  },
  methods: {
    toggleCategory() {
      this.isOpened = !this.isOpened;
    },
  },
});

