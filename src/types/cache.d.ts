import { Product, Category } from "./product";

declare interface Cache {
  last_cache_check: Date,
}

declare interface ProductsCache extends Cache {
  products: Product[]
}

declare interface CategoriesCache extends Cache {
  categories: Category[],
}

export { Cache, ProductsCache, CategoriesCache, Caches }