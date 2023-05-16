import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => <div>Hi</div>

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);