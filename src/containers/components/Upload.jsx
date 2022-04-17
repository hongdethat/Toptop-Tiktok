import { AiOutlineCheck } from 'react-icons/ai';
import Footer from '../footer/Footer';
import './css/Upload.css';

function Upload(){
	return(
		<div>
			<div className="UpdateVideo__Desktop">
				<div className="UpdateVideo__layout">
				    <title>Tải lên | TópTóp</title>
				    <div className="UpdateVideo__layout2">
				        <div className="UpdateVideo__container">
				        	<div className="UpdateVideo__content">
				        	    Tải video lên
				        	</div>
				        	<div className="UpdateVideo__Margintop">
				        	    <span>
				        	    	Đăng video vào tài khoản của bạn
				        	    </span>
				        	</div>
				        	<div className="UpdateVideo__Form">
				        	    <div className="UpdateVideo__uploader">
				        	    	<input type="file" className="UpdateVideo__File" style={{display: 'none'}}/>
				        	    	<div className="UpdateVideo__before Upload__card">
				        	    		<img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg" alt="Upload"/>
				        	    		<div className="UpdateVideo__text__main">
				        	    		    <span>Chọn video để tải lên</span>
				        	    		</div>
				        	    		<div className="UpdateVideo__text__sub">
				        	    		    <span>Hoặc kéo và thả tập tin</span>
				        	    		</div>
				        	    		<div>
				        	    		    <div className="UpdateVideo__text__stage">
				        	    		    	<span>MP4 hoặc WebM</span>
				        	    		    </div>
				        	    		    <div className="UpdateVideo__text__stage">
				        	    		    	<span>Độ phân giải 720x1280 trở lên</span>
				        	    		    </div>
				        	    		    <div className="UpdateVideo__text__stage">
				        	    		    	<span>Tối đa 10 phút</span>
				        	    		    </div>
				        	    		    <div className="UpdateVideo__text__stage">
				        	    		    	<span>Ít hơn 2 GB</span>
				        	    		    </div>
				        	    		    <div className="UpdateVideo__text__btn">
				        	    		        <button>Chọn tập tin</button>
				        	    		    </div>
				        	    		</div>
				        	    	</div>
				        	    </div>
				        	    <div className="UpdateVideo__input">
				        	    	<div className="UpdateVideo__caption">
				        	    		<div className="UpdateVideo__caption2">
				        	    			<div className="UpdateVideo__text__container">
				        	    				<span className="UpdateVideo__text__container1">Chú thích</span>
				        	    				<span className="UpdateVideo__text__container2">0 / 150</span>
				        	    			</div>
				        	    		</div>
				        	    	</div>
				        	    	<div className="UpdateVideo__input__containers">
				        	    	    <div className="UpdateVideo__input__containers1">
				        	    	        <div className="editor">
				        	    	            <div className="editor1">
				        	    	                <div className="UpdateVideo__draft">
				        	    	                	<input type="text" />
				        	    	                </div>
				        	    	            </div>
				        	    	        </div>
				        	    	        <div className="UpdateVideo__icon__style Style__icon1">
				        	    	            <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg" alt="@"/>
				        	    	        </div>
				        	    	        <div className="UpdateVideo__icon__style Style__icon2">
				        	    	            <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg" alt="#"/>
				        	    	        </div>
				        	    	    </div>
				        	    	</div>
				        	    	<div className="UpdateVideo__margin__top">
					        	    	<div className="UpdateVideo__caption">
					        	    		<div className="UpdateVideo__caption2">
					        	    			<div className="UpdateVideo__text__container">
					        	    				<span className="UpdateVideo__text__container1">Ảnh bìa</span>
					        	    			</div>
					        	    		</div>
					        	    	</div>
					        	    	<div className="UpdateVideo__text__form1">
					        	    	    <div className="UpdateVideo__img__form UpdateVideo__img__border">
					        	    	    	<div className="UpdateVideo__text__background UpdateVideo__Bg"></div>
					        	    	    </div>
					        	    	</div>
				        	    	</div>
				        	    	<div className="UpdateVideo__margin__top">
					        	    	<div className="UpdateVideo__caption">
					        	    		<div className="UpdateVideo__caption2">
					        	    			<div className="UpdateVideo__text__container">
					        	    				<span className="UpdateVideo__text__container1">Ai có thể xem video này</span>
					        	    			</div>
					        	    		</div>
					        	    		<div className="UpdateVideo__Select">
					        	    		    <select>
					        	    		        <option>
					        	    		            Công khai
					        	    		        </option>
					        	    		        <option>
					        	    		            Bạn bè
					        	    		        </option>
					        	    		        <option>
					        	    		            Riêng tư
					        	    		        </option>
					        	    		    </select>
					        	    		</div>
					        	    	</div>
				        	    	</div>
				        	    	<div className="UpdateVideo__margin__top">
					        	    	<div className="UpdateVideo__caption">
					        	    		<div className="UpdateVideo__caption2">
					        	    			<div className="UpdateVideo__text__container">
					        	    				<span className="UpdateVideo__text__container1">Cho phép người dùng:</span>
					        	    			</div>
					        	    		</div>
					        	    		<div className="UpdateVideo__checkbox__container">
					        	    		    <div className="UpdateVideo__checkbox__margin">
					        	    		        <div className="UpdateVideo__checkbox__flex">
					        	    		            <label>
					        	    		                <span className="UpdateVideo__checkbox__1">Bình luận</span>
					        	    		            </label>
					        	    		            <div className="UpdateVideo__checkbox__form">
					        	    		            	<input type="checkbox"/>
					        	    		            	<div className="UpdateVideo__checkbox__css">
					        	    		            		<AiOutlineCheck/>
					        	    		            	</div>
					        	    		            </div>
					        	    		        </div>
					        	    		    </div>
					        	    		    <div className="UpdateVideo__checkbox__margin">
					        	    		        <div className="UpdateVideo__checkbox__flex">
					        	    		            <label>
					        	    		                <span className="UpdateVideo__checkbox__1">Duet</span>
					        	    		            </label>
					        	    		            <div className="UpdateVideo__checkbox__form">
					        	    		            	<input type="checkbox"/>
					        	    		            	<div className="UpdateVideo__checkbox__css">
					        	    		            		<AiOutlineCheck/>
					        	    		            	</div>
					        	    		            </div>
					        	    		        </div>
					        	    		    </div>
					        	    		    <div className="UpdateVideo__checkbox__margin">
					        	    		        <div className="UpdateVideo__checkbox__flex">
					        	    		            <label>
					        	    		                <span className="UpdateVideo__checkbox__1">Stitch</span>
					        	    		            </label>
					        	    		            <div className="UpdateVideo__checkbox__form">
					        	    		            	<input type="checkbox"/>
					        	    		            	<div className="UpdateVideo__checkbox__css">
					        	    		            		<AiOutlineCheck/>
					        	    		            	</div>
					        	    		            </div>
					        	    		        </div>
					        	    		    </div>
					        	    		</div>
					        	    	</div>
				        	    	</div>
				        	    	<div className="UpdateVideo__margin__top">
					        	    	<div className="UpdateVideo__caption">
					        	    		<div className="UpdateVideo__caption2">
					        	    			<div className="UpdateVideo__text__container">
					        	    				<span className="UpdateVideo__text__container1">Chạy kiểm tra bản quyền</span>
					        	    			</div>
					        	    		</div>
					        	    		<span className="UpdateVideo__Span1">
					        	    		    Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền hay không. Nếu chúng tôi phát hiện có vi phạm, bạn có thể chỉnh sửa video trước khi đăng.
					        	    		    <span>Tìm hiểu thêm</span>
					        	    		</span>
					        	    	</div>
				        	    	</div>
				        	    	<div className="UpdateVideo__btn__uploading">
				        	    	    <div className="UpdateVideo__btn__uploading1">
				        	    	    	<button>Hủy bỏ</button>
				        	    	    </div>
				        	    	    <div className="UpdateVideo__btn__uploading2">
				        	    	    	<button>Đăng</button>
				        	    	    </div>
				        	    	</div>
				        	    </div>
				        	</div>
				        </div>
				    </div>
				</div>
		    </div>
		    <Footer/>
	    </div>
	)
}
export default Upload;