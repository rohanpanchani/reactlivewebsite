import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`
    My Name is ${data.fullname}. 
    Email Address is ${data.email}. 
    My Address is ${data.address} or ${data.address2}.
    My city and ZipCoad is ${data.city} , ${data.zip} `);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="row g-3" onSubmit={formSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputText4" className="form-label">
                  Name
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="inputText4"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="address"
                  value={data.address}
                  onChange={InputEvent}
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  name="address2"
                  value={data.address2}
                  onChange={InputEvent}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  value={data.city}
                  onChange={InputEvent}
                />
              </div>

              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="zip"
                  value={data.zip}
                  onChange={InputEvent}
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                    required
                  >
                    Check me out
                  </label>
                </div>
              </div>
              {/* <div class="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  <Link activeClassName="active" to="/products">
                    Sign In
                  </Link>
                </button>
              </div> */}
              <div className="col-12">
                <Link
                  activeClassName="active"
                  to="/products"
                  className="btn btn-outline-primary"
                >
                  Sign In
                </Link>
              </div>
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
