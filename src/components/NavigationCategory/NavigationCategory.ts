import { Fragment } from 'vue-fragment';
import { defineComponent } from 'vue';
import { freighterProductSet } from '@/assets/dataAssets';
import {
  buildingCategory,
  buildingProduct,
  buildingProducts,
} from '@/utils/interface';
import IconExternalLink from '@/components/Icons/IconExternalLink/IconExternalLink.vue';
import IconChevronUp from '@/components/Icons/IconChevronUp/IconChevronUp.vue';

export default defineComponent({
  components: {
    Fragment,
    IconExternalLink,
    IconChevronUp,
  },
  props: {
    category: { type: Object as () => buildingCategory, required: true },
    openedCategory: String,
  },
  methods: {
    toggleCategory(categoryName: string) {
      if (this.openedCategory === categoryName) {
        this.$emit('update:openedCategory', '');
      } else {
        this.$emit('update:openedCategory', categoryName);
      }
    },
  },
  computed: {
    filteredProducts(): buildingProducts {
      return Object.values(freighterProductSet).filter(
        (product: buildingProduct) => product.productCategory === this.category
      );
    },
    isOpened(): boolean {
      return this.category.productCategoryName === this.openedCategory;
    },
  },
});

