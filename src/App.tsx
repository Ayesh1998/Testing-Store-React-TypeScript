import React from "react";
import "./App.css";
import HeaderOne from "./components/headerone/headerone-component";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HeaderTwo from "./components/headertwo/headertwo-component";
import HeaderThree from "./components/headerthree/headerthree-component";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Aboutus from "./pages/aboutus/aboutus";
import Faq from "./pages/faq/faq-page";
import Pricing from "./pages/pricing/pricing-page";
import ContactUs from "./pages/contactus/contactus-page";
import Footer from "./components/footer/footer-component";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderOne />
        <HeaderTwo />
        <HeaderThree />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contactus" component={ContactUs} />

          <Redirect to="/" />
        </Switch>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
