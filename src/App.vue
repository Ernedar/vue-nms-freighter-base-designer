<template>
  <div id="app">
    <NavigationSideBar></NavigationSideBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationSideBar from './components/NavigationSideBar/NavigationSideBar.vue';

enum freighterModules {
  core =  'core-modules',
  highTech = 'high-tech-room-modules',
  smallScale = 'small-scale-technology',
  industrial = 'industrial-rooms',
  agriculturalRoom = 'agricultural-room-modules',
  plants = 'plants',
  legacy = 'legacy-structures'
}

interface buildingProduct {
  productId: number;
  productName: string;
  productModule: freighterModules;
}

interface buildingProducts {
  [index: number]: buildingProduct
}

const freighterProductSet: buildingProducts = [
  {
    productId: 1,
    productName: "Freighter Corridor",
    productModule: freighterModules.core
  },
  {
    productId: 2,
    productName: "Freighter Stairs",
    productModule: freighterModules.core
  },
  {
    productId: 3,
    productName: "Freighter Glass Corridor",
    productModule: freighterModules.core
  },
  {
    productId: 4,
    productName: "Reinforced Window",
    productModule: freighterModules.core
  },
  {
    productId: 5,
    productName: "Bulkhead Door",
    productModule: freighterModules.core
  },
  {
    productId: 6,
    productName: "Exterior Catwalk",
    productModule: freighterModules.core
  },
  {
    productId: 7,
    productName: "Freighter External Stairs",
    productModule: freighterModules.core
  },
  {
    productId: 8,
    productName: "ExternalPlatform",
    productModule: freighterModules.core
  },
  {
    productId: 9,
    productName: "Ladder Module",
    productModule: freighterModules.core
  },
  {
    productId: 10,
    productName: "Fleet Command Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 11,
    productName: "Scanner Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 12,
    productName: "Teleport Chamber",
    productModule: freighterModules.highTech
  },
  {
    productId: 13,
    productName: "Appearance Modifier Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 14,
    productName: "Science Specialist's Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 15,
    productName: "Construction Specialist's Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 16,
    productName: "Galactic Trade Room",
    productModule: freighterModules.highTech
  },
  {
    productId: 16,
    productName: "Technology Room (Expansion)",
    productModule: freighterModules.highTech
  },
  {
    productId: 17,
    productName: "Short-Range Teleporter",
    productModule: freighterModules.smallScale
  },
  {
    productId: 18,
    productName: "Bytebeat Device",
    productModule: freighterModules.smallScale
  },
  {
    productId: 19,
    productName: "Health Station",
    productModule: freighterModules.smallScale
  },
  {
    productId: 20,
    productName: "Hazard Protection Unit",
    productModule: freighterModules.smallScale
  },
  {
    productId: 21,
    productName: "Refiner Room",
    productModule: freighterModules.industrial
  },
  {
    productId: 22,
    productName: "Stellar Extractor Room",
    productModule: freighterModules.industrial
  },
  {
    productId: 23,
    productName: "Orbital Exocraft Materializer",
    productModule: freighterModules.industrial
  },
  {
    productId: 24,
    productName: "Exocraft Specialist's Room",
    productModule: freighterModules.industrial
  },
  {
    productId: 25,
    productName: "Weapons Terminal Room",
    productModule: freighterModules.industrial
  },
  {
    productId: 26,
    productName: "Industrial Room (Expansion)",
    productModule: freighterModules.industrial
  },
  {
    productId: 27,
    productName: "Freighter Storage Unit 0-9",
    productModule: freighterModules.industrial
  },
  {
    productId: 28,
    productName: "Cultivation Chamber",
    productModule: freighterModules.agriculturalRoom
  },
  {
    productId: 29,
    productName: "Double Cultivation Chamber",
    productModule: freighterModules.agriculturalRoom
  },
  {
    productId: 30,
    productName: "Nutrition Room",
    productModule: freighterModules.agriculturalRoom
  },
  {
    productId: 31,
    productName: "Agricurtural Specialist's Room",
    productModule: freighterModules.agriculturalRoom
  },
  {
    productId: 32,
    productName: "Biological Room (Expansion)",
    productModule: freighterModules.agriculturalRoom
  },
  {
    productId: 33,
    productName: "Large Freighter Room (variant 1)",
    productModule: freighterModules.legacy
  },
  {
    productId: 34,
    productName: "Large Freighter Room (variant 2)",
    productModule: freighterModules.legacy
  },
  {
    productId: 35,
    productName: "Large Freighter Room (variant 3)",
    productModule: freighterModules.legacy
  },
  {
    productId: 36,
    productName: "Freighter Corridor (Legacy)",
    productModule: freighterModules.legacy
  },
  {
    productId: 37,
    productName: "Curved Freighter Corridor",
    productModule: freighterModules.legacy
  },
  {
    productId: 38,
    productName: "Freighter Junction",
    productModule: freighterModules.legacy
  },
  {
    productId: 39,
    productName: "Freighter Cross Junction",
    productModule: freighterModules.legacy
  },
  {
    productId: 40,
    productName: "Standing Planter",
    productModule: freighterModules.plants
  },
  {
    productId: 41,
    productName: "Gamma Weed",
    productModule: freighterModules.plants
  },
  {
    productId: 42,
    productName: "Fungal Cluster",
    productModule: freighterModules.plants
  },
  {
    productId: 43,
    productName: "Frostwort",
    productModule: freighterModules.plants
  },
  {
    productId: 44,
    productName: "Venom Urchin",
    productModule: freighterModules.plants
  },
  {
    productId: 45,
    productName: "Solar Vine",
    productModule: freighterModules.plants
  },
  {
    productId: 46,
    productName: "Gutrot Flower",
    productModule: freighterModules.plants
  },
  {
    productId: 47,
    productName: "Gravitino Host",
    productModule: freighterModules.plants
  },
  {
    productId: 48,
    productName: "Mordite Root",
    productModule: freighterModules.plants
  },
  {
    productId: 49,
    productName: "Echinocactus",
    productModule: freighterModules.plants
  },
  {
    productId: 50,
    productName: "Star Bramble",
    productModule: freighterModules.plants
  },
  {
    productId: 51,
    productName: "Albumen Pearl Orb",
    productModule: freighterModules.plants
  },
  {
    productId: 52,
    productName: "NipNip",
    productModule: freighterModules.plants
  }
]

@Component({
  components: {
    NavigationSideBar
  },
})
export default class App extends Vue {}
</script>

<style src="./style.css">
</style>
