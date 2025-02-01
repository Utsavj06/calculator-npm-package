import React from 'react';
import { createRoot } from 'react-dom/client';
import Mycalc from './Mycalc';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Mycalc />);