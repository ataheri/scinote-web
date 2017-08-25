import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";

import { flattenMessages } from "../../locales/utils";
import store from "../../app/store";
import messages from "../../locales/messages";

import MainNav from "./components/MainNav";

addLocaleData([...enLocaleData]);
const locale = "en-US";

const SettingsPage = () =>
  <div>
    <MainNav />
  </div>;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
      >
        <div>
          <BrowserRouter>
            <SettingsPage />
          </BrowserRouter>
        </div>
      </IntlProvider>
    </Provider>,
    document.getElementById("root")
  );
});