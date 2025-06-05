// /services/propertyService.ts
import axios from 'axios';
import type { PropertyData, PropertyDetailData } from '../interfaces/property';

const API_BASE_URL = 'https://crmmls.com/service.svc';

export const getProperty = async (propertyId: number, someId: number): Promise<PropertyData> => { 
  const response = await axios.get<PropertyData>(`${API_BASE_URL}/clientobject/property/${propertyId}/${someId}`);
  return response.data;
};

export const getPropertyByOid = async (oid: string): Promise<PropertyDetailData> => {
  const response = await axios.get<PropertyDetailData>(`https://crmmls.com/service.svc/property/${oid}/`);
  return response.data;
};