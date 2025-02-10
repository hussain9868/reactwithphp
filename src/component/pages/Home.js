import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      {/* Bootstrap Carousel Slider */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }}
            src={`${process.env.PUBLIC_URL}/images/1.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Website</h3>
            <p>Discover amazing services and projects with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }}
            src={`${process.env.PUBLIC_URL}/images/2.jpg`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Providing cutting-edge technology and services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }}
            src={`${process.env.PUBLIC_URL}/images/3.jpg`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Grow Your Business</h3>
            <p>Let's work together to achieve success.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Content Section */}
      <div className="container text-center py-5">
        <h2>Welcome to Our Home Page</h2>
        <p className="lead">
          We are dedicated to providing the best services in the industry. Our team of experts is here to help you achieve your goals.
        </p>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
