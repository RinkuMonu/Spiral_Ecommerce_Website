// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Sliders } from 'lucide-react';
// import ProductCard from '../components/products/ProductCard';
// import { products } from '../data/products';

// export default function CategoryPage() {
//   const { category } = useParams();
//   const [priceRange, setPriceRange] = React.useState([0, 500000]);
//   const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
//   const [sortBy, setSortBy] = React.useState('newest');
//   const [showFilters, setShowFilters] = React.useState(false);

//   const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'Bose'];

//   const filteredProducts = products
//     .filter(product => 
//       (!category || category === 'all-categories' || product.category.toLowerCase() === category) &&
//       product.price >= priceRange[0] &&
//       product.price <= priceRange[1] &&
//       (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price-low':
//           return a.price - b.price;
//         case 'price-high':
//           return b.price - a.price;
//         case 'oldest':
//           return new Date(a.date).getTime() - new Date(b.date).getTime();
//         default: // newest
//           return new Date(b.date).getTime() - new Date(a.date).getTime();
//       }
//     });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold capitalize">
//           {category?.replace('-', ' ') || 'All Products'}
//         </h1>
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="lg:hidden flex items-center space-x-2 text-gray-600"
//         >
//           <Sliders className="h-5 w-5" />
//           <span>Filters</span>
//         </button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div className={`lg:w-64 space-y-6 ₹{showFilters ? 'block' : 'hidden lg:block'}`}>
//           {/* Price Range */}
//           {/* <div>
//             <h3 className="font-semibold mb-4">Price Range</h3>
//             <div className="space-y-2">
//               <input
//                 type="range"
//                 min="0"
//                 max="2000"
//                 value={priceRange[1]}
//                 onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                 className="w-full"
//               />
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>₹{priceRange[0]}</span>
//                 <span>₹{priceRange[1]}</span>
//               </div>
//             </div>
//           </div> */}

//           {/* Brands
//           <div>
//             <h3 className="font-semibold mb-4">Brands</h3>
//             <div className="space-y-2">
//               {brands.map((brand) => (
//                 <label key={brand} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedBrands.includes(brand)}
//                     className="rounded text-indigo-600"
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setSelectedBrands([...selectedBrands, brand]);
//                       } else {
//                         setSelectedBrands(selectedBrands.filter(b => b !== brand));
//                       }
//                     }}
//                   />
//                   <span>{brand}</span>
//                 </label>
//               ))}
//             </div>
//           </div> */}

//           {/* Sort */}
//           <div>
//             <h3 className="font-semibold mb-4">Sort By</h3>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="newest">Newest First</option>
//               <option value="oldest">Oldest First</option>
//               <option value="price-low">Price: Low to High</option>
//               <option value="price-high">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="flex-1">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//========================================================================================

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Sliders, X, ChevronDown, ChevronUp } from 'lucide-react';
// import ProductCard from '../components/products/ProductCard';
// import { products } from '../data/products';

// export default function CategoryPage() {
//   const { category } = useParams();
//   const [priceRange, setPriceRange] = React.useState([0, 500000]);
//   const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
//   const [sortBy, setSortBy] = React.useState('newest');
//   const [showFilters, setShowFilters] = React.useState(false);
//   const [openSections, setOpenSections] = React.useState({
//     price: true,
//     brands: true,
//     sort: true
//   });

//   const filteredProducts = products
//     .filter(product => 
//       (!category || category === 'all-categories' || product.category.toLowerCase() === category) &&
//       product.price >= priceRange[0] &&
//       product.price <= priceRange[1] &&
//       (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price-low':
//           return a.price - b.price;
//         case 'price-high':
//           return b.price - a.price;
//         case 'oldest':
//           return new Date(a.date).getTime() - new Date(b.date).getTime();
//         default: // newest
//           return new Date(b.date).getTime() - new Date(a.date).getTime();
//       }
//     });

//   const toggleSection = (section: string) => {
//     setOpenSections(prev => ({
//       ...prev,
//       [section]: !prev[section as keyof typeof prev]
//     }));
//   };

//   const resetFilters = () => {
//     setPriceRange([0, 500000]);
//     setSelectedBrands([]);
//     setSortBy('newest');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-3xl font-bold capitalize text-gray-800">
//             {category?.replace('-', ' ') || 'All Products'}
//           </h1>
//           <p className="text-gray-500 mt-1">
//             {filteredProducts.length} products found
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={resetFilters}
//             className="hidden md:flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
//           >
//             <X className="h-4 w-4" />
//             <span>Reset Filters</span>
//           </button>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
//           >
//             <Sliders className="h-5 w-5" />
//             <span>Filters</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div className={`lg:w-72 space-y-6 bg-white rounded-xl shadow-lg p-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-xl font-bold text-gray-800">Filters</h2>
//             <button 
//               onClick={() => setShowFilters(false)}
//               className="lg:hidden text-gray-500 hover:text-gray-700"
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>
          
