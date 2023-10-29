import React from "react";

import type { RootState } from "@src/store/redux";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "@src/store/alert/alertSlice";

export default function HideNotification() {
  const notification = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // ? Hide The Notification Toast
    if (notification.show) {
      const hideAlertAfterFiveSeconds = setTimeout(() => {
        dispatch(showAlert({ show: false, type: null, msg: null }));
      }, 5000);

      return () => {
        clearTimeout(hideAlertAfterFiveSeconds);
      };
    }
  }, [notification.show, dispatch]);

  return false;
}
