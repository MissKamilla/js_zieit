import { observer } from 'mobx-react'
import MobxStore, { IStoreData } from '../../store';
import { goods } from '../../modified';
import * as _ from 'lodash';
import { useEffect, useState } from 'react';
import { IGood } from '../../interfaces';

function calculateProductList(goods: IGood[], {
    category,
    isSale,
    minPrice,
    maxPrice,
    search,
}: IStoreData): IGood[] {
    return _.filter(goods, (product: IGood) => {
        try {
            if (product.category !== category) {
                return false;
            }

            if (isSale && !product.sale) {
                return false;
            }

            if (product.price < minPrice || product.price > maxPrice) {
                return false;
            }

            if (search && !product.title.toLowerCase().includes(search.toLowerCase())) {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    });
}

const Body = observer(({ }) => {

    const {
        applyFilters,
        setApplyFilters,
        addProductToCart,
    } = MobxStore;

    const [list, setList] = useState<IGood[]>(calculateProductList(goods, MobxStore));

    useEffect(() => {
        if (!applyFilters) {
            return;
        }

        setApplyFilters(false);

        const filterList = calculateProductList(goods, MobxStore);

        setList(filterList);

    }, [applyFilters]);

    const renderList = list.map((product) => {

        const style = {
            backgroundImage: `url('${product.img}')`,
        };

        const addToCart = () => addProductToCart(product);

        return (
            <div
                key={product.id}
                className="col-12 col-md-6 col-lg-4 col-xl-3"
            >
                <div className="card">
                    {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : null}
                    <div className="card-img-wrapper">
                        <span
                            className="card-img-top"
                            style={style}
                        />
                    </div>
                    <div className="card-body justify-content-between">
                        <div className="card-price">{product.price}</div>
                        <h5 className="card-title">{product.title}</h5>
                        <button
                            className="btn btn-primary"
                            onClick={addToCart}
                        >В корзину</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="col-12 col-lg-9 col-xl-10">
            <div className="container">
                <div className="row no-gutters goods">
                    {renderList}
                </div>
            </div>
        </div>
    )
});

export default Body;
