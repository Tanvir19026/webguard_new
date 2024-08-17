/* eslint-disable react/prop-types */


const Toast = ({ message, type }) => {
  const getTypeClass = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      default:
        return "";
    }
  };

  return (
    <div className={`toast toast-top toast-end`}>
      <div className={`alert ${getTypeClass()} shadow-lg`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
