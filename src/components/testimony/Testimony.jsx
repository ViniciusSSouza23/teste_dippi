import CarlosImage from "../../assets/imgs/testimony/Carlos_Eduardo.png";
import RenatoImage from "../../assets/imgs/testimony/Renato_Laureano.png";
import ArmandoImage from "../../assets/imgs/testimony/Armando.png";
import CardTestimony from "./cardTestimony/CardTestimony";

function Testimony() {
  const testimonials = [
    {
      text: "A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado.",
      name: "Carlos Eduardo Amaral",
      occupation: "CEO da Amaral Mídia",
      image: CarlosImage,
    },
    {
      text: "O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.",
      name: "Renato Laureano",
      occupation: "Fundador da Anellimn Store",
      image: RenatoImage,
    },
    {
      text: "Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%.",
      name: "Armando Girão",
      occupation: "Fundador da Orion E-commerce",
      image: ArmandoImage,
    },
  ];
  return (
    <section id="depoimentos">
      <div className="container py-5">
        <div className="text-center">
          <h1 className="display-4 mb-3 color-base">Depoimentos</h1>
          <h6 className="text-18px color-base">
            O suporte ao cliente é nossa primeira prioridade.
          </h6>
        </div>
        <div>
          <div className="d-flex justify-content-between pt-5 mt-lg-5">
            {testimonials.map((item) => (
              <CardTestimony key={item.name} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
