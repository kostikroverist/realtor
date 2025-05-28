// /components/Property/PropertyDetailItem.tsx
import React from 'react';

interface PropertyDetailItemProps {
  label: string;
  value: string | number | null | undefined;
  currency?: string;
}

const PropertyDetailItem: React.FC<PropertyDetailItemProps> = ({ label, value, currency }) => {
  if (value === null || value === undefined || String(value).trim() === "") {
    return null;
  }

  return (
    <div className="text-[14px] text-gray-600 mb-0.5"> 
      <span className="font-medium text-gray-700">{label}: </span>
      {String(value)}{currency && String(value).trim() !== "" ? ` ${currency}` : ''}
    </div>
  );
};

export default PropertyDetailItem;