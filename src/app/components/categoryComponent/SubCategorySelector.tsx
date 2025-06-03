import React from "react";

interface SubCategory {
  title: string;
  property: number;
  propertyId: number;
  slug: string;
}

interface SubCategorySelectorProps {
  subCategories: SubCategory[];
  onSelect: (property: number, propertyId: number, slug: string) => void;
  selectedSlug?: string;
}

const SubCategorySelector: React.FC<SubCategorySelectorProps> = ({
  subCategories,
  onSelect,
  selectedSlug,
}) => {
  const handleSelect = (subCategory: SubCategory) => {
    onSelect(subCategory.property, subCategory.propertyId, subCategory.slug);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {subCategories.map((subCategory) => (
        <button
          key={subCategory.slug}
          onClick={() => handleSelect(subCategory)}
          className={`
            px-4 py-2 border rounded-lg font-medium transition-colors
            ${
              selectedSlug === subCategory.slug
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {subCategory.title}
        </button>
      ))}
    </div>
  );
};

export default SubCategorySelector;
