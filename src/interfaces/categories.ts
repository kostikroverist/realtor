export interface SubCategoryConfig {
    title: string;
    property: number;
    propertyId: number;
    slug: string; // для унікального ключа або параметрів URL, якщо потрібно
  }
  
  export interface CategoryConfig {
    title: string;
    description: string;
    property?: number; // Стає необов'язковим, якщо є subCategories
    propertyId?: number; // Стає необов'язковим, якщо є subCategories або визначено в subCategories
    subCategories?: SubCategoryConfig[];
  }
  
  export interface AllCategoriesData {
    buy: CategoryConfig;
    rent: CategoryConfig;
    land: CategoryConfig;
    houses: CategoryConfig;
    flats: CategoryConfig;
  }