import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { drinks, foods } from '~/assert/demo';
import modals from '~/components/Modals';

const cx = classNames.bind(styles);

function Menu({ onClick }) {
    const handleModal = (food, data) => {
        onClick(food, data);
    };
    return (
        <>
            <div id="demo" className={cx('carousel slide ')} data-bs-ride="carousel">
                <div className={cx('carousel-indicators ')}>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>

                <div className={cx('carousel-inner ', 'my_carousel-inner')}>
                    <div className={cx('carousel-item my_carousel-item active')}>
                        <div className={cx('my_img-slide', 'my_img-1')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>WELCOME</p>
                            </div>
                            <h3>TITLE 1</h3>
                            <p>description 1</p>
                        </div>
                    </div>
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-2')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>WELCOME</p>
                            </div>
                            <h3>TITLE 2</h3>
                            <p>description 2</p>
                        </div>
                    </div>
                </div>

                <button
                    className={cx('carousel-control-prev')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                >
                    <span className={cx('carousel-control-prev-icon')}></span>
                </button>
                <button
                    className={cx('carousel-control-next')}
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span className={'carousel-control-next-icon'}></span>
                </button>
            </div>

            <div className={cx('container-fluid', 'text-white')}>
                <div className={cx('row', 'menu')}>
                    <div className={cx('container', 'list-card', 'bacground-color')}>
                        <h5 className={cx('text-center', 'my_primary-color')}>Best of food</h5>
                        <h1 className={cx('text-center')}>Menu</h1>
                        <div className={cx('row', 'list_menu', 'food')}>
                            <h4 className={cx('col-sm-12', 'my_primary-color')}>Food Menu</h4>
                            {foods.map((food, key) => {
                                return (
                                    <div
                                        onClick={() => handleModal(modals.product, food)}
                                        key={key}
                                        className={cx('col-md-6', 'col-lg-6', 'col-xl-4')}
                                        data-bs-toggle="modal"
                                        data-bs-target="#myModal"
                                    >
                                        <div className={cx('item')}>
                                            <img src={food.image} alt="" />
                                            <div>
                                                <h5>{food.name}</h5>
                                                <p>{food.des}</p>
                                                <p className={cx('my_primary-color')}>
                                                    .............. {food.price} (Price)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('row', 'list_menu', 'water')}>
                            <h4 className={cx('col-sm-12', 'my_primary-color')}>Water Menu</h4>

                            {drinks.map((drink, key) => {
                                return (
                                    <div key={key} className={cx('col-md-6', 'col-lg-6', 'col-xl-4')}>
                                        <div className={cx('item')}>
                                            <img src={drink.image} alt="" />
                                            <div>
                                                <h5>{drink.name}</h5>
                                                <p>{drink.des}</p>
                                                <p className={cx('my_primary-color')}>
                                                    .............. {drink.price} (Price)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'book')}>
                    <div className={cx('col-md-8')}>
                        <h5 className={cx('my_primary-color-opacity')}>
                            Fueling Life's Journey, Each Bite a Culinary Adventure!
                        </h5>
                        <h1>Booking Table For Your & Your Family</h1>
                    </div>
                    <div className={cx('col-md-4', 'd-flex', 'align-items-md-center', 'justify-content-md-end')}>
                        <form>
                            <button className={cx('btn', 'my_btn', 'mt-3')} type="button">
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
