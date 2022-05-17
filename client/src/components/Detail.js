import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from "axios";

export const Detail = () => {

  const {activeCustomer, setActiveCustomer, updateCustomerAction} = useContext(GlobalContext);
  const {id,firstName,lastName,email} = activeCustomer;

  const setParam = (param, value) => {
    setActiveCustomer({
      ...activeCustomer,
      [param]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    updateCustomerAction(activeCustomer)


    // const { name, message } = this.state;
    // await axios.post(
    //   "https://65vpg3icwg.execute-api.us-west-1.amazonaws.com/default/serverlessAppFunction",
    //   { key1: `${name}, ${message}` },
    //   { headers: {
    //   }}
    // );
  }

  return (

    <div className="col-6 align-items-center justify-content-center px-2">
        <h3 className="text-center">Details:</h3>
        <div>
          <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>

            <input type="hidden" name="id" value={id}/>
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setParam('firstName', e.target.value)} required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setParam('lastName', e.target.value)} required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setParam('email', e.target.value)} required />
                <div className="invalid-feedback">
                  Please enter your email.
                </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
  )
}