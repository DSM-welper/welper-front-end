import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const SuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
  });
};

export const WarningToast = (message) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: 5000,
  });
};
