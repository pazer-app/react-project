import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HelmetProvider} from "react-helmet-async";
import './main.css'
import Router from "./Router/Router.tsx";
import State from "./Tool/State.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HelmetProvider>
          <State />
          <Router />
      </HelmetProvider>
  </StrictMode>,
)