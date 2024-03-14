
import React, { useState } from 'react';
import './Pro.css';
const initialProducts = [
    { id: 1, name: 'watch', category: 'Accessories', price: 2000, quantity: 5 },
    { id: 2, name: 'Jeans', category: 'Clothing', price: 1000, quantity: 30 },
    { id: 3, name: 'EyeLiner', category: 'Cosmetics', price: 500, quantity: 20 }
  ];
function Pro() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', quantity: '' });
  const [editProductId, setEditProductId] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleEdit = (productId) => {
    setEditProductId(productId);
    const productToEdit = products.find(product => product.id === productId);
    setNewProduct(productToEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.quantity) {
      alert('Please fill in all fields.');
      return;
    }
    if (editProductId) {
      const updatedProducts = products.map(product =>
        product.id === editProductId ? { ...product, ...newProduct } : product
      );
      setProducts(updatedProducts);
      setEditProductId(null);
    } else {
      const id = Math.max(...products.map(product => product.id)) + 1;
      setProducts([...products, { id, ...newProduct }]);
    }
    setNewProduct({ name: '', category: '', price: '', quantity: '' });
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>do you want to add product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleChange} />
        <button type="submit">{editProductId ? 'Update Product' : 'Add Product'}</button>
      </form>
    </div>
    
  );
}
export const getTotalProductCount = () => {
    return initialProducts.length;
  };
export default Pro;
