import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import Zoom from "react-medium-image-zoom";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import 'react-medium-image-zoom/dist/styles.css';
import Container from "../components/Container";


const SingleProduct = () => {
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    const [orderedProduct, setOrderedProduct] = useState(true);

    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <Zoom>
                                        <img
                                            src="https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Product Image"
                                            width={400}
                                            height={500}
                                        />
                                    </Zoom>
                                </div>
                                <div className="other-product-images d-flex flex-wrap gap-15">
                                    <div>
                                        <img 
                                            src="https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" 
                                            className="img-fluid" 
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img 
                                            src="https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" 
                                            className="img-fluid" 
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img 
                                            src="https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" 
                                            className="img-fluid" 
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img 
                                            src="https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" 
                                            className="img-fluid" 
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Watch Bulk 10pack multi colored for students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">( 2 Reviews )</p>    
                                    </div>
                                    <a className="review-btn" href="#review">Write a Review</a>
                                </div>
                                <div className="py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type :</h3>
                                        <p className="product-data">Gfd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand :</h3>
                                        <p className="product-data">Gfd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category :</h3>
                                        <p className="product-data">Gfd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags :</h3>
                                        <p className="product-data">Gfd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availablity :</h3>
                                        <p className="product-data">Gfd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Size :</h3>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            S
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            M
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            L
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XL
                                        </span>
                                    </div>
                                    <div className="d-flex gap-10 flex-row my-2">
                                        <h3 className="product-heading">Color :</h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2">
                                        <h3 className="product-heading">Quantity :</h3>
                                        <div className="">
                                            <input 
                                                type="number" 
                                                name="" 
                                                min={1} 
                                                max={10} 
                                                className="form-control" 
                                                style={{ width: "70px"}} 
                                            />
                                        </div>
                                        <div className="nt-3 d-flex gap-30 align-items-center ms-5">
                                            <button className="button border-0" type="submit">Add to cart</button>
                                            <button className="button signup">Buy It Now</button>
                                        </div> 
                                    </div> 
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href="">
                                            <TiShoppingCart className="fs-5 me-2" />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href="">
                                            <FaRegHeart className="fs-5 me-2" />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">shipping and return</h3>
                                        <p className="product-data">
                                            Free shipping and return available on all orders! <br/>(' ')
                                            we shippingall os domestic orders within
                                            <b>5-1b business days</b> 
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">Product Link</h3>
                                        <a href="javascript : void(0):" onClick={() => {
                                            copyToClipboard(
                                                "https://images.unsplash.com/photo-1620226054624-5f49d1d66e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"  
                                            );
                                         }}
                                        >
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ndoifnosidnfggmkfsdaopkmgpmfadpoagmadgaf
                                ,mdlomodnsgnefraoignngi bn bnidngidsgiubweiBGI
                                WBgibrigbirbfgidigbWRBNIGBjiregwbrbwgdgfdgsgsd
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review" >Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 2 Reviews</p>        
                                        </div>
                                    </div>
                                    <div>
                                    {orderedProduct && (
                                        <div>
                                        <a className="text-dark text-decoration-underline" href=''>
                                            write a review
                                        </a>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="review-form py-4">
                                <h4 className="mb-2">Write a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15" >
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
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
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit review</button>
                                        </div> 
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ndn gfbgbdgjfdgridjngoidfngfdngnfdn gsdfngfdmnglk
                                            dgijoiestofhwezapihoifsdhgnbfdganokingfdbagjfdaggfd
                                            gopjerdijgdfjgdfjnkjfdkbgkjdabgkjadbfgfhgdzsjkjhgrrdfrhy
                                            fsddhgdrhdtfhdffhfdgdfgdfhgdfhggdfgdrfgdfgfdgfdfdg
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Producte</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />       
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;