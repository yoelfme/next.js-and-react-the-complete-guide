function Backdrop({ onCancel: cancelHandler }) {
  return <div className="backdrop" onClick={cancelHandler} />;
}

export default Backdrop;
