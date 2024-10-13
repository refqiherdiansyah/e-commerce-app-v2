import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsappSquare } from "react-icons/fa"; 
import newsletter from "../images/newsletter.png";

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-container">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-10 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className="nb-0 text-white">Sign Up for NewsLetter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" 
                                    className="form-control py-1" 
                                    placeholder="Your Email Address" 
                                    aria-label="Your Email Address" 
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                  Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Street : 288 Near Vill Newya. <br /> California, Village <br />
                                    PinCode : 131103 
                                </address>
                                <a 
                                href="tel:+62 85282568462" 
                                className="nt-3 d-block nb-1 text-white"
                                >
                                    +62 85282568462
                                </a>
                                <br />
                                <a
                                href="muhamadrefqy@gmail.com"
                                className="nt-2 d-block nb-0 text-white"
                                >
                                    muhamadrefqy@gmail.com
                                </a>
                                <br />
                                <div className="social_icons d-flex align-items-center gap-30 nt-4">
                                    <a  className="text-white" href="#"> 
                                        <FaLinkedin className="fs-4" />
                                    </a>
                                    <a className="text-white" href="#"> 
                                        <FaInstagram className="fs-4" />
                                    </a>
                                    <a className="text-white" href="#"> 
                                        <FaGithub className="fs-4" />
                                    </a>
                                    <a className="text-white" href="#"> 
                                        <FaWhatsappSquare className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-Link d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link to="/term-conditions" className="text-white py-2 mb-1">
                                    Teres & Conditions
                                </Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-Link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Link</h4>
                            <div className="footer-Link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptop</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablet</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; { new Date().getFullYear() }; Powered by AA Refqi 2024
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
