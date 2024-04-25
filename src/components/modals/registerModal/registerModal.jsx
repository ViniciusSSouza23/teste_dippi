import registerModalStyle from "./registerModal.module.css";
import CloseIcon from "../../../assets/imgs/close_icon.png";
import BgModal from "../../../assets/imgs/modal_register_bg.png";
import CheckIcon from "../../../assets/imgs/check.png";

function registerModal({ handleClose }) {
  return (
    <div className={registerModalStyle.registerModalContainer}>
      <img src={BgModal} alt="BG" className={registerModalStyle.image} />
      <div className="d-flex justify-content-end p-2">
        <button onClick={handleClose} className="btn">
          <img width="30" src={CloseIcon} alt="Close" />
        </button>
      </div>
      <div className={`${registerModalStyle.content} px-5`}>
        <div className="text-center">
          <img
            width="143"
            src={CheckIcon}
            alt="CheckIcon"
            className="img-fluid"
          />
          <h1 className="heading-1 text-center color-base mt-5">
            Finalize seu cadastro na plataforma e acesse seu e-mail para
            validação.
          </h1>
        </div>
        <div
          className="d-flex justify-content-center position-relative"
          style={{ zIndex: 1 }}
        >
          <button
            onClick={handleClose}
            className="btn btn-primarys hover-class mt-4 px-5"
          >
            Acessar plataforma
          </button>
        </div>
      </div>
    </div>
  );
}

export default registerModal;
