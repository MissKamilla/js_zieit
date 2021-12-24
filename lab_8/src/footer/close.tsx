import { observer } from 'mobx-react';
import MobxStore from '../store';

const CloseCart = observer(() => {

    const {
        setIsOpenCart,
    } = MobxStore;

    const onClick = () => setIsOpenCart(false);

    return (
        <div
            className="cart-close"
            onClick={onClick}
        />
    )
});

export default CloseCart;
