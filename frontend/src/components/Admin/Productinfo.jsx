import React, { useState } from 'react';
import {
    FaFileAlt,
    FaFileImage,
    FaTrashAlt,
    FaEdit,
    FaChevronDown,
} from 'react-icons/fa';
import Fb from '../../images/facebook.png';
import Dollar from '../../images/dollar.png';
import File from '../../images/file.png';
import Media from '../../images/media.png';
import Trash from '../../images/trash.png';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [weight, setWeight] = useState(2);
    const [category, setCategory] = useState('');
    const [color, setColor] = useState(3);
    const [brand, setBrand] = useState(''); 
    const [cupSize, setCupSize] = useState(''); 
    const [size, setSize] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleSave = () => {
        console.log('Product saved:', { productName, weight, category, color });
    };

    const handleDelete = () => {
        if (confirmDelete) {
            console.log('Product deleted');
        } else {
            alert('Please confirm deletion.');
        }
    };

    return (
        <>
     <style>
                {`
                @media (max-width: 830px) {
                        .side {
                            display: none;
                        }
                         .wide{
                         width: 100%;
                        }
                    }

                    @media (max-width: 600px){
                    .col{
                    display:flex;
                    flex-direction:column;
                    }
                    }
                    @media (max-width: 460px){
                    .center{
                    display:flex;
                    justify-content: center;
                    }
                    .column{
                    flex-direction: column;
                    align-items: center;
                    }
                    }
                     

                `}
            </style>

        <div className="flex p-10 rounded-[40px] bg-white">
            {/* Sidebar */}
            <div className="w-1/4 side bg-white rounded-lg p-4 mr-8 border font-ibm-plex border-gray-300 h-auto max-h-64 overflow-y-auto">
                <ul className="space-y-4">
                    <li className="text-pink-600 font-semibold flex items-center space-x-2">
                    <img src={File} alt="" className='w-4 h-4'/>
                        <span>Product Information</span>
                    </li>
                    <li className="text-[rgba(5,15,36,1)] flex items-center space-x-2">
                    <img src={Media} alt="" className='w-4 h-4'/>
                        <span>Media files</span>
                    </li>
                    <li className="text-[rgba(5,15,36,1)] flex items-center space-x-2">
                        <img src={Fb} alt="" className='w-4 h-4'/>
                        <span>Weight</span>
                    </li>
                    <li className="text-[rgba(5,15,36,1)] flex items-center space-x-2">
                        <img src={Dollar} alt="" className='w-4 h-4' />
                        <span>Pricing</span>
                    </li>
                    <li className="text-[rgba(5,15,36,1)] flex items-center space-x-2">
                    <img src={Trash} alt="" className='w-4 h-4'/>
                        <span>Delete product</span>
                    </li>
                </ul>
            </div>

            {/* Main Form Area */}
            <div className="w-3/4 space-y-6 wide">
                {/* Product Description */}
                <div className="bg-white p-6 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold font-ibm-plex flex items-center space-x-2">
                        <span>Product Description</span>
                        <button className="text-gray-500 hover:text-pink-500">
                            <FaEdit /> {/* Edit icon */}
                        </button>
                    </h2>
                    <p className="text-gray-600 mt-2 font-poppins">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to.
                    </p>
                </div>

                {/* Product Information Form */}
                <div className="bg-white p-6 rounded-lg border  border-gray-300">
                    <h2 className="text-lg font-semibold mb-4 font-ibm-plex">Product Information</h2>

                    {/* Grid Layout for Form Fields */}
                    <div className="grid grid-cols-2 gap-4 col">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 mb-5 font-poppins">Name</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Weight Input */}
                        <div>
                            <label className="block text-gray-700 mb-5 font-poppins">Weight</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-700 mb-5 font-poppins">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="Clothing">Clothing</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Furniture">Furniture</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>

                        {/* Color Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-700 mb-5 font-poppins">Color</label>
                            <select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value={1}>Red</option>
                                <option value={2}>Blue</option>
                                <option value={3}>Green</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6 center">
                        <button
                            onClick={handleSave}
                            className="bg-[rgba(236,0,140,1)] font-poppins text-white w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Save
                        </button>
                    </div>
                </div>

                {/* Media Files Section (Separate Box) */}
                <div className="bg-white p-6 rounded-lg border border-gray-300">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold font-ibm-plex">Media Files</h2>
                        {/* Upload More Files Link */}
                        <p className="text-[rgba(236,0,140,1)] cursor-pointer">Upload more files</p>
                    </div>
                    <div className="space-y-4">
                        {/* File 1 */}
                        <div className="flex items-center justify-between rounded-lg p-4 border border-gray-300">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/path-to-image.png" // Replace with the actual image path
                                    alt=""
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="text-[rgba(5,15,36,1)] font-poppins text-md">Minimal sofa.PNG</p>
                                    <p className="text-gray-500 text-sm">45 Kb</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="text-[rgba(236,0,140,1)]">
                                    <FaEdit />
                                </button>
                                <button className="text-[rgba(236,0,140,1)]">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>

                        {/* File 2 */}
                        <div className="flex items-center justify-between rounded-lg p-4 border border-gray-300">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/path-to-image.jpg" // Replace with the actual image path
                                    alt=""
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="text-[rgba(5,15,36,1)] text-md font-poppins">Minimal sofa.jpg</p>
                                    <p className="text-gray-500 text-sm">35 Kb</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="text-pink-500">
                                    <FaEdit />
                                </button>
                                <button className="text-pink-500">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6 center">
                        <button
                            onClick={handleSave}
                            className="bg-[rgba(236,0,140,1)] font-poppins text-white w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4 font-ibm-plex">Weight</h2>

                    {/* Grid Layout for Form Fields */}
                    <div className="grid grid-cols-2 gap-4 col">
                        {/* Name Input */}
                        <div className='relative'>
                            <label className="block text-gray-700 mb-5 font-poppins">Brand SIze </label>
                            <select
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="30">30</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>

                        {/* Weight Input */}
                        <div className='relative'>
                            <label className="block text-gray-700 mb-5 font-poppins">Cup size</label>
                            <select
                                value={cupSize}
                                onChange={(e) => setCupSize(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-700 mb-5 font-poppins">Size</label>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>

                        {/* Color Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-700 mb-5 font-poppins">Color</label>
                            <select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value={1}>Red</option>
                                <option value={2}>Blue</option>
                                <option value={3}>Green</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6 center">
                        <button
                            onClick={handleSave}
                            className="bg-[rgba(236,0,140,1)] font-poppins text-white w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4 font-ibm-plex">Pricing</h2>

                    {/* Grid Layout for Form Fields */}
                    <div className="grid grid-cols-2 gap-4 col">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 mb-5 font-poppins">Price</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Weight Input */}
                        <div className='relative'>
                            <label className="block text-gray-700 mb-5 font-poppins">Delivery Charges</label>
                            <select
                                value={cupSize}
                                onChange={(e) => setCupSize(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="100">100</option>
                                <option value="150">200</option>
                                <option value="200">150</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-gray-700 mb-5 font-poppins">Available Discount</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600"
                            />
                        </div>

                        {/* Color Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-700 mb-5 font-poppins">Taxr</label>
                            <select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full px-7 py-4 border rounded-[40px] bg-gray-100 text-gray-600 appearance-none"
                            >
                                <option value="100">100</option>
                                <option value="150">150</option>
                                <option value="200">200</option>
                            </select>
                            {/* Downward Arrow */}
                            <div className="absolute inset-y-0 right-4 top-10 flex items-center pointer-events-none">
                                <FaChevronDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6 center">
                        <button
                            onClick={handleSave}
                            className="bg-[rgba(236,0,140,1)] font-poppins text-white w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
                {/* Delete Product Section */}
                <div className="bg-white p-6 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4 font-ibm-plex">Delete Product</h2>
                    <p className="text-gray-600 font-poppins">
                        When you delete your product, you lose access to their previous records, and we permanently delete your product data. You can cancel the deletion for 14 days.
                    </p>
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            checked={confirmDelete}
                            onChange={() => setConfirmDelete(!confirmDelete)}
                            className="mr-2"
                        />
                        <label className="text-gray-600 font-poppins">Confirm that I want to delete my product</label>
                    </div>
                    <div className="flex justify-end mt-6 gap-5 column">
                    <button
                            onClick={handleDelete}
                            className=" text-pink-600 border font-poppins border-pink-600 w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Learn more
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-[rgba(236,0,140,1)] font-poppins text-white w-[150px] px-6 py-2 rounded-[50px] shadow-md hover:bg-pink-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>

            </div>
            </div>
            </>
            );
};

            export default ProductForm;
