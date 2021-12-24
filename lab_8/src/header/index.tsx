import Catalog from './catalog';
import Search from './search';
import BtCart from './btCart';

function Header() {

    return (
        <header>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="navbar-wrapper d-flex justify-content-between align-items-center">
                                <a className="logo" href="/"></a>
                                <div className="d-flex control-wrapper">
                                    <Catalog />
                                    <Search />
                                </div>
                                <BtCart />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;