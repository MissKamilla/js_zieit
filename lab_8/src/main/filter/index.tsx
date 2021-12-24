import PriceFilter from './priceFilter';
import SaleFilter from './saleFilter';

function Filter() {

    return (
        <div className="col-3 col-xl-2 d-none d-lg-block">
            <div className="filter">
                <div className="filter-title">
                    <h5>Фильтр</h5>
                </div>
                <PriceFilter />
                <SaleFilter />
            </div>
        </div>
    )
}

export default Filter;
