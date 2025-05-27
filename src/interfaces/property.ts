// /interfaces/property.ts (або в іншому відповідному місці)

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
    companylogo: string | null;
    companyname: string | null;
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