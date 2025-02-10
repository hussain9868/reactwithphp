import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const services = [
    { id: 1, title: "Web Development", description: "High-quality web development services to boost your online presence.", image: "images/1.jpg" },
    { id: 2, title: "Graphic Design", description: "Creative graphic design solutions for your branding needs.", image: "images/2.jpg" },
    { id: 3, title: "Digital Marketing", description: "Effective digital marketing strategies to grow your business.", image: "images/3.jpg" },
    { id: 4, title: "SEO Optimization", description: "Enhance your website ranking with our SEO services.", image: "images/4.jpg" }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-3" key={service.id}>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/${service.image}`} 
                className="card-img-top" 
                style={{ height: "200px", objectFit: "cover" }} 
                alt={service.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
