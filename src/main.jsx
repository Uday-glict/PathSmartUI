import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GuideRunner from './components/layout/GuideRunner.jsx';
import AIHelperWidget from './components/layout/AIHelperWidget.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GuideRunner />
    {/* <AIHelperWidget /> */}
  </StrictMode>,
)
