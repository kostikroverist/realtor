// /components/Property/PropertyDetailItem.tsx
import React from 'react';

interface PropertyDetailItemProps {
  label: string;
  value: React.ReactNode; // Змінено на React.ReactNode
  currency?: string;
}

const PropertyDetailItem: React.FC<PropertyDetailItemProps> = ({ label, value, currency }) => {
  if (value === null || value === undefined) {
    return null;
  }
  if (typeof value === 'string' && value.trim() === "") {
    return null;
  }


  return (
    <div className="text-[18px] text-gray-600 mb-0.5">
      <span className="font-medium text-gray-700">{label}: </span>
      {value}
      {currency && (typeof value === 'string' || typeof value === 'number') && String(value).trim() !== "" ? ` ${currency}` : ''}
    </div>
  );
};

export default PropertyDetailItem;