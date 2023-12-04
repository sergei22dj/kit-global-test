"use client";
import { toast } from "react-toastify";
import { ToastMessageProps } from "../types/types";
import { ToastMessage } from "@/ui/ToastMessage/ToastMessage";

export const showToast = (props: ToastMessageProps) => {
  toast(<ToastMessage {...props} />);
};
