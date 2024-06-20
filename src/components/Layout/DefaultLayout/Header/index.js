import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { images } from '~/assert';
import modals from '~/components/Modals';

const cx = classNames.bind(styles);

function Header({ onClick, dataList }) {
    const handleModal = (type) => {
        onClick(type);
    };

    return (
        <header className={cx('container-fluid', 'header', 'bacground-color')}>
            <nav className={cx('navbar', 'navbar-expand-sm', 'pt-1', 'pb-1', 'mx-md-5')}>
                <div className={cx('my_header-logo')}>
                    <button
                        className={cx('navbar-toggler')}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className={cx('navbar-toggler-icon')}></span>
                    </button>
                    <Link
                        onClick={() => {
                            window.scroll(0, 0);
                        }}
                        className={cx('navbar-brand')}
                        to="/"
                    >
                        <img src={images.logo} alt="error" />
                    </Link>
                </div>
                <div className={cx('collapse ', 'navbar-collapse', 'my_navbar-collapse')} id="mynavbar">
                    <div className={cx('my_header-menu')}>
                        <ul className={cx('navbar-nav', 'me-auto', 'my_navbar-nav')}>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => {
                                        window.scroll(0, 0);
                                    }}
                                    className={cx('nav-link', 'my-nav-link')}
                                    to="/"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => {
                                        window.scroll(0, 0);
                                    }}
                                    className={cx('nav-link', 'my-nav-link')}
                                    to="/about"
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => {
                                        window.scroll(0, 0);
                                    }}
                                    className={cx('nav-link', 'my-nav-link')}
                                    to="/menu"
                                >
                                    MENU
                                </Link>
                            </li>
                            <li className={cx('nav-item', 'dropdown')}>
                                <a
                                    className={cx('nav-link', 'my-nav-link', 'dropdown-toggle')}
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    PAGES
                                </a>
                                <ul className={cx('dropdown-menu ', 'my_dropdown-menu')}>
                                    <li>
                                        <a className={cx('dropdown-item')} href="#">
                                            SERVICE
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('dropdown-item')} href="#">
                                            HISTORY
                                        </a>
                                    </li>
                                    <li>
                                        <a className={cx('dropdown-item')} href="#">
                                            OTHER
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className={cx('d-flex')}>
                    {/* <button
                        className={cx('btn', 'my_btn')}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        Đăng nhập
                    </button> */}
                </form>
            </nav>
            <div className={cx('header-right', 'mx-md-5')}>
                <div className={cx('cart')}>
                    <Link to="/cart" className={cx('btn-cart')} after-content={dataList.length}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>
                <div className={cx('my_menu-register')}>
                    <div className={cx('nav-item', 'dropdown')}>
                        <div
                            className={cx('nav-link', 'dropdown-toggle', 'my_dropdown-toggle')}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                        >
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faCaretDown} />
                            <FontAwesomeIcon className={cx('menu-icon', 'icon-user')} icon={faCircleUser} />
                        </div>

                        <ul className={cx('dropdown-menu ', 'my_dropdown-menu')}>
                            <li>
                                <button
                                    className={cx('dropdown-item')}
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal"
                                    onClick={() => handleModal(modals.login)}
                                >
                                    Đăng Nhập
                                </button>
                            </li>
                            <li>
                                <button
                                    className={cx('dropdown-item')}
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal"
                                    onClick={() => handleModal(modals.register)}
                                >
                                    Đăng Ký
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
