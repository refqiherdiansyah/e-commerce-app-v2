import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import { FaHome,FaInfo } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import Container from "../components/Container";


const Contact = () => {
    return (
        <>
            <Meta title={'Contact Us'} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7903.6537924853565!2d112.59482976114505!3d-7.913144130190744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788100b37feec1%3A0xd211e612e06b94b2!2sKos%20putra%20yuan!5e0!3m2!1sid!2sid!4v1728481592965!5m2!1sid!2sid" 
                        width="600" 
                        height="450" 
                        className="border-0 w-100" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                        <div className="col-12 nt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h1 className="contact-title mb-4">Contact</h1>
                                    <form action="" className="d-flex flex-column gap-15" >
                                        <div>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Name"   
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Email"   
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Mobile Number" 
                                            />
                                        </div>
                                        <div>
                                            <textarea 
                                                name="" 
                                                id="" 
                                                className="w-100 form-control" 
                                                cols="30" 
                                                rows="4"
                                                placeholder="Comment"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button className="button border-0">Submit</button>
                                        </div> 
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get In touch with Us</h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <FaHome className="fs-5" />
                                                <address>
                                                    mno.290 , near village , moderate, senopaty
                                                </address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <MdAddCall className="fs-5" />
                                                <a href="tel:+91 43859725523">+91 43859725523</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <MdMarkEmailUnread className="fs-5" />
                                                <a href="E-mail:muhamadrefqi@gmail.com">muhamadrefqi@gmail.com</a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <FaInfo className="fs-5" />
                                                <p className="mb-0">Monday 10 AM - Friday 6 AM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;