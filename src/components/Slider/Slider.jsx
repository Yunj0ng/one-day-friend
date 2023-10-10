import styles from "./Slider.module.scss";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import slideImg1 from "@assets/imgs/slide1.jpg";
import slideImg2 from "@assets/imgs/slide2.jpg";
import slideImg3 from "@assets/imgs/slide3.jpg";
import slideImg4 from "@assets/imgs/slide4.jpg";
import leftIcon from "@assets/icons/caret-left.svg"
import rightIcon from "@assets/icons/caret-right.svg";

const slidesData =[
	{ path: "*", img: slideImg1 },
  { path: "*", img: slideImg2 },
  { path: "*", img: slideImg3 },
  { path: "*", img: slideImg4 },
]

const Slider = () => {
	const [slideIndex, setSlideIndex]= useState(1)

	useEffect(()=>{
		// setInterval(fnction, delay) 依指定的時間間隔內重複執行
		const timer = setInterval(()=>{
			showSlides()
		},2000)

		// 清除定時器 避免不必要的函式調用
		return ()=>{
			clearInterval(timer)
		}
	},[slideIndex])

	function showSlides(n){
		// 自動播放
		if (n === undefined){
			setSlideIndex((prevIndex)=>{
				if (prevIndex >= slidesData.length) {
          return 1;
        } else {
          return prevIndex + 1;
        }
			})
		} else {
			// 手動播放
			if(n > slidesData.length){
				setSlideIndex(1)
			} else if (n < 1) {
				setSlideIndex(slidesData.length);
			} else{
				setSlideIndex(n)
			}
		}
	}

		// 點擊轉換上/下一張slide
		function plusSlides(n){
			showSlides(slideIndex + n)
		}

		// 當前slide
		function currentSlide(n){
			showSlides(n)
		}

  return (
    <section className={styles.sliderBlock}>
      <div className={styles.wrapper}>
        <div className={styles.slideTitle}>
          <h1>一日朋友</h1>
        </div>
        {slidesData.map((slide, index) => (
          <div key={index}
					className={`${styles.slide} ${index + 1 === slideIndex ? styles.slideActive : ""}`}>
						<Link to={slide.path}>
							<img src={slide.img} alt="img"/>
						</Link>
					</div>
        ))}

        <img
          src={leftIcon}
          alt="left"
          className={styles.prevBtn}
          onClick={() => plusSlides(-1)}
        />
        <img
          src={rightIcon}
          alt="right"
          className={styles.nextBtn}
          onClick={() => plusSlides(1)}
        />
      </div>
      <div className={styles.slideDots}>
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index + 1 === slideIndex ? styles.active : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
