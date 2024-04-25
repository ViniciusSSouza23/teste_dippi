import cardStyle from "./cardTaxSimulator.module.css";
import FormGroup from "../../FormGroup/FormGroup";
import { useState, useEffect } from "react";
import { calculateTax, calculateTaxTenDays } from "../../../utils/helpers";

const options = [
  {
    name: "Débito",
    value: "debit",
  },
  {
    name: "Crédito à vista",
    value: "credit",
  },
  {
    name: "Crédito parcelado - 2x",
    value: "2x",
  },
  {
    name: "Crédito parcelado - 3x",
    value: "3x",
  },
  {
    name: "Crédito parcelado - 4x",
    value: "4x",
  },
  {
    name: "Crédito parcelado - 5x",
    value: "5x",
  },
  {
    name: "Crédito parcelado - 6x",
    value: "6x",
  },
  {
    name: "Crédito parcelado - 7x",
    value: "7x",
  },
  {
    name: "Crédito parcelado - 8x",
    value: "8x",
  },
  {
    name: "Crédito parcelado - 9x",
    value: "9x",
  },
  {
    name: "Crédito parcelado - 10x",
    value: "10x",
  },
  {
    name: "Crédito parcelado - 11x",
    value: "11x",
  },
  {
    name: "Crédito parcelado - 12x",
    value: "12x",
  },
];

function CardTaxSimulator() {
  const [tenDays, setTenDays] = useState(949.7);
  const [thirdDays, setThirddays] = useState(959.7);
  const [formData, setFormData] = useState({
    money: 1000,
    paymentWays: "credit",
  });
  function handleChanges(type, value) {
    let _data = { ...formData };
    _data[type] = value;
    setFormData(_data);
  }

  function sendCredit() {
    let results = 0;
    switch (formData.paymentWays) {
      case "debit":
        results = calculateTax("debit", parseFloat(formData.money));
        setThirddays(results);
        break;
      case "credit":
        results = calculateTax("credit", parseFloat(formData.money));
        setThirddays(results);
        break;
      case "2x" || "3x" || "4x" || "5x" || "6x":
        results = calculateTax("credit_6x", formData.money);
        setThirddays(results);
        break;
      default:
        results = calculateTax("credit_12x", formData.money);
        setThirddays(results);
    }
  }

  function sendInstallment() {
    let results = 0;
    switch (formData.paymentWays) {
      case "credit":
        results = calculateTaxTenDays(3, thirdDays);
        setTenDays(results);
        break;
      case "2x":
        results = calculateTaxTenDays(7, thirdDays);
        setTenDays(results);
        break;
      case "3x":
        results = calculateTaxTenDays(10.5, thirdDays);
        setTenDays(results);
        break;
      case "4x":
        results = calculateTaxTenDays(14, thirdDays);
        setTenDays(results);
        break;
      case "5x":
        results = calculateTaxTenDays(17.5, thirdDays);
        setTenDays(results);
        break;
      case "6x":
        results = calculateTaxTenDays(21, thirdDays);
        setTenDays(results);
        break;
      case "7x":
        results = calculateTaxTenDays(24.5, thirdDays);
        setTenDays(results);
        break;
      case "8x":
        results = calculateTaxTenDays(28, thirdDays);
        setTenDays(results);
        break;
      case "9x":
        results = calculateTaxTenDays(31.5, thirdDays);
        setTenDays(results);
        break;
      case "10x":
        results = calculateTaxTenDays(34.5, thirdDays);
        setTenDays(results);
        break;
      case "11x":
        results = calculateTaxTenDays(38, thirdDays);
        setTenDays(results);
        break;
      case "12x":
        results = calculateTaxTenDays(41.5, thirdDays);
        setTenDays(results);
        break;
      default:
        results = calculateTaxTenDays(3, thirdDays);
        setTenDays(results);
    }
  }

  useEffect(() => {
    if (parseFloat(formData.money) > 0) {
      sendCredit();
      sendInstallment();
    }
  }, [formData.money, formData.paymentWays]);
  return (
    <div className={cardStyle.customCardContainer}>
      <div className="row color-base">
        <div className="col-lg-7">
          <FormGroup
            handleChange={handleChanges}
            value={formData.money}
            id={"money"}
            label={"Valor"}
            placeholder={"R$ 1.000,00 "}
            type={"text"}
          />
          <FormGroup
            handleChange={handleChanges}
            value={formData.paymentWays}
            id={"paymentWays"}
            label={"Forma de pagamento"}
            type={"select"}
            options={options}
          />
        </div>
        <div className="col-lg-5 color-base">
          <h4 className="heading-4 mb-4">VOCÊ RECEBE:</h4>
          <div className="row pe-5">
            <div className="col-6">
              <p className="mb-0 text-12px">NA HORA</p>
            </div>
            <div className="col-6 mb-3">
              <p className="mb-0 text-12px">Não disponível</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-12px">EM 10 DIAS</p>
            </div>
            <div className="col-6 mb-3">
              <p className="mb-0 text-12px">R$ {tenDays}</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-12px">EM 30 DIAS</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-12px">R$ {thirdDays}</p>
            </div>
            <div className="col-12 mt-4">
              <p className="mb-0 text-12px">
                Todas as simulações usam as taxas iniciais informadas no site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTaxSimulator;
