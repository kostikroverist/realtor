// /interfaces/property.ts (або в іншому відповідному місці)
// interfaces/properties.ts (або де ти зберігаєш типи)

export interface PropertyAddress {
  AdditionalStreetInfo: string | null;
  City: string | null;
  CommunityName: string | null;
  Country: string | null;
  Neighbourhood: string | null;
  PostalCode: string | null;
  Province: string | null;
  StreetAddress: string | null;
  Street_Name: string | null;
  Subdivision: string | null;
  en_Subdivision: string | null;
  id: string | null; // ID адреси, якщо є
  lat: string | null;
  lng: string | null;
  street_code: string | null;
}

// Основний тип об'єкта нерухомості
export interface PropertyListing {
  id: string | number; // Унікальний ID самого об'єкта
  oid?: string | number; // Альтернативний ID
  name?: string; // Назва об'єкта, може бути взята з адреси чи іншого поля
  address: PropertyAddress; // <--- Вбудований об'єкт адреси
  uinfo?: UserInfo; // Твоє поле для фільтрації
  // ... інші специфічні поля для нерухомості
}

// Тип для об'єктів, підготовлених для карти (з числовими координатами)
export interface MappedProperty {
  id: string | number;
  name?: string;
  latitude: number;  // Числове значення
  longitude: number; // Числове значення
  originalData: PropertyListing; // Зберігаємо оригінальний об'єкт для доступу до всіх даних в Popup
}
export interface UserInfo {
  agency: string | null;
  blogid: string | null;
  brokerinvite: string | null;
  city: string | null;
  client_id: string | null;
  clients: string | null; // Можливо, тут має бути інший тип, наприклад, Client[]
  colegues: string | null; // Аналогічно
  columns: string | null; // Аналогічно
  communities: string | null; // Аналогічно
  compunknownlogo: string | null;
  compunknownname: string | null;
  country: string | null;
  coworkerinvitelink: string | null;
  currency: string | null;
  default_city_geo: string | null;
  desc: string | null;
  email: string | null;
  errcode: string | null;
  errmsg: string | null;
  fb_id: string;
  id: string;
  integratedwebsite: string | null;
  isafnu: string | null; // Можливо, boolean
  lang: string | null;
  languages: string | null; // Можливо, string[]
  lat: string | null; // Можливо, number
  link: string | null;
  listinglinks: string | null;
  listingtext: string | null;
  lng: string | null; // Можливо, number
  loc: string | null;
  login: string | null;
  maxinvites: string | null; // Можливо, number
  md5: string | null;
  measure: string | null;
  mlsgroup_id: string | null;
  mlswslink: string | null;
  mobphone: string | null;
  mobphone2: string | null;
  name: string | null;
  needpay: string | null; // Можливо, boolean
  np2: string | null;
  paiddate: string | null; // Можливо, Date or string
  photo: string | null;
  properties: string | null; // Можливо, Property[]
  pwd: string | null;
  registerdate: string | null; // Можливо, Date or string
  resp: string | null;
  role_type: string | null;
  showws: string | null; // Можливо, boolean
  skype: string | null;
  telegram: string | null;
  user_type: string | null;
  viber: string | null;
  website: string | null;
}
export interface PropertyData {
  Photos: (string | object)[] | null; // Можливо, string[] or object[]
  SmallPhoto: string | null;
  adres: string;
  apartment_type_id: string;
  apartment_type_name: string;
  bestoffer: boolean;
  broker_comments: string | null;
  building_cat: string | null;
  building_name: string | null;
  business_type_id: string;
  business_type_name: string;
  canedit: boolean;
  chat_id: string;
  city_name: string | null;
  comments: string | null;
  communityname: string | null;
  country_name: string | null;
  currency: string;
  dateupdated: string; // Можливо, Date
  days: string | null; // Можливо, number
  description: string | null;
  floor: string;
  floorcount: string;
  hasactivity: boolean;
  id: string;
  isnew: boolean;
  isrent: boolean;
  landsize: string | null; // Можливо, number
  landsizemeasure: string | null;
  landsizemeasure_name: string | null;
  lat: string; // Можливо, number
  lng: string; // Можливо, number
  market_type_id: string | null;
  mlscommission: string;
  newmessages: number;
  nocommission: boolean;
  object_status_id: string;
  oid: string;
  ownertypename: string | null;
  plain_description: string;
  price: number;
  price_change: string | null; // Можливо, number
  price_change_date: string | null; // Можливо, Date
  pricemax: string | null; // Можливо, number
  pricemin: string | null; // Можливо, number
  priceperunit: string | null; // Можливо, number
  response: string;
  roommax: string;
  roommin: string;
  roomscount: string;
  secretfield: string;
  sharetows: boolean;
  status_id: number;
  stime: string | null; // Можливо, Date
  street_name: string;
  subdivision: string | null;
  title: string;
  tsquare: string; // Можливо, number
  tsquaremax: string | null; // Можливо, number
  tsquaremin: string | null; // Можливо, number
  type_id: string;
  type_name: string;
  uinfo: UserInfo;
  user_fb_id: string | null;
  year: string | null; // Можливо, number
}


