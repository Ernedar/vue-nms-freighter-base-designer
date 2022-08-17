import { buildingProducts, buildingCategory } from '../utils/interface';

export const freighterCategoryCore: buildingCategory = {
  productCategoryName: 'Core Freighter Modules',
};

export const freighterCategoryHighTech: buildingCategory = {
  productCategoryName: 'High-Tech Room Modules',
};

export const freighterCategorySmallScale: buildingCategory = {
  productCategoryName: 'Small-Scale Technology',
};

export const freighterCategoryIndustrial: buildingCategory = {
  productCategoryName: 'Industrial Room',
};

export const freighterCategoryAgriRoom: buildingCategory = {
  productCategoryName: 'Agricultural Room Modules',
};

export const freighterCategoryPlants: buildingCategory = {
  productCategoryName: 'Plants',
};

export const freighterCategoryLegacy: buildingCategory = {
  productCategoryName: 'Legacy Structures',
};

export const freighterProductCategories = [
  freighterCategoryCore,
  freighterCategoryHighTech,
  freighterCategoryIndustrial,
  freighterCategorySmallScale,
  freighterCategoryAgriRoom,
  freighterCategoryLegacy,
  freighterCategoryPlants,
];

export const freighterProductSet: buildingProducts = [
  {
    productId: 1,
    productName: 'Freighter Corridor',
    productCategory: freighterCategoryCore,
    productLink:
      'https://nomanssky.fandom.com/wiki/Freighter_Corridor_(Endurance)',
  },
  {
    productId: 2,
    productName: 'Freighter Stairs',
    productCategory: freighterCategoryCore,
    productLink:
      'https://nomanssky.fandom.com/wiki/Freighter_Stairs_(Endurance)',
  },
  {
    productId: 3,
    productName: 'Freighter Glass Corridor',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_Glass_Corridor',
  },
  {
    productId: 4,
    productName: 'Reinforced Window',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Reinforced_Window',
  },
  {
    productId: 5,
    productName: 'Bulkhead Door',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Bulkhead_Door',
  },
  {
    productId: 6,
    productName: 'Exterior Catwalk',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Exterior_Catwalk',
  },
  {
    productId: 7,
    productName: 'Freighter External Stairs',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_External_Stairs',
  },
  {
    productId: 8,
    productName: 'ExternalPlatform',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Exterior_Platform',
  },
  {
    productId: 9,
    productName: 'Ladder Module',
    productCategory: freighterCategoryCore,
    productLink: 'https://nomanssky.fandom.com/wiki/Ladder_Module',
  },
  {
    productId: 10,
    productName: 'Fleet Command Room',
    productCategory: freighterCategoryHighTech,
    productLink: 'https://nomanssky.fandom.com/wiki/Fleet_Command_Room',
  },
  {
    productId: 11,
    productName: 'Scanner Room',
    productCategory: freighterCategoryHighTech,
    productLink: 'https://nomanssky.fandom.com/wiki/Scanner_Room',
  },
  {
    productId: 12,
    productName: 'Teleport Chamber',
    productCategory: freighterCategoryHighTech,
    productLink: 'https://nomanssky.fandom.com/wiki/Teleport_Chamber',
  },
  {
    productId: 13,
    productName: 'Appearance Modifier Room',
    productCategory: freighterCategoryHighTech,
    productLink: 'https://nomanssky.fandom.com/wiki/Appearance_Modifier_Room',
  },
  {
    productId: 14,
    productName: "Science Specialist's Room",
    productCategory: freighterCategoryHighTech,
    productLink:
      'https://nomanssky.fandom.com/wiki/Science_Specialist%27s_Room',
  },
  {
    productId: 15,
    productName: "Construction Specialist's Room",
    productCategory: freighterCategoryHighTech,
    productLink:
      'https://nomanssky.fandom.com/wiki/Construction_Specialist%27s_Room',
  },
  {
    productId: 16,
    productName: 'Galactic Trade Room',
    productCategory: freighterCategoryHighTech,
    productLink: 'https://nomanssky.fandom.com/wiki/Galactic_Trade_Room',
  },
  {
    productId: 16,
    productName: 'Technology Room (Expansion)',
    productCategory: freighterCategoryHighTech,
    productLink:
      'https://nomanssky.fandom.com/wiki/Technology_Room_(Expansion)',
  },
  {
    productId: 17,
    productName: 'Short-Range Teleporter',
    productCategory: freighterCategorySmallScale,
    productLink: 'https://nomanssky.fandom.com/wiki/Short-Range_Teleporter',
  },
  {
    productId: 18,
    productName: 'Bytebeat Device',
    productCategory: freighterCategorySmallScale,
    productLink: 'https://nomanssky.fandom.com/wiki/Bytebeat_Device',
  },
  {
    productId: 19,
    productName: 'Health Station',
    productCategory: freighterCategorySmallScale,
    productLink: 'https://nomanssky.fandom.com/wiki/Health_Station',
  },
  {
    productId: 20,
    productName: 'Hazard Protection Unit',
    productCategory: freighterCategorySmallScale,
    productLink:
      'https://nomanssky.fandom.com/wiki/Hazard_Protection_Unit_(base_building)',
  },
  {
    productId: 21,
    productName: 'Refiner Room',
    productCategory: freighterCategoryIndustrial,
    productLink: 'https://nomanssky.fandom.com/wiki/Refiner_Room',
  },
  {
    productId: 22,
    productName: 'Stellar Extractor Room',
    productCategory: freighterCategoryIndustrial,
    productLink: 'https://nomanssky.fandom.com/wiki/Stellar_Extractor_Room',
  },
  {
    productId: 23,
    productName: 'Orbital Exocraft Materializer',
    productCategory: freighterCategoryIndustrial,
    productLink:
      'https://nomanssky.fandom.com/wiki/Orbital_Exocraft_Materialiser',
  },
  {
    productId: 24,
    productName: "Exocraft Specialist's Room",
    productCategory: freighterCategoryIndustrial,
    productLink:
      'https://nomanssky.fandom.com/wiki/Exocraft_Specialist%27s_Room',
  },
  {
    productId: 25,
    productName: 'Weapons Terminal Room',
    productCategory: freighterCategoryIndustrial,
    productLink: 'https://nomanssky.fandom.com/wiki/Weapons_Terminal_Room',
  },
  {
    productId: 26,
    productName: 'Industrial Room (Expansion)',
    productCategory: freighterCategoryIndustrial,
    productLink:
      'https://nomanssky.fandom.com/wiki/Industrial_Room_(Expansion)',
  },
  {
    productId: 27,
    productName: 'Freighter Storage Unit 0-9',
    productCategory: freighterCategoryIndustrial,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_Storage_Unit',
  },
  {
    productId: 28,
    productName: 'Cultivation Chamber',
    productCategory: freighterCategoryAgriRoom,
    productLink: 'https://nomanssky.fandom.com/wiki/Cultivation_Chamber',
  },
  {
    productId: 29,
    productName: 'Double Cultivation Chamber',
    productCategory: freighterCategoryAgriRoom,
    productLink: 'https://nomanssky.fandom.com/wiki/Double_Cultivation_Chamber',
  },
  {
    productId: 30,
    productName: 'Nutrition Room',
    productCategory: freighterCategoryAgriRoom,
    productLink: 'https://nomanssky.fandom.com/wiki/Nutrition_Room',
  },
  {
    productId: 31,
    productName: "Agricurtural Specialist's Room",
    productCategory: freighterCategoryAgriRoom,
    productLink:
      'https://nomanssky.fandom.com/wiki/Agricultural_Specialist%27s_Room',
  },
  {
    productId: 32,
    productName: 'Biological Room (Expansion)',
    productCategory: freighterCategoryAgriRoom,
    productLink:
      'https://nomanssky.fandom.com/wiki/Biological_Room_(Expansion)',
  },
  {
    productId: 33,
    productName: 'Large Freighter Room (variant 1)',
    productCategory: freighterCategoryLegacy,
    productLink:
      'https://nomanssky.fandom.com/wiki/Large_Freighter_Room_(variant_1)',
  },
  {
    productId: 34,
    productName: 'Large Freighter Room (variant 2)',
    productCategory: freighterCategoryLegacy,
    productLink:
      'https://nomanssky.fandom.com/wiki/Large_Freighter_Room_(variant_2)',
  },
  {
    productId: 35,
    productName: 'Large Freighter Room (variant 3)',
    productCategory: freighterCategoryLegacy,
    productLink:
      'https://nomanssky.fandom.com/wiki/Large_Freighter_Room_(variant_3)',
  },
  {
    productId: 36,
    productName: 'Freighter Corridor (Legacy)',
    productCategory: freighterCategoryLegacy,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_Corridor',
  },
  {
    productId: 37,
    productName: 'Curved Freighter Corridor',
    productCategory: freighterCategoryLegacy,
    productLink: 'https://nomanssky.fandom.com/wiki/Curved_Freighter_Corridor',
  },
  {
    productId: 38,
    productName: 'Freighter Junction',
    productCategory: freighterCategoryLegacy,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_Junction',
  },
  {
    productId: 39,
    productName: 'Freighter Cross Junction',
    productCategory: freighterCategoryLegacy,
    productLink: 'https://nomanssky.fandom.com/wiki/Freighter_Cross_Junction',
  },
  {
    productId: 40,
    productName: 'Standing Planter',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Standing_Planter',
  },
  {
    productId: 41,
    productName: 'Gamma Weed',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Gamma_Weed',
  },
  {
    productId: 42,
    productName: 'Fungal Cluster',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Fungal_Cluster',
  },
  {
    productId: 43,
    productName: 'Frostwort',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Frostwort',
  },
  {
    productId: 44,
    productName: 'Venom Urchin',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Venom_Urchin',
  },
  {
    productId: 45,
    productName: 'Solar Vine',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Solar_Vine',
  },
  {
    productId: 46,
    productName: 'Gutrot Flower',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Gutrot_Flower',
  },
  {
    productId: 47,
    productName: 'Gravitino Host',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Gravitino_Host',
  },
  {
    productId: 48,
    productName: 'Mordite Root',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Mordite_Root',
  },
  {
    productId: 49,
    productName: 'Echinocactus',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Echinocactus',
  },
  {
    productId: 50,
    productName: 'Star Bramble',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Star_Bramble',
  },
  {
    productId: 51,
    productName: 'Albumen Pearl Orb',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/Albumen_Pearl_Orb',
  },
  {
    productId: 52,
    productName: 'NipNip',
    productCategory: freighterCategoryPlants,
    productLink: 'https://nomanssky.fandom.com/wiki/NipNip',
  },
];

