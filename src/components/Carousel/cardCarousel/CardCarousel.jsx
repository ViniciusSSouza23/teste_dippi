import cardCarouselStyle from "./CardCarousel.module.css";

function CardCarousel({ data }) {
  return (
    <div className={cardCarouselStyle.customCardContainer}>
      <div className={cardCarouselStyle.customCard}>
        <div className="row px-5 pt-5">
          <div className="col-lg-7 color-base pe-4 pt-4">
            <h1 className="heading-1 mb-5">{data.title}</h1>
            <h6 className="text-18px mb-5">{data.description}</h6>
            <a
              className={`${cardCarouselStyle.link} hover-class`}
              href={data.linkAnchor}
            >
              {data.linkCopy}
            </a>
          </div>
        </div>
        <img
          className={`${cardCarouselStyle.image} img-fluid`}
          src={data.image}
          alt={data.title}
        />
      </div>
    </div>
  );
}

export default CardCarousel;
