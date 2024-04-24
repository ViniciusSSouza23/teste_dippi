import FormGroup from "../FormGroup/FormGroup";
import { useState } from "react";

function RegisterComponent() {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
  });
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
    }
  }
  return (
    <section id="cadastro">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-4 color-testimonals ">Crie sua conta</h1>
            <h6 className="color-testimonals text-18px">
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
              id={"email"}
              placeholder={"E-mail"}
              label={"E-mail*"}
              type={"text"}
            />
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.phone}
              id={"phone"}
              placeholder={"Telefone"}
              label={"Telefone*"}
              type={"text"}
            />
            <FormGroup
              handleChange={handleChangeElement}
              value={payload.password}
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
