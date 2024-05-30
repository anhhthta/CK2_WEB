import classNames from 'classnames/bind';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import styles from './Home.module.scss';
import { images } from '~/assert';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <>
            <div id="demo" className={cx('carousel slide ')} data-bs-ride="carousel">
                <div className={cx('carousel-indicators ')}>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
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
                    <div className={cx('carousel-item my_carousel-item ')}>
                        <div className={cx('my_img-slide', 'my_img-3')}></div>
                        <div className={cx('carousel-caption', 'my_carousel-caption')}>
                            <div className={cx('wel_com')}>
                                <p>WELCOME</p>
                            </div>
                            <h3>TITLE 3</h3>
                            <p>description 3</p>
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
                <div className={cx('row', 'about')}>
                    <h5 className={cx('my_primary-color-opacity')} data-aos="fade-up">
                        ABOUT US
                    </h5>
                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <h1 className={cx('mb-4')}>Title</h1>
                        <p>
                            description ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
                            laboriosam accusamus amet at beatae cum eos sit earum similique voluptates, cupiditate
                            saepe, tenetur exercitationem doloremque ex tempora delectus obcaecati.
                        </p>
                    </div>
                    <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                        <img src={images.chef} alt="" style={{ width: '100%' }} />
                    </div>
                </div>

                <div className={cx('row', 'why')}>
                    <div className={cx('container', 'list-card')}>
                        <div data-aos="fade-up">
                            <h5 className={cx('my_primary-color-opacity')}>Why US</h5>
                            <h1>Why choose us</h1>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-12', 'col-md-12', 'col-lg-4')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <h5 className={cx('my_primary-color')}>01</h5>
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                        doloremque vel veniam harum facilis.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-12', 'col-lg-4')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <h5 className={cx('my_primary-color')}>02</h5>
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                        doloremque vel veniam harum facilis.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-12', 'col-lg-4')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <h5 className={cx('my_primary-color')}>03</h5>
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum
                                        doloremque vel veniam harum facilis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'menu')}>
                    <div data-aos="fade-up">
                        <h5 className={cx('text-center', 'my_primary-color')}>Best of food</h5>
                        <h1 className={cx('text-center')}>Popular Menu</h1>
                    </div>
                    <div className={cx('container', 'list-card')}>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo2} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo3} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo4} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo2} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo3} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-12', 'col-md-6')} data-aos="fade-up">
                                <div className={cx('item')}>
                                    <img src={images.demo4} alt="" />
                                    <div>
                                        <h2>Name</h2>
                                        <p>Description</p>
                                        <p className={cx('my_primary-color')}>................. (Price)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'feedback', 'text-center')}>
                    <div data-aos="fade-up">
                        <h5 className={cx('my_primary-color-opacity')}>Customers feedback</h5>
                        <h1>Popular Comments</h1>
                    </div>
                    <div className={cx('container', 'list-card')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="750">
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Name 1</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="1500">
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Name 2</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="2250">
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                        </div>
                                        <h3>Name 3</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-lg-3')} data-aos="fade-up" data-aos-duration="3000">
                                <div className={cx('item')}>
                                    <img src={images.avatar} alt="" />
                                    <div>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} className={cx('my_primary-color')} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <h3>Name 4</h3>
                                        <p>
                                            Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                                            laborum doloremque vel veniam harum facilis. Tempore, excepturi. Voluptatem,
                                            nesciunt. Vitae atque enim nostrum eos asperiores expedita obcaecati
                                            quibusdam at facilis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row', 'achievement')}>
                            <div className={cx('col-md-4')} data-aos="fade-up" data-aos-duration="1000">
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Premium Clients</h3>
                                </div>
                            </div>

                            <div className={cx('col-md-4')} data-aos="fade-up" data-aos-duration="2000">
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Expert Members</h3>
                                </div>
                            </div>

                            <div className={cx('col-md-4')} data-aos="fade-up" data-aos-duration="3000">
                                <h2 className={cx('my_primary-color-opacity')}>200+</h2>
                                <div>
                                    <h3>Winning Awards</h3>
                                </div>
                            </div>
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

export default Home;
