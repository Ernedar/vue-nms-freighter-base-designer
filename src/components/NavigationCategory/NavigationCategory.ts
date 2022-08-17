import { Fragment } from 'vue-fragment';
import { defineComponent } from 'vue';
import { freighterProductSet } from '@/assets/dataAssets';
import { buildingCategory } from '@/utils/interface';

export default defineComponent({
  components: {
    Fragment,
  },
  props: {
    category: { type: Object as () => buildingCategory, require: true },
    openedCategory: String,
  },
  data() {
    return {
      isOpened: false,
      currentCategory: '',
    };
  },
  setup(props) {
    let navCategory = {
      productCategoryName: '',
    };
    if (props.category) {
      navCategory = props.category;
    }
    const freighterProducts = freighterProductSet;

    return {
      navCategory,
      freighterProducts,
    };
  },
  watch: {
    openedCategory(newValue) {
      this.currentCategory = newValue;
      this.isOpened = this.navCategory.productCategoryName === newValue;
    },
  },
  methods: {
    toggleCategory(categoryName: string) {
      if (this.currentCategory === categoryName) {
        this.$emit('update:openedCategory', '');
      } else {
        this.$emit('update:openedCategory', categoryName);
      }
    },
  },
});

