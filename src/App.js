import React from "react";
import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Blogs from "./components/Blogs";
import BookDetail from "./components/bookDetail";
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import NewBook from "./components/books/newBook";
import PrimarySearchAppBar from "./components/appBar";
import Cart from "./components/cart/cart";
import Stripe from "./components/stripe/stripe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateBook from "./components/books/updateBook";
import AdminDashboard from "./components/adminTable/adminDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <PrimarySearchAppBar />

        <Switch>
          <Route path="/admin-dashboard" component={AdminDashboard} exact />
          <Route path="/books/update/:id" component={UpdateBook} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/newBook" component={NewBook} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/bookDetail/:id" component={BookDetail} exact />
          <Route path="/" component={Blogs} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
