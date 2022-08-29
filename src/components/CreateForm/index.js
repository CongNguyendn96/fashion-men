import React, { useState } from "react";
import productApi from "../../apis/productApi";
import ButtonText from "../common/Button";
import InputText from "../common/InputText";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

function CreateForm(props) {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    image: "",
    quantity: 1,
  });

  const [errorValidate, setErrorValidate] = useState({});

  const navigate = useNavigate();

  const handleAddNew = async (event) => {
    event.preventDefault();

    // Check errorValidate
    const isError = handleValidation(product);

    if (!isError) {
      try {
        const response = await productApi.add(product);

        console.log("Data: ", response);
        // Check status for post api
        if (response.status === 201) {
          // Redirect to product list
          navigate("/products", { replace: true });
        }
      } catch (error) {
        console.log("", error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
    setErrorValidate({
      ...errorValidate,
      name: "",
    });
  };

  const handleValidation = (product) => {
    // Check null name
    if (!product.name) {
      errorValidate["name"] = "This field is required!";

      setErrorValidate({
        ...errorValidate,
        name: "This field is required!",
      });
      return true;
    }

    return false;
  };

  return (
    <form
      className="form"
      onSubmit={handleAddNew}
      noValidate
      autoComplete="off"
    >
      <InputText
        label="Name"
        name="name"
        value={product.name}
        onChangeField={handleInputChange}
      />
      {errorValidate.name && (
        <span style={{ color: "red" }}>{errorValidate["name"]}</span>
      )}
      <InputText
        label="Price"
        name="price"
        type="number"
        value={product.price}
        onChangeField={handleInputChange}
      />
      <InputText
        label="Image"
        name="image"
        value={product.image}
        onChangeField={handleInputChange}
      />
      <InputText
        label="Quantity"
        name="quantity"
        type="number"
        value={product.quantity}
        onChangeField={handleInputChange}
      />
      <ButtonText type="submit" text="Submit" />
    </form>
  );
}

export default CreateForm;
