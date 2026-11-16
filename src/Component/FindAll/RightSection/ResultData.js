
const resultData = [
  {
    id: 1,

    images: [
      "/houses/house1.jpg",
      "/houses/house2.jpg",
      "/houses/house3.jpg",
      "/houses/house4.jpg",
    ],

    price: 1850,
    originalPrice: 2100,
    discount: 12,

    address: "1250 Main Street",
    city: "Sioux Falls",
    state: "South Dakota",
    zipCode: "57104",

    propertyType: "Apartment",

    beds: 3,
    baths: 2,
    sqft: 1450,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Park",
      "Laundry",
      "Air Conditioning",
    ],

    availableDate: "2026-12-01",
    listedAgo: "2 days ago",

    isNew: true,
    isFeatured: true,

    description:
      "Beautiful modern apartment with spacious rooms and a great location.",

    petPolicy: "Pets Allowed",

    leaseDuration: "12 Months",
  },

  {
    id: 2,

    images: [
      "/houses/house5.jpg",
      "/houses/house6.jpg",
      "/houses/house7.jpg",
    ],

    price: 1450,
    originalPrice: null,
    discount: null,

    address: "850 West Avenue",
    city: "Rapid City",
    state: "South Dakota",
    zipCode: "57701",

    propertyType: "House",

    beds: 2,
    baths: 1,
    sqft: 1100,

    parking: 1,

    amenities: [
      "Garden",
      "Garage",
      "Park",
      "Air Conditioning",
    ],

    availableDate: "2026-11-25",
    listedAgo: "5 days ago",

    isNew: false,
    isFeatured: false,

    description:
      "Cozy family home with a beautiful garden and private parking.",

    petPolicy: "No Pets",

    leaseDuration: "12 Months",
  },

  {
    id: 3,

    images: [
      "/houses/house8.jpg",
      "/houses/house9.jpg",
      "/houses/house10.jpg",
    ],

    price: 2400,
    originalPrice: 2700,
    discount: 11,

    address: "420 Lakeview Drive",
    city: "Brookings",
    state: "South Dakota",
    zipCode: "57006",

    propertyType: "Townhouse",

    beds: 4,
    baths: 3,
    sqft: 2100,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Gym",
      "Balcony",
      "Park",
      "Garage",
    ],

    availableDate: "2026-12-10",
    listedAgo: "1 day ago",

    isNew: true,
    isFeatured: true,

    description:
      "Luxury townhouse with modern interiors and premium amenities.",

    petPolicy: "Pets Allowed",

    leaseDuration: "6 Months",
  },
  {
    id: 1,

    images: [
      "/houses/house1.jpg",
      "/houses/house2.jpg",
      "/houses/house3.jpg",
      "/houses/house4.jpg",
    ],

    price: 1850,
    originalPrice: 2100,
    discount: 12,

    address: "1250 Main Street",
    city: "Sioux Falls",
    state: "South Dakota",
    zipCode: "57104",

    propertyType: "Apartment",

    beds: 3,
    baths: 2,
    sqft: 1450,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Park",
      "Laundry",
      "Air Conditioning",
    ],

    availableDate: "2026-12-01",
    listedAgo: "2 days ago",

    isNew: true,
    isFeatured: true,

    description:
      "Beautiful modern apartment with spacious rooms and a great location.",

    petPolicy: "Pets Allowed",

    leaseDuration: "12 Months",
  },

  {
    id: 2,

    images: [
      "/houses/house5.jpg",
      "/houses/house6.jpg",
      "/houses/house7.jpg",
    ],

    price: 1450,
    originalPrice: null,
    discount: null,

    address: "850 West Avenue",
    city: "Rapid City",
    state: "South Dakota",
    zipCode: "57701",

    propertyType: "House",

    beds: 2,
    baths: 1,
    sqft: 1100,

    parking: 1,

    amenities: [
      "Garden",
      "Garage",
      "Park",
      "Air Conditioning",
    ],

    availableDate: "2026-11-25",
    listedAgo: "5 days ago",

    isNew: false,
    isFeatured: false,

    description:
      "Cozy family home with a beautiful garden and private parking.",

    petPolicy: "No Pets",

    leaseDuration: "12 Months",
  },

  {
    id: 3,

    images: [
      "/houses/house8.jpg",
      "/houses/house9.jpg",
      "/houses/house10.jpg",
    ],

    price: 2400,
    originalPrice: 2700,
    discount: 11,

    address: "420 Lakeview Drive",
    city: "Brookings",
    state: "South Dakota",
    zipCode: "57006",

    propertyType: "Townhouse",

    beds: 4,
    baths: 3,
    sqft: 2100,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Gym",
      "Balcony",
      "Park",
      "Garage",
    ],

    availableDate: "2026-12-10",
    listedAgo: "1 day ago",

    isNew: true,
    isFeatured: true,

    description:
      "Luxury townhouse with modern interiors and premium amenities.",

    petPolicy: "Pets Allowed",

    leaseDuration: "6 Months",
  },
  {
    id: 1,

    images: [
      "/houses/house1.jpg",
      "/houses/house2.jpg",
      "/houses/house3.jpg",
      "/houses/house4.jpg",
    ],

    price: 1850,
    originalPrice: 2100,
    discount: 12,

    address: "1250 Main Street",
    city: "Sioux Falls",
    state: "South Dakota",
    zipCode: "57104",

    propertyType: "Apartment",

    beds: 3,
    baths: 2,
    sqft: 1450,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Park",
      "Laundry",
      "Air Conditioning",
    ],

    availableDate: "2026-12-01",
    listedAgo: "2 days ago",

    isNew: true,
    isFeatured: true,

    description:
      "Beautiful modern apartment with spacious rooms and a great location.",

    petPolicy: "Pets Allowed",

    leaseDuration: "12 Months",
  },

  {
    id: 2,

    images: [
      "/houses/house5.jpg",
      "/houses/house6.jpg",
      "/houses/house7.jpg",
    ],

    price: 1450,
    originalPrice: null,
    discount: null,

    address: "850 West Avenue",
    city: "Rapid City",
    state: "South Dakota",
    zipCode: "57701",

    propertyType: "House",

    beds: 2,
    baths: 1,
    sqft: 1100,

    parking: 1,

    amenities: [
      "Garden",
      "Garage",
      "Park",
      "Air Conditioning",
    ],

    availableDate: "2026-11-25",
    listedAgo: "5 days ago",

    isNew: false,
    isFeatured: false,

    description:
      "Cozy family home with a beautiful garden and private parking.",

    petPolicy: "No Pets",

    leaseDuration: "12 Months",
  },

  {
    id: 3,

    images: [
      "/houses/house8.jpg",
      "/houses/house9.jpg",
      "/houses/house10.jpg",
    ],

    price: 2400,
    originalPrice: 2700,
    discount: 11,

    address: "420 Lakeview Drive",
    city: "Brookings",
    state: "South Dakota",
    zipCode: "57006",

    propertyType: "Townhouse",

    beds: 4,
    baths: 3,
    sqft: 2100,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Gym",
      "Balcony",
      "Park",
      "Garage",
    ],

    availableDate: "2026-12-10",
    listedAgo: "1 day ago",

    isNew: true,
    isFeatured: true,

    description:
      "Luxury townhouse with modern interiors and premium amenities.",

    petPolicy: "Pets Allowed",

    leaseDuration: "6 Months",
  },
  {
    id: 1,

    images: [
      "/houses/house1.jpg",
      "/houses/house2.jpg",
      "/houses/house3.jpg",
      "/houses/house4.jpg",
    ],

    price: 1850,
    originalPrice: 2100,
    discount: 12,

    address: "1250 Main Street",
    city: "Sioux Falls",
    state: "South Dakota",
    zipCode: "57104",

    propertyType: "Apartment",

    beds: 3,
    baths: 2,
    sqft: 1450,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Park",
      "Laundry",
      "Air Conditioning",
    ],

    availableDate: "2026-12-01",
    listedAgo: "2 days ago",

    isNew: true,
    isFeatured: true,

    description:
      "Beautiful modern apartment with spacious rooms and a great location.",

    petPolicy: "Pets Allowed",

    leaseDuration: "12 Months",
  },

  {
    id: 2,

    images: [
      "/houses/house5.jpg",
      "/houses/house6.jpg",
      "/houses/house7.jpg",
    ],

    price: 1450,
    originalPrice: null,
    discount: null,

    address: "850 West Avenue",
    city: "Rapid City",
    state: "South Dakota",
    zipCode: "57701",

    propertyType: "House",

    beds: 2,
    baths: 1,
    sqft: 1100,

    parking: 1,

    amenities: [
      "Garden",
      "Garage",
      "Park",
      "Air Conditioning",
    ],

    availableDate: "2026-11-25",
    listedAgo: "5 days ago",

    isNew: false,
    isFeatured: false,

    description:
      "Cozy family home with a beautiful garden and private parking.",

    petPolicy: "No Pets",

    leaseDuration: "12 Months",
  },

  {
    id: 3,

    images: [
      "/houses/house8.jpg",
      "/houses/house9.jpg",
      "/houses/house10.jpg",
    ],

    price: 2400,
    originalPrice: 2700,
    discount: 11,

    address: "420 Lakeview Drive",
    city: "Brookings",
    state: "South Dakota",
    zipCode: "57006",

    propertyType: "Townhouse",

    beds: 4,
    baths: 3,
    sqft: 2100,

    parking: 2,

    amenities: [
      "Swimming Pool",
      "Gym",
      "Balcony",
      "Park",
      "Garage",
    ],

    availableDate: "2026-12-10",
    listedAgo: "1 day ago",

    isNew: true,
    isFeatured: true,

    description:
      "Luxury townhouse with modern interiors and premium amenities.",

    petPolicy: "Pets Allowed",

    leaseDuration: "6 Months",
  },
];

export default resultData;
