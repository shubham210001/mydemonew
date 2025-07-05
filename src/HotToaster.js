import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const HotToaster = (props) => {
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
        toast.loading(title, {
            position: "top-right",
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
    <div>
      <Toaster />
    </div>
  );
};

export default HotToaster;
