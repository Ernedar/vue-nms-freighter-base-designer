import { defineComponent } from 'vue';
import { freighterProductCategories } from '@/assets/dataAssets';
import NavigationCategory from '@/components/NavigationCategory/NavigationCategory.vue';

export default defineComponent({
  setup() {
    const freighterCategories = freighterProductCategories;

    return {
      freighterCategories,
    };
  },
  components: {
    NavigationCategory,
  },
});
