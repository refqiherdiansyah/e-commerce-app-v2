import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";  // Correct image import
import appleWatch from "../images/Apple8.png";  // Assuming Apple8.png is the image you're using for the second watch image
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props; 
    let location = useLocation();

    return (
        <>
            <div 
                className={`${location.pathname === "/store" ? `gr-${grid}` : 'col-3'}`}
            >
                <Link to=":id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product image" />
                        <img src={appleWatch} className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone buil 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            at the time we need another boy here waht should i do so ami am 
                            fuvk klike ahe djdjniiudsuhewtu nvndonvfgdslgmsdniofgjdsignspdsk
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="add to cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div 
                className={`${location.pathname === "/store" ? `gr-${grid}` : 'col-3'}`}
            >
                <Link to=":id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product image" />
                        <img src={appleWatch} className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone buil 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            at the time we need another boy here waht should i do so ami am 
                            fuvk klike ahe djdjniiudsuhewtu nvndonvfgdslgmsdniofgjdsignspdsk
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <butoon className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </butoon>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="add to cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
