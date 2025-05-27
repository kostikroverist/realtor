// /components/Property/PropertyDetailItem.tsx
import React from 'react';

interface PropertyDetailItemProps {
  label: string;
  value: string | number | null | undefined;
  currency?: string;
}

const PropertyDetailItem: React.FC<PropertyDetailItemProps> = ({ label, value, currency }) => {
  if (value === null || value === undefined || value === "") {
    return null; // Не рендеримо, якщо значення порожнє
  }

  return (
    <div className="mb-2">
      <span className="font-semibold">{label}: </span>
      <span>{value} {currency && value ? currency : ''}</span>
    </div>
  );
};

export default PropertyDetailItem;