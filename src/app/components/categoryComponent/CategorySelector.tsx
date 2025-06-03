// components/OnTheMap/CategorySelector.tsx
import { AllCategoriesData } from 'interfaces/categories';
import React from 'react';

interface Props {
  categories: AllCategoriesData;
  selectedCategoryKey: string | null;
  onSelectCategory: (categoryKey: string) => void;
}

const CategorySelector: React.FC<Props> = ({ categories, selectedCategoryKey, onSelectCategory }) => {
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-3 sm:justify-start">
      {Object.keys(categories).map((key) => (
        <button
          key={key}
          onClick={() => onSelectCategory(key)}
          className={`px-5 py-2.5 rounded-lg text-base font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
            ${
              selectedCategoryKey === key
                ? "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500"
                : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 focus:ring-indigo-500"
            }`}
        >
          {categories[key as keyof typeof categories].title}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;