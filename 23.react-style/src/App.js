
import './App.css';
import AppCopy from './components/AppCopy.jsx';
import BasicCSS from './components/BasicCss';
import ModuleCSS from './components/ModuleCss.jsx';



function App() {
  return (
    <div className="App">
     <h1> react에 style 적용하기 </h1>
     {/* <BasicCSS/>
     <ModuleCSS/> */}
     <AppCopy/>
    </div>
  );
}

export default App;