export interface PropertyPhoto {
  id?: string;         // З масиву "Photo"
  Key?: string;        // З масиву "Photos"
  name?: string | null;
  oid?: string;
  type_id?: string;
  value: string;       // filename, наприклад "2591768.jpg"
  Value?: string;      // filename з масиву "Photos"
}

// Інтерфейс для Address
export interface PropertyAddress {
  AdditionalStreetInfo: string | null;
  City: string | null;
  CommunityName: string | null;
  Country: string | null;
  Neighbourhood: string | null;
  PostalCode: string | null;
  Province: string | null;
  StreetAddress: string | null;
  Street_Name: string | null; // Зверни увагу, що є і StreetAddress
  Subdivision: string | null;
  en_Subdivision: string | null;
  id: string | null;
  lat: string | null; // Можливо, помилка в даних, зазвичай lat
  lng: string | null; // Можливо, помилка в даних, зазвичай lng
  street_code: string | null;
}

// Інтерфейс для Building
export interface PropertyBuilding {
  BathroomTotal: string | null; // Або number, якщо API може повертати число
  BedroomsTotal: string | null; // Або number
  Type: number | string | null; // У прикладі 0
  building_type_name: string | null;
  id: string | null;
  roommax: string | null;
  roommin: string | null;
}

// Інтерфейс для Land
export interface PropertyLand {
  AccessType: string | null;
  Acreage: string | null; // Або number
  Amenities: string | null;
  ClearedTotal: string | null;
  CurrentUse: string | null;
  Divisible: string | null; // Або boolean
  FenceTotal: string | null;
  FenceType: string | null;
  FrontsOn: string | null;
  LandDisposition: string | null;
  LandscapeFeatures: string | null;
  PastureTotal: string | null;
  Sewer: string | null;
  SizeDepth: string | null;
  SizeFrontage: string | null;
  SizeIrregular: string | null;
  SizeTotal: string | null; // Або number
  SizeTotalText: string | null; // У прикладі "26" (соток)
  SoilEvaluation: string | null;
  SoilType: string | null;
  TiledTotal: string | null;
  TopographyType: string | null;
  id: string; // У прикладі "42183"
}

// Інтерфейс для uinfo (схожий на попередній, але можна уточнити)
export interface UserInfoDetailed {
  agency: string | null;
  blogid: string | null;
  brokerinvite: string | null;
  city: string | null;
  client_id: string | null;
  clients: string | null;
  colegues: string | null;
  columns: string | null;
  communities: string | null;
  compunknownlogo: string | null;
  compunknownname: string | null;
  country: string | null;
  coworkerinvitelink: string | null;
  currency: string | null;
  default_city_geo: string | null;
  desc: string | null;
  email: string | null;
  errcode: string | null;
  errmsg: string | null;
  fb_id: string | null;
  id: string;
  integratedwebsite: string | null;
  isafnu: string | null;
  lang: string | null;
  languages: string | null;
  lat: string | null;
  link: string | null;
  listinglinks: string | null;
  listingtext: string | null;
  lng: string | null;
  loc: string | null;
  login: string | null;
  maxinvites: string | null;
  md5: string | null;
  measure: string | null;
  mlsgroup_id: string | null;
  mlswslink: string | null;
  mobphone: string | null;
  mobphone2: string | null;
  name: string | null;
  needpay: string | null;
  np2: string | null;
  paiddate: string | null;
  photo: string | null; // URL фото
  properties: string | null; // Кількість об'єктів
  pwd: string | null;
  registerdate: string | null;
  resp: string | null;
  role_type: string | null;
  showws: string | null;
  skype: string | null;
  telegram: string | null;
  user_type: string | null; // У прикладі "3"
  viber: string | null;
  website: string | null;
}

