import React from 'react';
import '@/assets/css/footer.css';
import Languages from '@/commons/Languages';
import IcApple from '@/assets/images/ic_button_apple.png';
import IcQr from '@/assets/images/ic_qr.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className='container-footer'>
                <div className='--container-row-footer'>
                    <div className='row'>
                        <div className="col-lg-6 --container-col-lg-5-footer">
                            <p className="title">{Languages.footer.title}</p>
                        </div>
                        <div className="col-lg-2 --container-col-lg4-footer-right">
                            <div className="wrapBt">
                                <img className='button' src={IcApple} />
                                <img className='button' src={IcApple} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img src={IcQr} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
