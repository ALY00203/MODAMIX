import React from 'react'
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
 <>
 <NavbarMain />
 <Outlet/>
 <Footer />
 </>
  )
}

export default Layout