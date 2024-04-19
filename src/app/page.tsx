'use client'

import '@coreui/coreui/dist/css/coreui.min.css'
import MainPage from "./pages/Main";
import { ToasterContextProvider } from "@/contexts/toast";

export default function Home() {

  return (
    <ToasterContextProvider>
      <MainPage />
    </ToasterContextProvider>
  )
}