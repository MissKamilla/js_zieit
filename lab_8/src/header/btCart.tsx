import { observer } from 'mobx-react';
import { ICartGood } from '../interfaces';
import MobxStore from '../store';

const BtCart = observer(() => {
    const {
        setIsOpenCart,
        cart,
    } = MobxStore;

    const count = cart.reduce((acc: number, product: ICartGood) => acc + product.amount, 0);

    const onClick = () => setIsOpenCart(true);

    return (
        <a
            href="#"
            id="cart"
            onClick={onClick}
        >
            <span className="counter">{count}</span>
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="nonzero"
                    d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z">
                </path>
            </svg></span>
            <span className="desc">Корзина</span>
        </a>
    )
});

export default BtCart;
