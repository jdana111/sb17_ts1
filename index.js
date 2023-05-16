"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const App = () => react_1.default.createElement("div", null, "Hi");
const container = document.getElementById('app');
const root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(react_1.default.createElement(App, null));
