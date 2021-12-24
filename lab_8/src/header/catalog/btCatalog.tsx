import { observer } from 'mobx-react';
import MobxStore from '../../store';

const BtCatalog = observer(() => {
    const { setIsOpenCatalog } = MobxStore;
    
    const onClick = () => setIsOpenCatalog(true);

    return (
        <button onClick={onClick}>
            <span className="catalog-button_burger" />
            <span className="catalog-button_text">Каталог</span>
        </button>
    )
});

export default BtCatalog;