//           {/* Price Range */}
//           <div className="border-b border-gray-200 pb-4">
//             <div 
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleSection('price')}
//             >
//               <h3 className="font-semibold text-gray-700">Price Range (₹)</h3>
//               {openSections.price ? 
//                 <ChevronUp className="h-5 w-5 text-gray-500" /> : 
//                 <ChevronDown className="h-5 w-5 text-gray-500" />
//               }
//             </div>
            
//             {openSections.price && (
//               <div className="mt-4 space-y-4">
              
//                 <div className="flex gap-3">
//                   <div className="flex-1">
//                     <label className="text-xs text-gray-500 block mb-1">Min Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
//                       <input
//                         type="number"
//                         min="0"
//                         max={priceRange[1]}
//                         value={priceRange[0]}
//                         onChange={(e) => setPriceRange([parseInt(e.target.value || '0'), priceRange[1]])}
//                         className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <label className="text-xs text-gray-500 block mb-1">Max Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
//                       <input
//                         type="number"
//                         min={priceRange[0]}
//                         max="500000"
//                         value={priceRange[1]}
//                         onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value || '500000')])}
//                         className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sort */}
//           <div>
//             <div 
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleSection('sort')}
//             >
//               <h3 className="font-semibold text-gray-700">Sort By</h3>
//               {openSections.sort ? 
//                 <ChevronUp className="h-5 w-5 text-gray-500" /> : 
//                 <ChevronDown className="h-5 w-5 text-gray-500" />
//               }
//             </div>
            
//             {openSections.sort && (
//               <div className="mt-4 space-y-2">
//                 {[
//                   { value: 'newest', label: 'Newest First' },
//                   { value: 'oldest', label: 'Oldest First' },
//                   { value: 'price-low', label: 'Price: Low to High' },
//                   { value: 'price-high', label: 'Price: High to Low' }
//                 ].map((option) => (
//                   <div 
//                     key={option.value}
//                     className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
//                       sortBy === option.value 
//                         ? 'bg-blue-100 border border-blue-200' 
//                         : 'hover:bg-gray-50'
//                     }`}
//                     onClick={() => setSortBy(option.value)}
//                   >
//                     <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
//                       sortBy === option.value 
//                         ? 'border-blue-600 bg-blue-600' 
//                         : 'border-gray-300'
//                     }`}>
//                       {sortBy === option.value && (
//                         <div className="w-2 h-2 rounded-full bg-white"></div>
//                       )}
//                     </div>
//                     <span className={`${
//                       sortBy === option.value 
//                         ? 'text-blue-600 font-medium' 
//                         : 'text-gray-700'
//                     }`}>
//                       {option.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={resetFilters}
//             className="w-full mt-6 py-2.5 text-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
//           >
//             Reset All Filters
//           </button>
//         </div>

//         {/* Products Grid */}
//         <div className="flex-1">
//           {filteredProducts.length === 0 ? (
//             <div className="bg-white rounded-xl shadow p-12 text-center">
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
//               <h3 className="mt-4 text-xl font-semibold text-gray-800">No products found</h3>
//               <p className="mt-2 text-gray-500 max-w-md mx-auto">
//                 Try adjusting your filters to find what you're looking for.
//               </p>
//               <button
//                 onClick={resetFilters}
//                 className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//               >
//                 Reset All Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((product) => (
//                 <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//                   <ProductCard product={product} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sliders, X, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [openSections, setOpenSections] = useState({
    price: true,
    brands: true,
    sort: true
  });


  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/product/getproducts?referenceWebsite=${referenceWebsite}`);
        const data = await res.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Unexpected products format:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(product => {
      const productCategory = product.category?.name?.toLowerCase();
      return (
        (!category || category === 'all-categories' || productCategory === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const resetFilters = () => {
    setPriceRange([0, 500000]);
    setSelectedBrands([]);
    setSortBy('newest');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold capitalize text-gray-800">
            {category?.replace('-', ' ') || 'All Products'}
          </h1>
          <p className="text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetFilters}
            className="hidden md:flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Reset Filters</span>
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <Sliders className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-72 space-y-6 bg-white rounded-xl shadow-lg p-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button 
              onClick={() => setShowFilters(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Price Range */}
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('price')}
            >
              <h3 className="font-semibold text-gray-700">Price Range (₹)</h3>
              {openSections.price ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>

            {openSections.price && (
              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 block mb-1">Min Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value || '0'), priceRange[1]])}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 block mb-1">Max Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="500000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value || '500000')])}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sort */}
          <div>
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('sort')}
            >
              <h3 className="font-semibold text-gray-700">Sort By</h3>
              {openSections.sort ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>

            {openSections.sort && (
              <div className="mt-4 space-y-2">
                {[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'oldest', label: 'Oldest First' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' }
                ].map((option) => (
                  <div 
                    key={option.value}
                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                      sortBy === option.value 
                        ? 'bg-blue-100 border border-blue-200' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSortBy(option.value)}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sortBy === option.value 
                        ? 'border-blue-600 bg-blue-600' 
                        : 'border-gray-300'
                    }`}>
                      {sortBy === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className={`${
                      sortBy === option.value 
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-700'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={resetFilters}
            className="w-full mt-6 py-2.5 text-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Reset All Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-12 text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">No products found</h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
