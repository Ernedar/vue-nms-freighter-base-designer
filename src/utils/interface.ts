export interface buildingProduct {
  productId: number;
  productName: string;
  productCategory: buildingCategory;
  productLink: string;
}

export interface buildingProducts {
  [index: number]: buildingProduct;
}

export interface buildingCategory {
  productCategoryName: string;
}

export interface baseFloor {
  [index: number]: number[];
}

export interface baseFloors {
  [index: number]: baseFloor;
}

