import React from "react";
import { createRoot } from 'react-dom/client';

type Salutation = {greeting: string, name: string}
function greet({ greeting, name }: Salutation): string {
  return `${greeting} ${name}`
}

greet({greeting: 'hello', name: 'Johnny'});

let helloworld: string = 'Blah'

const App = () => <div>Hi</div>

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);