import React from "react";
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img 
                                    src="images/main-banner-1.jpg" 
                                    className="img-fluid rounded-3" 
                                    alt="main banner" 
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h1>IPad S13+ Pro.</h1>
                                    <p>From $999.00 or $41.62/no.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                {/* Small Banner 1 */}
                                <div className="small-banner position-relative" style={{ flex: '0 0 calc(50% - 10px)' }}>
                                    <img 
                                        src="images/catbanner-01.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Seller</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $999.00 <br /> $41.62/no.</p>
                                    </div>
                                </div>

                                {/* Small Banner 2 */}
                                <div className="small-banner position-relative" style={{ flex: '0 0 calc(50% - 10px)' }}>
                                    <img 
                                        src="images/catbanner-02.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 <br /> $41.62/no.</p>
                                    </div>
                                </div>

                                {/* Small Banner 3 */}
                                <div className="small-banner position-relative" style={{ flex: '0 0 calc(50% - 10px)' }}>
                                    <img 
                                        src="images/catbanner-03.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>SmartWatch7</h5>
                                        <p>From $999.00 <br /> $41.62/no.</p>
                                    </div>
                                </div>

                                {/* Small Banner 4 */}
                                <div className="small-banner position-relative" style={{ flex: '0 0 calc(50% - 10px)' }}>
                                    <img 
                                        src="images/catbanner-04.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>AirPods Max</h5>
                                        <p>From $999.00 <br /> $41.62/no.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                        <div className="col-12">
                            <div className="servies d-flex align-item-center justify-content-between">
                                {
                                    services.map((services, index) => (
                                        <div 
                                            className="d-flex align-items-center gap-15" 
                                            key={index}
                                        >
                                            <img 
                                                src={services.image} 
                                                alt="service" 
                                            />
                                            <div>
                                                <h6>{services.title}</h6>
                                                <p className="mb-0">{services.tagline}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6> Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="tv" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="headphone" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6> Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="tv" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" alt="headphone" />
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="featured-wrapper py-5 home-wrapper-2">                    <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Features Collection</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/Apple1.png" className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-light">Big Screen</h5>
                                <h6 className="text-light">Smart Watch Series 7</h6>
                                <p className="text-light">from $39for $16.62/no. for 24 no.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/Apple2.png" className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>from $39for $16.62/no. for 24 no.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/Apple9.png" className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>from $39for $16.62/no. for 24 no.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/Apple5.png" className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-light">Big Screen</h5>
                                <h6 className="text-light">Smart Watch Series 7</h6>
                                <p className="text-light"> from $39for $16.62/no. for 24 no.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />             
                </div>
            </Container>
            <Container class1="marquee-wrapper ">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper-card-wrapper">
                            <Marquee>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>    
                </div>
            </Container>
            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;