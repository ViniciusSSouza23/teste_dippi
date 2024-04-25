import Carousel from "../Carousel/Carousel";
import CardPaymentsImg from "../../assets/imgs/solutions/pagamentos_card.png";
import CardCheckoutImg from "../../assets/imgs/solutions/checkout_card.png";
import CardTotalImg from "../../assets/imgs/solutions/total_controle.png";
import CardSell from "../../assets/imgs/solutions/vendas_antecipada.png";

function Solutions() {
  const dataCarousel = [
    {
      title: "Pagamentos com máxima aprovação",
      description:
        "Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.",
      linkCopy: "Cadastre-se",
      linkAnchor: "#cadastro",
      image: CardPaymentsImg,
    },
    {
      title: "Checkout de alta conversão",
      description:
        "Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.",
      linkCopy: "Saiba mais",
      linkAnchor: "#cadastro",
      image: CardCheckoutImg,
    },
    {
      title: "Controle total do seu fluxo financeiro",
      description:
        "Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!",
      linkCopy: "Clique e conheça",
      linkAnchor: "#cadastro",
      image: CardTotalImg,
    },
    {
      title: "Receba as vendas parceladas em até 2 dias úteis",
      description:
        "Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!",
      linkCopy: "Aproveite",
      linkAnchor: "#cadastro",
      image: CardSell,
    },
  ];
  return (
    <section id="solucoes" className="container">
      <Carousel items={dataCarousel} />
    </section>
  );
}

export default Solutions;
