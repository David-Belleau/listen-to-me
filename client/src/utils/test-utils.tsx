import { render as renderReactTestingLib } from "@testing-library/react";
import { Providers } from "./Providers";

// all tests subscribe to updates from providers
export const render = (ui: React.ReactElement, { ...options } = {}) => {
  return renderReactTestingLib(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
