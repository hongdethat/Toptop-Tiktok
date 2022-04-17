import { Link } from 'react-router-dom';
function Login(){
	return(
		<div>
		    <title>Đăng nhập | TópTóp</title>
		    <header className="login__modal__header"></header>
		    <div className="Login__margin">
                <div className="Login__form">
                    <div style={{maxHeight: 'calc((100vh - 70px) - 60px)'}} className="Modal__container">
                        <div className="content___modal">Đăng nhập vào TópTóp</div>
                        <div className="btn__modal">
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon1">
                                	</div>
                                </div>
                                <div className="Button__modal1">Sử dụng mã QR</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon2">
                                	</div>
                                </div>
                                <Link to="/Login/phone-or-email/" className="Button__modal1">Số điện thoại / Email / TikTok ID</Link>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon3">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Facebook</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon4">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Google</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon5">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Line</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon6">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Twitter</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon7">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với KakaoTalk</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon8">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Apple</div>
                            </div>
                            <div className="channel__modal">
                                <div className="channel__modal2">
                                	<div className="modalContainer__icon img__icon9">
                                	</div>
                                </div>
                                <div className="Button__modal1">Tiếp tục với Instagram</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div className="Login__footer">
                <div className="Login__footer2">
                    <div className="Login__to">Bạn không có tài khoản? <a href="#/">Đăng ký</a></div>
                </div>
            </div>
		</div>
	);
}
export default Login;
