/* eslint-disable jsx-a11y/anchor-is-valid */
import { FacebookLogo, InstagramLogo, Phone } from 'phosphor-react'
import React from 'react'

function Footer() {
  return (
 <footer className="page-footer font-small blue pt-4 footer">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase brand">MODAMIX</h5>
                    <p className='brand'>be the first to know about our newest arrivals, <br /> special offers and store events near you. <br />HURRY UP <a href="">Sign Up Now</a></p>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase brand">Customer services </h5>
                    <ul className="list-unstyled">
                        <li><a className='brand text-decoration-none text-black' href="#!"> <Phone size={32} weight="fill" /> Contact us</a></li>
                        <li><a className='brand text-decoration-none text-black' href="#!">Website Terms & Conditions</a></li>
                        <li><a className='brand text-decoration-none text-black' href="#!">Returns & Refunds</a></li>
                    </ul>
                </div>
    
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="brand text-uppercase">follow us on</h5>
                    <ul className="brand list-unstyled">
                        <li><a className='brand text-decoration-none text-black' href="#!"><FacebookLogo size={32} weight="fill" /></a></li>
                        <li><a className='brand text-decoration-none text-black' href="#!"><InstagramLogo size={32} weight="fill" /></a></li>

                    </ul>
                </div>
            </div>
        </div>
    
        <div className="brand footer-copyright text-center py-3">
            <p>enjoy 25% off on Register</p> 
        </div>
    
    </footer>
    
    )
}

export default Footer