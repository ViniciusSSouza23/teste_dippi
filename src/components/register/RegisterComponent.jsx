import FormGroup from "../FormGroup/FormGroup";
import { useState } from "react";
import Modal from "react-modal";
import RegisterModal from "../modals/registerModal/registerModal";

const defaultData = {
  name: "",
  email: "",
  phone: "",
  password: "",
};
function RegisterComponent() {
  const [payload, setPayload] = useState(defaultData);
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
  });
  const [openModal, setOpenModal] = useState(false);

  function handleChangeElement(id, e) {
    let _payload = { ...payload };
    let _error = { ...error };
    _payload[id] = e;
    _error[id] = false;
    setError(_error);
    setPayload(_payload);
  }

  function validatePayload() {
    for (let key in payload) {
      if (!payload[key]) {
        return key;
      }
    }
    return null;
  }

  function submit() {
    let errorKey = validatePayload();
    if (errorKey) {
      let _error = { ...error };
      _error[errorKey] = true;
      setError(_error);
      return;
    } else {
      setOpenModal(true);
      setPayload(defaultData);
    }
  }

  function handleModal() {
    setOpenModal(!openModal);
  }
  return (
    <section id="cadastro">
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "720px", // Defina a largura do modal conforme necessário
            height: "490px", // Defina a altura do modal conforme necessário
            margin: "auto", // Centralize o modal na tela
            border: "1px solid #ccc",
            borderRadius: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 999999,
            background: "#fbfbfb",
            padding: 0,
          },
        }}
        isOpen={openModal}
        onRequestClose={handleModal}
      >
        <RegisterModal handleClose={handleModal} />
      </Modal>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-4 color-base ">Crie sua conta</h1>
            <h6 className="color-base text-18px">
              Preencha o formulário ao lado para cadastrar-se no mpays.
            </h6>
          </div>
          <div className="col-lg-4">
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.name}
              error={error.name}
              id={"name"}
              placeholder={"Nome"}
              label={"Nome e sobrenome*"}
              type={"text"}
            />
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.email}
              error={error.email}
              id={"email"}
              placeholder={"E-mail"}
              label={"E-mail*"}
              type={"text"}
            />
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.phone}
              error={error.phone}
              id={"phone"}
              placeholder={"Telefone"}
              label={"Telefone*"}
              type={"text"}
            />
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.password}
              error={error.password}
              id={"password"}
              label={"Senha*"}
              type={"password"}
            />
            <button
              onClick={submit}
              className="btn btn-primarys hover-class mt-4"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterComponent;
