import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UseMemo from './components/UseMemo';
import UseMemoObj from './components/UseMemoObj';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <App />
 <UseMemo/>
 <UseMemoObj/>
</>
);


