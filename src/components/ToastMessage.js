function ToastMessage({ show, message }) {
  if (!show) return null;

  return (
    <div className="position-fixed bottom-0 end-0 m-4 bg-pink text-white p-3 rounded shadow-lg z-50">
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;