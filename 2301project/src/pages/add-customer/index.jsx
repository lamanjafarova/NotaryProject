import React from "react";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss"
 const AddCustomerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const AddCustomer = () => {
  const navigate = useNavigate()
  return <div id="add-customer">
    <h1 className="add_customer">Add New Customer</h1>
    <div className="container">
    <Formik
       initialValues={{
         name: '',
         title: '',
         description: '',
         imgUrl: ""
       }}
       validationSchema={AddCustomerSchema}
       onSubmit={values => {
         axios.post("http://localhost:8000/customer", values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form className="form">
          <div className="input"> <Field name="name" placeholder="Name" /></div>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
         <div className="input">  <Field name="title" placeholder="Title" /></div>
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
         <div className="input">  <Field name="description" placeholder="Description"/></div>
         <div className="input">  <Field name="imgUrl" placeholder="Image Url"/></div>
           <button type="submit" className="formikBtn">Submit</button>
         </Form>
       )}
     </Formik>
    </div>




  </div>;
};

export default AddCustomer;
