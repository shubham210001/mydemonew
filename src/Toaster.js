import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Toaster = (props) => {
  const { show, title } = props;
  useEffect(() => {
    if (show) {
      toast(title, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [show, title]);

  return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default Toaster;
