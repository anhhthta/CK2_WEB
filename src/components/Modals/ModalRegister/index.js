import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from '../StylesLogin.module.scss';
import modals from '..';

const cx = classNames.bind(styles);

function ModalRegister({ onClick }) {
    const handleModal = () => {
        onClick(modals.login);
    };

    return (
        <div>
            <div className={cx('modal-header', 'my_modal-header')}>
                <div className={cx('header-icon')}>
                    <button type="button" className={cx('my_btn-close')} data-bs-dismiss="modal">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className={cx('header-title')}>
                    <p
                        onClick={() => {
                            handleModal();
                        }}
                    >
                        Login
                    </p>
                    <p className={cx('selected')}>Register</p>
                </div>
            </div>
            <div className={cx('modal-body')}>
                <div className={cx('content')}>
                    <from>
                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                Tên
                            </span>
                            <input type="text" placeholder="Tên" />
                        </label>

                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                                Email
                            </span>
                            <input type="email" placeholder="Email" />
                        </label>

                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                                Mật Khẩu
                            </span>
                            <input type="password" placeholder="Mật khẩu" />
                        </label>

                        <label>
                            <span>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                                Nhập lại Mật Khẩu
                            </span>
                            <input type="password" placeholder="Nhập lại Mật khẩu" />
                        </label>

                        <label className={cx('d-flex', 'align-items-center')}>
                            <input type="checkbox" placeholder="Email" />
                            <span>Đồng ý với điều khoản</span>
                        </label>
                        <button className={cx('my_btn', 'btn-modal')}>Đăng Ký</button>
                    </from>
                </div>
            </div>
            <div className={cx('modal-footer')}></div>
        </div>
    );
}

export default ModalRegister;
