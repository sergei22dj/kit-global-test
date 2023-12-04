"use client";

import { Auth0Provider } from "@auth0/auth0-react";
import { CONFIG } from "../../config";
import { Provider } from "react-redux";
import store from "../store/store";
import StyledComponentsRegistry from "@/lib/registry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>
        <Auth0Provider
          domain={CONFIG.AUTH0.domain}
          clientId={CONFIG.AUTH0.clientId}
          authorizationParams={{ redirect_uri: CONFIG.AUTH0.redirect }}
        >
          <Provider store={store}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Provider>
        </Auth0Provider>
      </>
    </>
  );
};
export const ToastContainerWrapper = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3500}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
    />
  );
};
