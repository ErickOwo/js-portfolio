import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('main');
const root = createRoot(container);
import Template from '@templates/Template';
import "@styles/main.css"
import "@styles/vars.styl"

root.render(<Template/>);
