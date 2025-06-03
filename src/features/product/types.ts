import type { IProducts } from "../../components/products/types";

export interface IProductState {
  products: IProducts[];
  isLoading: boolean;
  error: string;
}
