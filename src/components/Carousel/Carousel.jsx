import Slider from "react-slick";
import CardCarousel from "./cardCarousel/CardCarousel";
import CarouselStyle from "./Carousel.module.css";
import ChevronD from "../../assets/imgs/solutions/chevron_d.png";
import ChevronE from "../../assets/imgs/solutions/chevron_e.png";
function Carousel({ items }) {
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={ChevronE} alt="chevron" width="15px" />
      </div>
    );
  }
  function NextArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",

          zIndex: 999,
        }}
        onClick={onClick}
      >
        <img width="15px" src={ChevronD} alt="chevron" />
      </div>
    );
  }

  let settings = {
    className: "center",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-150px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={CarouselStyle.sliderContainer}>
      <Slider {...settings}>
        {items.map((item) => (
          <CardCarousel data={item} key={item.title} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
