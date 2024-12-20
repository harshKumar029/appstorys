import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// Import SVG files
import allIcon from '../assets/icons/all.svg';
import electronicsIcon from '../assets/icons/electronics.svg';
import beautyIcon from '../assets/icons/beauty.png';
import kidsIcon from '../assets/icons/kids.png';
import giftingIcon from '../assets/icons/gift.svg';
import premiumIcon from '../assets/icons/premium.svg';
import Searchbar from '../components/Searchbar';
import FeatureProductCard from '../components/FeatureProductCard';

// import feature product
import philips from '../assets/img/featureimg/philips.webp';
import boat from '../assets/img/featureimg/boat.webp';
import boult from '../assets/img/featureimg/boult.webp';
import lifelong from '../assets/img/featureimg/lifelong.webp';
import ambrane from '../assets/img/featureimg/ambrane.webp';
import bombaysaving from '../assets/img/featureimg/bombaysaving.webp';
import wonderchef from '../assets/img/featureimg/wonderchef.webp';

// pipvideo
import philipsvideo from '../assets/pipvideo/philips.mp4';
import boAt from '../assets/pipvideo/boAt.mp4';
import Wonderchefvid from '../assets/pipvideo/Wonderchef.mp4';
import Boult from '../assets/pipvideo/Boult.mp4';
import Lifelong from '../assets/pipvideo/Lifelong.mp4';
import Ambrane from '../assets/pipvideo/Ambrane.mp4';
import Bombay from '../assets/pipvideo/Bombay.mp4';
import ProductCard from '../components/Productcard';

// product
import pigiontoster from '../assets/img/product/pigiontoster.webp';
import pigeon from '../assets/img/product/pigeon.webp';
import honeywell from '../assets/img/product/honeywell.webp';
import fitbolt from '../assets/img/product/fitbolt.webp';
import ambrain from '../assets/img/product/ambrain.webp';

import swissmakeup from '../assets/img/product/swissmakeup.png';
import swiss from '../assets/img/product/swiss.png';
import nivea from '../assets/img/product/nivea.png';
import lovebeauty from '../assets/img/product/lovebeauty.png';
import swisslustreeyeshadow from '../assets/img/product/swisslustreeyeshadow.png';
import BottomNavigationBar from '../components/BottomNavigationBar';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

    // Categories with associated SVG paths
    const categories = [
        { name: 'All', icon: allIcon },
        { name: 'Electronics', icon: electronicsIcon },
        { name: 'Beauty', icon: beautyIcon },
        { name: 'Kids', icon: kidsIcon },
        { name: 'Gifting', icon: giftingIcon },
        { name: 'Premium', icon: premiumIcon },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const products = [
        {
            name: 'Product 1',
            image: philips,  // Replace with actual image path
            video: philipsvideo,
        },
        {
            name: 'Product 2',
            image: boat,
            video: boAt,
        },
        {
            name: 'Product 3',
            image: boult,
            video: Boult,
        },
        {
            name: 'Product 4',
            image: lifelong,
            video: Lifelong,
        },
        {
            name: 'Product 5',
            image: ambrane,
            video: Ambrane,
        },
        {
            name: 'Product 6',
            image: bombaysaving,
            video: Bombay,
        },
        {
            name: 'Product 7',
            image: wonderchef,
            video: Wonderchefvid,
        },
        // Add more products as needed
    ];

    const electronicproducts = [
        {
            id: 1,
            name: "Pigeon Toster",
            price: "2000",
            image: pigiontoster,
        },
        {
            id: 2,
            name: "Pigeon",
            price: "1600",
            image: pigeon,
        },
        {
            id: 3,
            name: "Honeywell Air purifier",
            price: "4999",
            image: honeywell,
        },
        {
            id: 4,
            name: "fitbolt",
            price: "1999",
            image: fitbolt,
        },
        {
            id: 5,
            name: "Ambrane 20w Fast Charger",
            price: "999",
            image: ambrain,
        },
    ];

    const beautyproducts = [
        {
            id: 1,
            name: "swissmakeup",
            price: "2000",
            image: swissmakeup,
        },
        {
            id: 2,
            name: "swiss",
            price: "1600",
            image: swiss,
        },
        {
            id: 3,
            name: "nivea",
            price: "4999",
            image: nivea,
        },
        {
            id: 4,
            name: "Swiss Lustre Eye Shadow",
            price: "1999",
            image: swisslustreeyeshadow,
        },
        {
            id: 5,
            name: "lovebeauty",
            price: "999",
            image: lovebeauty,
        },
    ];

    return (
        // className='w-[95%] m-auto mt-5 mb-28 sm:my-5'
        <div >
            <div className="px-4 pt-4 sm:p-4 sm:bg-[#9cadca] bg-gradient-to-b from-[#F1C745] via-[#F1C745CC] to-[#F1C74570] sm:bg-none">
                <div className=' m-auto mb-7 sm:hidden block'>
                    <Searchbar />
                </div>
                {/* <h1 className="text-2xl font-bold mb-4 sm:flex  justify-start hidden  md:justify-center">Select Categories</h1> */}
                <div className="overflow-x-auto hide-scrollbar flex gap-4 sm:mb-6 px-4 md:px-0 mx-auto sm:mx-0">
                    <div className="flex gap-2 md:gap-4 lg:gap-10 justify-start md:justify-center w-full">
                        {categories.map((category) => (
                            <div key={category.name} className="flex flex-col items-center">
                                <button
                                    className={`flex flex-col items-center justify-center w-16 h-16  md:w-24 md:h-24 rounded-full transition-all duration-300 
            ${selectedCategory === category.name
                                            ? 'sm:bg-[#f9e9e3] text-black sm:border sm:border-[#feded3]'
                                            : 'sm:bg-[#e8e8e8] text-black'
                                        }`}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <img src={category.icon} alt={`${category.name} Icon`} className="w-8 h-8 md:w-10 md:h-10" />
                                    <span className="text-sm font-medium">{category.name}</span>
                                </button>
                                {/* HR line below the selected category */}
                                {selectedCategory === category.name && (
                                    <hr className="w-16 border-2 rounded-t-full border-pink-500 mt-1 block md:hidden" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-auto hide-scrollbar flex flex-row">
                {/* Map through products and render a card for each */}
                {products.map((product) => (
                    <FeatureProductCard key={product.name} product={product} />
                ))}
            </div>


            <div className="mt-6">
                <h2 className="text-xl font-semibold w-[94%] m-auto">
                    {selectedCategory != 'All' ? `Top Deal in: ${selectedCategory}` : `All Top Product`}
                </h2>
                <div className="mt-6 mb-28">
                    {selectedCategory === 'All' &&

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                            {electronicproducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    }
                    {selectedCategory === 'Electronics' &&

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                            {electronicproducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    }
                    {selectedCategory === 'Beauty' &&
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                            {beautyproducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    }
                    {selectedCategory === 'Kids' && <p>kids product is not added</p>}
                    {selectedCategory === 'Gifting' && <p>Gifts product is not added</p>}
                    {selectedCategory === 'Premium' && <p>premium items is not added</p>}
                </div>
            </div>
        </div>
    );
};

export default Home;
