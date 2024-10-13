// src/components/Header.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'; // pastikan ini menggunakan huruf kecil
import Container from "./Container";

const Header = () => {
    return (
      <>
        <Container class1='header-top-strip py-3'>
              <div className='row'>
                <div className='col-6'>
                  <p className='text-white mb-0'>
                    Free Shipping Over $100 & Free Returns
                  </p>
                </div>
                <div className='col-6'>
                  <p className='text-end text-white'>
                      Hotline: <a className='text-white' href='tel:+62 85282568462'>+62 85282568462</a>
                  </p>
                </div>
              </div>
        </Container>
        <Container class1='header-upper py-3'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Practice</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" 
                  className="form-control py-2" 
                  placeholder="Search Product Here...." 
                  aria-label="Search Product Here...." 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='f2-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links-d-align-items-center justify-content-beetween'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10'>
                    <img src='/images/compare.svg' alt='compare' />
                    <p className='mb-0'> 
                      compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10'>
                  <img src='/images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10'>
                  <img src='/images/user.svg' alt='user' />
                    <p className='mb-0'>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10'>
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-colummn gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 200</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='header-bottom py-3'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 ms-5 d-flex align-items-center" 
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                      <img src='images/menu.svg' alt='' /> 
                      <span className='ne-5 d-inline-block'>Shop Catagories</span>
                    </button>
                    <ul className="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link class="dropdown-item text-white" to="#">
                          Action
                          </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" to="#">
                        Another action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" to="#">
                        Something else here
                        </Link>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
  );
};

export default Header;