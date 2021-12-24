import clsx from 'clsx';
import { observer } from 'mobx-react';
import MobxStore from '../../store';

const SaleFilter = observer(() => {
    const {
        isSale,
        setIsSale,
        setApplyFilters,
    } = MobxStore;

    const onChange = (event: any) => {
        setIsSale(event?.target?.checked);
        setApplyFilters(true);
    };

    return (
        <div className="filter-check">
            <label className="filter-check_label">
                <input
                    id="discount-checkbox"
                    type="checkbox"
                    className="filter-check_checkbox"
                    checked={isSale}
                    onChange={onChange}
                />
                <span className={clsx("filter-check_checkmark", isSale && 'filter-check_checkmark-checked')} />
                <span className="filter-check_label-text">Акция</span>
            </label>
        </div>
    )
});

export default SaleFilter;
