"use strict";
exports.__esModule = true;
var react_1 = require("react");
var signin_1 = require("./signin");
require("./App.css");
var customers_1 = require("./customers");
var signup_1 = require("./signup");
var dashboard_1 = require("./dashboard");
var react_router_dom_1 = require("react-router-dom");
var orders_1 = require("./orders");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(dashboard_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/Dashboard", element: react_1["default"].createElement(dashboard_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/Customers", element: react_1["default"].createElement(customers_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/Orders", element: react_1["default"].createElement(orders_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/signin", element: react_1["default"].createElement(signin_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/Signup", element: react_1["default"].createElement(signup_1["default"], null) }))))));
}
exports["default"] = App;
