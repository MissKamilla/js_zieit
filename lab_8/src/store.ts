import { makeAutoObservable, toJS } from 'mobx';
import { categories } from './modified';
import { goods } from './modified';
import * as _ from 'lodash';
import { ICartGood, IGood } from './interfaces';


export interface IStoreData {
  category: string;
  isOpenCatalog: boolean;
  minPrice: number;
  maxPrice: number;
  isSale: boolean;
  applyFilters: boolean;
  search: string;
  isOpenCart: boolean;
  cart: ICartGood[];
}

export interface IStoreMethods {
  setCategory: (title: string) => void;
  setIsOpenCatalog: (value: boolean) => void;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  setIsSale: (value: boolean) => void;
  correctMinPrice: () => void;
  correctMaxPrice: () => void;
  setApplyFilters: (value: boolean) => void;
  setSearch: (value: string) => void;
  setIsOpenCart: (value: boolean) => void;
  addProductToCart: (product: IGood) => void;
  getCart: () => ICartGood[];
  clearCart: () => void;
}

const defaultMaxPrice: number = _.maxBy(goods, 'price')?.price || 100000;

class StoreData implements IStoreData {

  category: string = Array.isArray(categories) && categories.length ? categories[0].title : '';
  isOpenCatalog: boolean = false;
  minPrice: number = 0;
  maxPrice: number = defaultMaxPrice;
  isSale: boolean = false;
  applyFilters: boolean = false;
  search: string = '';
  isOpenCart: boolean = false;
  cart: ICartGood[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  private isValidPrice(value: number): boolean {
    return value >= 0;
  }

  setCategory = (title: string): void => {
    this.category = title;
  }

  setIsOpenCatalog = (value: boolean): void => {
    this.isOpenCatalog = value;
  }

  setMinPrice = (value: number): void => {
    if (!this.isValidPrice(value)) {
      return;
    }
    this.minPrice = value;
  }

  setMaxPrice = (value: number): void => {
    if (!this.isValidPrice(value)) {
      return;
    }
    this.maxPrice = value;
  }

  setIsSale = (value: boolean): void => {
    this.isSale = value;
  }

  correctMinPrice = (): void => {
    if (this.minPrice > this.maxPrice) {
      this.maxPrice = this.minPrice;
    }
  }

  correctMaxPrice = (): void => {
    if (this.maxPrice < this.minPrice) {
      this.minPrice = this.maxPrice;
    }
  }

  setApplyFilters = (value: boolean): void => {
    this.applyFilters = value;
  }

  setSearch = (value: string): void => {
    this.search = value;
  }

  setIsOpenCart = (value: boolean): void => {
    this.isOpenCart = value;
  }

  addProductToCart = (product: IGood): void => {
    const curCart = toJS(this.cart);
    const find = curCart.find(productItem => productItem.id === product.id);
    if (find) {
      find.amount += 1;
      this.cart = curCart;
      return;
    }
    curCart.push({
      amount: 1,
      ...product,
    });
    this.cart = curCart;
  }

  getCart = (): ICartGood[] => {
    return toJS(this.cart);
  }

  clearCart = (): void => {
    this.cart = [];
  }

}

const Store = new StoreData();

export default Store;
