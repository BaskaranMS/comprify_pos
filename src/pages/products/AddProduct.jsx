// import React, { useState } from "react";
// import { FaBoxOpen } from "react-icons/fa"; // Importing an icon
// import { useDispatch } from "react-redux";
// import { addProduct } from "../../redux/productSlice";
// import config from "../../config";
// import axios from "axios";

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState({
//     product_code: "",
//     product_name: "",
//     category_id: "",
//     unit: "",
//     mrp: "",
//     landing_cost: "",
//     net_cost: "",
//     basic_cost: "",
//     profit_percent: "",
//     selling_price: "",
//     stock_quantity: "",
//     supplier_id: "",
//     status: "active",
//   });

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token"); // ✅ Get token from localStorage

//     if (!token) {
//       console.error("No authentication token found.");
//       return;
//     }

//     try {
//       // ✅ Send product data with token in headers
//       const response = await axios.post(
//         `${config.serverApi}/pos/product`, // Change URL if needed
//         product,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       console.log("Product Added:", response.data);

//       dispatch(addProduct(response.data)); // ✅ Update Redux Store

//       // ✅ Reset the form after submission
//       setProduct({
//         product_code: "",
//         product_name: "",
//         category_id: "",
//         unit: "",
//         mrp: "",
//         landing_cost: "",
//         net_cost: "",
//         basic_cost: "",
//         profit_percent: "",
//         selling_price: "",
//         stock_quantity: "",
//         supplier_id: "",
//         status: "active",
//       });
//     } catch (error) {
//       console.error("Error adding product:", error.response?.data || error.message);
//     }
//   };


//   return (
//     <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen">

//       {/* Title with Icon */}
//       <div className="mb-4 flex items-center space-x-2 bg-gray-900 text-white mt-10 py-3 px-6 rounded-lg shadow-lg">
//         <FaBoxOpen className="text-3xl text-blue-400" />
//         <h1 className="text-2xl font-bold">Products & Inventory</h1>
//       </div>

//       {/* Form Container */}
//       <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full md:w-xl lg:w-2xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

//         {/* Scrollable Form Container */}
//         <div className="max-h-[500px] overflow-y-auto pr-2">
//           <form onSubmit={handleSubmit} className="space-y-4">
            
//             {/* Product Code */}
//             <div>
//               <label className="block mb-1">Product Code</label>
//               <input type="text" name="product_code" value={product.product_code} onChange={handleChange} 
//                 placeholder="Enter Product Code"
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//             </div>

//             {/* Product Name */}
//             <div>
//               <label className="block mb-1">Product Name</label>
//               <input type="text" name="product_name" value={product.product_name} onChange={handleChange} 
//                 placeholder="Enter Product Name"
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//             </div>

//             {/* Category ID */}
//             <div>
//               <label className="block mb-1">Category ID</label>
//               <input type="text" name="category_id" value={product.category_id} onChange={handleChange} 
//                 placeholder="Enter Category ID"
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//             </div>

//             {/* Unit Selection */}
//             <div>
//               <label className="block mb-1">Unit</label>
//               <select name="unit" value={product.unit} onChange={handleChange} 
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
//                 <option value="">Select Unit</option>
//                 <option value="kg">Kg</option>
//                 <option value="liters">Liters</option>
//                 <option value="pcs">Pcs</option>
//               </select>
//             </div>

//             {/* Numeric Fields with Placeholders */}
//             {[
//               { name: "mrp", label: "MRP", placeholder: "Enter Maximum Retail Price" },
//               { name: "landing_cost", label: "Landing Cost", placeholder: "Enter Landing Cost" },
//               { name: "net_cost", label: "Net Cost", placeholder: "Enter Net Cost" },
//               { name: "basic_cost", label: "Basic Cost", placeholder: "Enter Basic Cost" },
//               { name: "profit_percent", label: "Profit Percent", placeholder: "Enter Profit %" },
//               { name: "selling_price", label: "Selling Price", placeholder: "Enter Selling Price" },
//               { name: "stock_quantity", label: "Stock Quantity", placeholder: "Enter Stock Quantity" },
//             ].map((field) => (
//               <div key={field.name}>
//                 <label className="block mb-1">{field.label}</label>
//                 <input type="number" name={field.name} value={product[field.name]} onChange={handleChange} 
//                   placeholder={field.placeholder}
//                   className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//               </div>
//             ))}

//             {/* Supplier ID */}
//             <div>
//               <label className="block mb-1">Supplier ID</label>
//               <input type="text" name="supplier_id" value={product.supplier_id} onChange={handleChange} 
//                 placeholder="Enter Supplier ID"
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
//             </div>

//             {/* Status */}
//             <div>
//               <label className="block mb-1">Status</label>
//               <select name="status" value={product.status} onChange={handleChange} 
//                 className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="bg-blue-600 mt-3 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
//               Add Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import config from "../../config";
import axios from "axios";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    product_code: "",
    product_name: "",
    category_id: "",
    unit: "",
    mrp: "",
    landing_cost: "",
    net_cost: "",
    basic_cost: "",
    profit_percent: "",
    selling_price: "",
    stock_quantity: "",
    supplier_id: "",
    status: "active",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No authentication token found.");
      return;
    }

    try {
      const response = await axios.post(`${config.serverApi}/pos/product`, product, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Product Added:", response.data);
      dispatch(addProduct(response.data));

      // Reset form
      setProduct({
        product_code: "",
        product_name: "",
        category_id: "",
        unit: "",
        mrp: "",
        landing_cost: "",
        net_cost: "",
        basic_cost: "",
        profit_percent: "",
        selling_price: "",
        stock_quantity: "",
        supplier_id: "",
        status: "active",
      });
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md w-full h-full">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Product Fields */}
        {[
          { name: "product_code", label: "Product Code" },
          { name: "product_name", label: "Product Name" },
          { name: "category_id", label: "Category ID" },
          { name: "mrp", label: "MRP" },
          { name: "landing_cost", label: "Landing Cost" },
          { name: "net_cost", label: "Net Cost" },
          { name: "basic_cost", label: "Basic Cost" },
          { name: "profit_percent", label: "Profit Percent" },
          { name: "selling_price", label: "Selling Price" },
          { name: "stock_quantity", label: "Stock Quantity" },
          { name: "supplier_id", label: "Supplier ID" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block mb-1 text-sm">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={product[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-900 rounded"
              required
            />
          </div>
        ))}

        {/* Unit Selection */}
        <div>
          <label className="block mb-1 text-sm">Unit</label>
          <select name="unit" value={product.unit} onChange={handleChange} className="w-full p-2 border border-gray-600 bg-gray-900 rounded" required>
            <option value="">Select Unit</option>
            <option value="kg">Kg</option>
            <option value="liters">Liters</option>
            <option value="pcs">Pcs</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 text-sm">Status</label>
          <select name="status" value={product.status} onChange={handleChange} className="w-full p-2 border border-gray-600 bg-gray-900 rounded" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
