import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="button"
      aria-label="Close"
      aria-hidden="true"
      tabIndex="0"
    />
  );
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