// Основний інтерфейс для детальної інформації про об'єкт
export interface PropertyDetailData {
  AdditionalInformationIndicator: string | null;
  Address: PropertyAddress;
  AgentDetails: unknown | null; // Розширити за потреби
  AlternateURL: string | null;
  AmmenitiesNearBy: string | null; // Можливо, string[]
  Building: PropertyBuilding;
  Business: unknown | null; // Розширити за потреби (містить BusinessSubType, BusinessType і т.д.)
  CommunicationType: string | null;
  CommunityFeatures: string | null; // Можливо, string[]
  Crop: string | null;
  DocumentType: string | null;
  Easement: string | null;
  EquipmentType: string | null;
  Event: unknown | null;
  FarmType: string | null;
  Features: string | null; // Можливо, string[]
  IrrigationType: string | null;
  Land: PropertyLand;
  LastUpdated: string | null; // Можливо, Date
  Lease: string | null;
  // ... інші поля Lease...
  LiveStockType: string | null;
  LoadingType: string | null;
  LocationDescription: string | null;
  MLS_id: string | null;
  Machinery: string | null;
  MaintenanceFee: string | null; // Або number
  // ... інші поля MaintenanceFee...
  ManagementCompunknown: string | null;
  MoreInformationLink: string | null;
  MunicipalID: string | null;
  OwnershipType: string | null;
  Parking: unknown | null; // Розширити за потреби
  ParkingSpaceTotal: string | null; // Або number
  Photo: PropertyPhoto[]; // Масив детальних фото
  Photos: PropertyPhoto[]; // Масив фото {Key, Value}
  Plan: string | null;
  Plans: unknown[]; // Уточнити тип, якщо потрібно
  PoolFeatures: string | null;
  PoolType: string | null;
  Price: number | null; // У прикладі 120000
  PricePerTime: string | null;
  PricePerUnit: string | null;
  PropertyType: string | null;
  PublicRemarks: string | null;
  RentalEquipmentType: string | null;
  RightType: string | null;
  RoadType: string | null;
  Rooms: unknown[] | null; // У прикладі порожній масив, уточнити структуру кімнат
  SignType: string | null;
  SmallPhoto: string | null; // Назва файлу головного фото
  StorageType: string | null;
  Structure: unknown | null; // Розширити за потреби
  TotalBuildings: string | null; // Або number
  TransactionType: string | null;
  UtilitiesAvailable: string | null; // Можливо, string[]
  ViewType: string | null;
  WaterFrontName: string | null;
  WaterFrontType: string | null;
  ZoningDescription: string | null;
  ZoningType: string | null;
  adres: string | null; // Дублює інформацію з Address, але є на верхньому рівні
  ammoid: string | null;
  apartment_type_id: number | null;
  apartment_type_name: string | null; // Наприклад, "Земля"
  architecture_type_id: number | string | null;
  architecture_type_name: string | null;
  atag: string | null;
  bathrooms: string | null; // Або number
  bestoffer: boolean | null;
  buildingtype: string | null;
  buildprocess: string | null;
  buildstatus: string | null;
  c_id: string | null;
  canedit: boolean | null;
  city: string | null; // Дублює інформацію з Address
  city_name: string | null;
  classtype: string | null;
  client_id: string | null;
  closedsale: string | null;
  commision_type: string | null;
  commision_value: string | null;
  communication: string | null; // Наприклад, "1;2;3" - можливо, потребує парсингу
  complect: string | null;
  complex: boolean | null;
  condition: string | null; // Наприклад, "1"
  condition2: string | null;
  condition_name: string | null; // Наприклад, "сирець"
  contact_id: string | null;
  copyrestriction: boolean | null;
  country_name: string | null;
  credit: string | null;
  currency: string | null; // Наприклад, "$"
  currency2: string | null;
  dateadded: string | null; // Можливо, Date
  datebuild: string | null;
  dateupdated: string | null; // Можливо, Date
  description: string | null; // Довгий опис
  dev_id: string | null;
  developer: string | null;
  electricity: string | null;
  errcode: string | null;
  errmsg: string | null;
  floor: string | null; // Або number
  floorcount: string | null; // Або number
  floorheight: string | null;
  floors: string | null;
  foundation_type_id: number | string | null;
  foundation_type_name: string | null;
  furniture: string | null; // Наприклад, "1"
  furniture_name: string | null; // Наприклад, "повністю мебльована"
  garage: string | null; // У прикладі "False", можливо, boolean
  gview: string | null;
  heat: string | null;
  heating: string | null;
  heating_name: string | null;
  heattype: string | null;
  homenum: string | null;
  housenum: string | null;
  id: number; // Головний ID об'єкта, який ти використовуєш як OID
  infrastructure: string | null;
  ingroup: string | null;
  insideinfo: string | null;
  isbest: boolean | null;
  isexclusive: boolean | null;
  isnewcosntruction: boolean | null; // Ймовірно, isnewconstruction
  isrent: boolean | null;
  isspp: boolean | null;
  ksquare: string | null;
  landaim: string | null;
  landaim_name: string | null;
  landid: string | null; // Кадастровий номер
  landsizemeasure: string | null; // Наприклад, "1"
  landsizemeasure_name: string | null; // Наприклад, "сотки"
  lat: number | null; // Географічна широта
  lawyer: string | null;
  leaseenddate: string | null;
  leaseincome: string | null;
  leaseincome_ispublic: string | null; // Можливо, boolean
  link1: string | null;
  link2: string | null;
  lng: number | null; // Географічна довгота
  lsquare: string | null;
  manager_id: string | null;
  market_type_id: number | null;
  md5: string | null;
  mlstype: string | null;
  negotiations: string | null;
  nocommission: boolean | null;
  originalid: string | null; // Дублює id?
  ownership: number | string | null;
  ownertype: string | null; // Наприклад, "1"
  parent_id: string | null;
  parking: string | null; // Дублює інформацію з Parking
  payback: string | null;
  payback2: string | null;
  payback2_ispublic: string | null; // Можливо, boolean
  payback_ispublic: boolean | null; // Можливо, boolean
  payment: string | null;
  pfeautures: string[]; // Уточнити тип
  placename: string | null;
  plain_description: string | null; // Короткий опис
  position: string | null;
  price: number | string | null; // Або number
  price2: number | string | null; // Або number
  pricemax: number | string | null;
  pricemin: number | string | null;
  publicaddress: string | null;
  rating: string | null; // Або number
  renter: string | null;
  resp: string | null;
  roommax: string | null; // Або number
  roommin: string | null; // Або number
  // rooms: unknown[]; // Вже визначено вище
  roomscount: number | string | null; // У прикладі 0
  secretfield: string | null;
  sharetows: boolean | null;
  source_type: string | null;
  specialphotos: unknown[]; // Уточнити тип
  sppcommission: string | null;
  status_id: number | null;
  street_name: string | null; // Дублює з Address
  subtype: string | null; // Наприклад, "29"
  subtype_name: string | null; // Наприклад, "Будівництво"
  tags: string | null;
  tbyear: number | string | null;
  technology: string | null;
  title: string | null; // Заголовок об'єкта
  totalapartments: string | null;
  // totalbuildings: string | null; // Вже визначено вище
  tsquare: string | null; // Загальна площа, може бути порожнім для землі
  tsquaremax: string | null;
  tsquaremin: string | null;
  uinfo: UserInfoDetailed; // Детальна інформація про користувача/агента
  user_phone: string | null;
  vacation: string | null;
  videolink: string | null;
  view_type: string | null;
  viewcode: string | null;
  viezd: boolean | null;
  wallmaterial: string | null; // Наприклад, "0"
  wallmaterial_name: string | null;
  walls: string | null;
  water: string | null; // У прикладі "True", можливо, boolean
  wc2: string | null;
  website: string | null; // Дублює з uinfo
  went: string | null;
  wind: string | null;
  year: number | string | null;
}
