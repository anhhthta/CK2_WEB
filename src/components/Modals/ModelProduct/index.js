import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './ModalProduct.module.scss';

const cx = classNames.bind(styles);

function ModalProduct({ data }) {
    return (
        <div>
            <div className={cx('modal-header', 'my_modal-header')}>
                <div className={cx('header-icon')}>
                    <button type="button" className={cx('my_btn-close')} data-bs-dismiss="modal">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>
            <div className={cx('modal-body')}>
                <div className={cx('content')}>
                    <div className={cx('container-fluid')}>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6')}>
                                <img src={data.image} />
                            </div>
                            <div className={cx('col-sm-6')}>
                                <h1>{data.name}</h1>
                                <p>{data.des}</p>
                                <p>Price:......................{data.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('modal-footer')}></div>
        </div>
    );
}

export default ModalProduct;
