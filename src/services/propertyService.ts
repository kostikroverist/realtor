import axios from 'axios';
import type { PropertyData } from '../interfaces/property'; // Імпортуємо інтерфейс

const API_BASE_URL = 'https://crmmls.com/service.svc';

export const getProperty = async (propertyId: number, someId: number): Promise<PropertyData> => {
  const response = await axios.get<PropertyData>(`${API_BASE_URL}/clientobject/property/${propertyId}/${someId}`);
  return response.data;
};