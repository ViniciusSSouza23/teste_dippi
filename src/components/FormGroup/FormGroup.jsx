import FormGroupStyle from "./FormGroupStyle.module.css";
import HiddeIcon from "../../assets/imgs/hidde_icon.png";
import IconSelect from "../../assets/imgs/icon-select.png";
import { useState } from "react";
function FormGroup({
  handleChange,
  error,
  id,
  type,
  label,
  placeholder,
  value,
  options,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function changeVisibility() {
    setShowPassword(!showPassword);
  }
  return (
    <>
      {type === "text" && (
        <div className="d-flex flex-column mb-4" id={id}>
          <label className={`text-12px mb-1 ${error ? "error" : "color-gray"}`}>
            {label}
          </label>
          <input
            className={FormGroupStyle.inputText}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(id, e.target.value)}
          />
        </div>
      )}

      {type === "password" && (
        <div id={id} className="d-flex flex-column">
          <label className={`text-12px mb-1 ${error ? "error" : "color-gray"}`}>
            {label}
          </label>
          <div className="position-relative">
            <input
              className={FormGroupStyle.inputText}
              type={showPassword ? "text" : "password"}
              placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
              value={value}
              onChange={(e) => handleChange(id, e.target.value)}
            />
            <button
              onClick={changeVisibility}
              className={`btn ${FormGroupStyle.btnHidden}`}
            >
              <img src={HiddeIcon} alt="Hidden password" />
            </button>
          </div>
        </div>
      )}

      {type == "select" && (
        <div id={id} className="d-flex flex-column">
          <label className={`text-12px mb-1 ${error ? "error" : "color-gray"}`}>
            {label}
          </label>
          <div className="position-relative">
            <select
              className={FormGroupStyle.select}
              value={value}
              onChange={(e) => handleChange(id, e.target.value)}
            >
              <option value={""}>Selecione...</option>
              {options.map((op) => (
                <option key={op.name} value={op.value}>
                  {op.name}
                </option>
              ))}
            </select>
            <img
              src={IconSelect}
              alt="Icone"
              className={FormGroupStyle.iconSelect}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FormGroup;
