import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Store from './Store.jsx'
// import Showlist from "./Showlist.jsx"
// import { ShowList2 } from "./Showlist2.jsx"
// import { RlDemo } from "./RlDemo.jsx"
import { Header } from "./Header.jsx"
import { Stamp } from "./Stamp.jsx"
import { Footer } from "./Footer.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <Store /> */}
    {/* <Showlist /> */}
    {/* <ShowList2 /> */}
    {/* <RlDemo /> */}
    <Stamp />
    <Footer />
  </StrictMode>,
)
