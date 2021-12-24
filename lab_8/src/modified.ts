import goodsObj from './db/db.json';
import * as _ from 'lodash';
import { ICategories, IGood } from './interfaces';

const productList = goodsObj?.goods || [];

export const goods: IGood[] = _.map(productList, (product, idx) => ({ id: idx, ...product }));

export const categories: ICategories[] = _
    .chain(productList)
    .uniqBy((product) => product.category)
    .map((product, idx) => ({ id: idx, title: product.category }))
    .value();
    