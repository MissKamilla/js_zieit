import { useRef } from 'react';
import { observer } from 'mobx-react';
import MobxStore from '../../store';
import { categories } from '../../modified';
import clsx from 'clsx';
import useOutsideClick from '../../customHooks/useOutsideClick';

const CatalogList = observer(() => {

    const ref = useRef<HTMLDivElement>(null);
    const {
        category,
        setCategory,
        isOpenCatalog,
        setIsOpenCatalog,
        setApplyFilters,
    } = MobxStore;

    const renderList = categories && categories.map(categoryItem => {

        const onClick = () => {
            setCategory(categoryItem.title);
            setIsOpenCatalog(false);
            setApplyFilters(true);
        };

        return (
            <li
                key={categoryItem.id}
                className={clsx(category === categoryItem.title && 'catalog-list-item-selected')}
                onClick={onClick}
            >
                {categoryItem.title}
            </li>
        )
    })

    useOutsideClick(ref, () => {
        setIsOpenCatalog(false);
    });

    return (
        <div ref={ref} className={clsx('catalog', isOpenCatalog && 'open-catalog')}>
            <ul className="catalog-list">
                {renderList}
            </ul>
        </div>
    )
});

export default CatalogList;
