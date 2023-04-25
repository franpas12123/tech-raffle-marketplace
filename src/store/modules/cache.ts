import { CategoriesCache, ProductsCache } from "@/types/cache"
import { Module } from "vuex";

interface CacheState {
  products: ProductsCache[],
  categories: CategoriesCache[]
}

const cacheModule: Module<CacheState, any> = {
  namespaced: true,
  state: {
    products: [],
    categories: []
  },
  mutations: {
    // validateCache (state: CacheState) {
    //   state.products.;
    // },
    // decrement(state: CounterState) {
    //   state.count--;
    // },
  },
};

export default cacheModule;