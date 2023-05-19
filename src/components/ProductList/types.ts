interface ISneakerSizes {
  size: string;
  price: string;
  isInStock: boolean
}

export interface IProductSneaker {
  image: string;
  title: string;
  price: string;
  sizes: ISneakerSizes[];
}