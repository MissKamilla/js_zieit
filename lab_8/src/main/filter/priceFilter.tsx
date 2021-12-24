import { observer } from 'mobx-react';
import MobxStore from '../../store';

const PriceFilter = observer(() => {
    const {
        minPrice,
        setMinPrice,
        correctMinPrice,
        maxPrice,
        setMaxPrice,
        correctMaxPrice,
        setApplyFilters,
    } = MobxStore;

    const onChangeMin = (event: any) => {
        console.log('MIN event.target.value: ', event.target.value)
        setMinPrice(event.target.value);
    }

    const onChangeMax = (event: any) => {
        console.log('MAX event.target.value: ', event.target.value)
        setMaxPrice(event.target.value);
    }

    const onBlurMin = () => {
        correctMinPrice();
        setApplyFilters(true);
    };
    const onBlurMax = () => {
        correctMaxPrice();
        setApplyFilters(true);
    };

    const onKeyDownMin = (event: any) => {
        if (event.key === 'Enter') {
            onBlurMin();
        }
    }

    const onKeyDownMax = (event: any) => {
        if (event.key === 'Enter') {
            onBlurMax();
        }
    }

    return (
        <div className="filter-price">
            <div className="filter-price_title">
                Цена
            </div>
            <form>
                <div className="filter-price_range">
                    <div className="filter-price_input-wrapper">
                        <label htmlFor="min" className="filter-price_label">от</label>
                        <input
                            id="min"
                            className="filter-price_input"
                            value={minPrice}
                            onChange={onChangeMin}
                            onBlur={onBlurMin}
                            onKeyDown={onKeyDownMin}
                        />
                    </div>
                    <div className="filter-price_input-wrapper">
                        <label htmlFor="max" className="filter-price_label">до</label>
                        <input
                            id="max"
                            className="filter-price_input"
                            value={maxPrice}
                            onChange={onChangeMax}
                            onBlur={onBlurMax}
                            onKeyDown={onKeyDownMax}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
});

export default PriceFilter;
