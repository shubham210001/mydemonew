// import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Toaster = (props) => {
  const {
    show,
    title,
    toastType,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
    rtl,
    closeButton,
  } = props;
  
  useEffect(() => {
    if (show) {
      if (toastType === "success") {
        toast.success(title, {
          onClose: () => {
            closeButton();
            console.log("Toast has been closed!");
            // Perform any action here after the toast closes
          },
        });
      } else if (toastType === "error") {
        toast.error(title, {
          onClose: () => {
            closeButton();
            console.log("Toast has been closed!");
            // Perform any action here after the toast closes
          },
        });
      } else if (toastType === "info") {
        toast.info(title, {
          onClose: () => {
            closeButton();
            console.log("Toast has been closed!");
            // Perform any action here after the toast closes
          },
        });
      } else if (toastType === "warning") {
        toast.warn(title, {
          onClose: () => {
            closeButton();
            console.log("Toast has been closed!");
            // Perform any action here after the toast closes
          },
        });
      } else {
        toast(title, {
          onClose: () => {
            closeButton();
            console.log("Toast has been closed!");
            // Perform any action here after the toast closes
          },
        });
      }
    }
  }, [
    autoClose,
    closeOnClick,
    draggable,
    hideProgressBar,
    pauseOnHover,
    position,
    progress,
    show,
    title,
    toastType,
    theme,
    closeButton,
  ]);

  return (
    <ToastContainer
      position={"top-right"}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={rtl || false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme || "dark"}
    />
  );
};

export default Toaster;
