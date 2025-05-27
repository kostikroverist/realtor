import { useQuery } from '@tanstack/react-query';
import { getProperty } from '../services/propertyService';
import type { PropertyData } from '../interfaces/property'; // Імпортуємо інтерфейс

export const useProperty = (propertyId: number, someId: number) => {
  return useQuery<PropertyData, Error>({ 
    queryKey: ['property', propertyId, someId],
    queryFn: () => getProperty(propertyId, someId),
    enabled: !!propertyId,
  });
};