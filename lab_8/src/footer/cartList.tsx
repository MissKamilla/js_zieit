import { observer } from 'mobx-react'
import MobxStore from '../store';


const CartList = observer(() => {

    const { cart } = MobxStore;

    if (!cart.length) {
        return (
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        )
    }

    const renderList = cart.map((product) => {

        const style = {
            backgroundImage: `url('${product.img}')`,
        };

        return (
            <div
                key={product.id}
                className="col-12 col-md-6 col-lg-6 col-xl-6"
            >
                <div className="card card-cart">
                    {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : null}
                    <div className="card-img-wrapper">
                        <span
                            className="card-img-top"
                            style={style}
                        />
                    </div>
                    <div className="card-body justify-content-between">
                        <div className="card-price d-flex justify-content-between"><div>{product.price}</div> <div>X {product.amount}</div></div>
                        <h5 className="card-title">{product.title}</h5>
                        {/* <button
                            className="btn btn-primary"
                            onClick={addToCart}
                        >В корзину</button> */}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="col-12 col-lg-12 col-xl-12">
            <div className="container">
                <div className="row no-gutters goods">
                    {renderList}
                </div>
            </div>
        </div>
    )
});

export default CartList;
