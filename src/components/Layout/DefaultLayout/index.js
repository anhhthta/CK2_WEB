import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import Modal from '../../Modals/Modal';

const cx = classNames.bind(styles);

function DefaultLayout({ children, modal, onClick }) {
    console.log(modal);

    return (
        <div className={cx('wrapper')}>
            <Header onClick={onClick} />
            <div className={cx('container-fluid', 'content')}>{children}</div>
            <Footer />

            <Modal>{modal}</Modal>
        </div>
    );
}

export default DefaultLayout;
