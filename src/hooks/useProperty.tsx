import { useQuery } from "@tanstack/react-query";
import { getProperty, getPropertyByOid } from "../services/propertyService";
import type { PropertyData, PropertyDetailData } from "../interfaces/property"; // Імпортуємо інтерфейс

export const usePropertyByOid = (oid: string | undefined) => {
  return useQuery<PropertyDetailData, Error>({
    queryKey: ["propertyDetail", oid], 
    queryFn: async () => {
      if (!oid) {
        throw new Error("OID є обов'язковим для запиту деталей об'єкта.");
      }
      return getPropertyByOid(oid);
    },
    enabled: !!oid, 
  });
};

export const useProperty = (propertyId: number, someId: number) => {
  return useQuery<PropertyData, Error>({
    queryKey: ["property", propertyId, someId],
    queryFn: () => getProperty(propertyId, someId),
    enabled: !!propertyId,
  });
};
