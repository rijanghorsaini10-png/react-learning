const Product = (props) => {
  return (
    <div>
      <h3>Product Information</h3>

      <p>Product Name: {props.productName}</p>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
      <p>Quantity: {props.quantity}</p>

      <hr />
    </div>
  );
};

export default Product;