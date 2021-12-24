import { observer } from 'mobx-react';
import MobxStore from '../store';
import CloseCart from './close';
import clsx from 'clsx';
import CartList from './cartList';
import { ICartGood } from '../interfaces';

const Footer = observer(() => {

    const {
        isOpenCart,
        cart,
        setIsOpenCart,
        clearCart,
    } = MobxStore;

    const totalPrice = cart.reduce((acc: number, product: ICartGood) => acc + (product.price * product.amount), 0);

    const applyOrder = () => {
        setIsOpenCart(false);
        clearCart();
    }

    return (
        <div className={clsx('cart', isOpenCart && 'cart-open')}>
            <div className="cart-body">
                <div className="cart-title">Корзина</div>
                <div className="cart-total">Общая сумма: <span>{totalPrice}</span> грн</div>

                <div className="cart-wrapper">
                    <CartList />
                </div>
                <button
                    className="btn btn-primary cart-confirm"
                    onClick={applyOrder}
                >
                    Оформить заказ
                </button>
                <CloseCart />

            </div>
        </div>
    )
});

export default Footer;
