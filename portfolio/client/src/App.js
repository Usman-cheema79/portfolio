import './App.css';
import HeaderSection from './components/home/HeaderSection';
import Navbar from './components/Navbar';
import CursorShadow from './CursorShadow';
import MUI_example from './MUI_example';
import ThemeContextProvider from './ThemeContext';

function App() {
  return(
 <ThemeContextProvider>
   <CursorShadow/>
   <Navbar/>
   <HeaderSection/>
</ThemeContextProvider>
);
}

export default App;
