import cardTestimonyStyle from "./cardTestimony.module.css";
import QuoteImage from "../../../assets/imgs/testimony/quote.png";

function CardTestimony({ data }) {
  return (
    <div className={`${cardTestimonyStyle.customCard}  text-center`}>
      <div className={cardTestimonyStyle.header}>
        <img
          src={data.image}
          alt={data.name}
          className={`${cardTestimonyStyle.img}`}
        />
      </div>
      <div className={cardTestimonyStyle.body}>
        <img src={QuoteImage} alt="Quote png" className="img-fluid mb-4" />
        <p className={`mb-4 ${cardTestimonyStyle.mulishFont}`}> {data.text}</p>
        <h6 className="text-18px mb-1">{data.name}</h6>
        <p className="mb-o text-14px">{data.occupation}</p>
      </div>
    </div>
  );
}

export default CardTestimony;
