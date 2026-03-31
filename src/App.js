import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const productsData = [
    
  { id: 1, name: "Search Optimizer", price: 50.99, tag: "Popular", features: ["Weekly Report", "24/7 Support"], icon: "assets/rocket.png" },
  { id: 2, name: "Graphic Canvas", price: 29.00, tag: "New", features: ["100+ Templates", "Vector Art"], icon: "assets/package.png" },
  { id: 3, name: "Video Editor", price: 89.00, tag: "Best Seller", features: ["Stock Music", "Cloud Sync"], icon: "assets/Play.png" },
  { id: 4, name: "Code Debugger", price: 15.00, tag: "Essential", features: ["Instant Fix", "Multiple Languages"], icon: "assets/user.png" },
  { id: 5, name: "Email Automator", price: 35.50, tag: "Hot", features: ["Bulk Send", "Custom Templates"], icon: "assets/design-tool.png" },
  { id: 6, name: "Cloud Hosting", price: 120.00, tag: "Enterprise", features: ["Unlimited Bandwidth", "SSH Access"], icon: "assets/operation.png" }
  
];

function App() {
  const [activeTab, setActiveTab] = useState('product'); 
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
    toast.success(`${p.name} Added to Cart! 🎯`);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    toast.error("Removed from Cart! ❌");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={1500} />

      
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 py-4">
  <div className="container mx-auto px-10 flex items-center justify-between">
    {/* 1. Logo (Left) */}
    <div className="text-3xl font-extrabold text-[#7C3AED]">
      DigiTools
    </div>

    {/* 2. Menu Links (Center) - Desktop Only */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <a href="#" className="hover:text-[#7C3AED] transition">Products</a>
      <a href="#" className="hover:text-[#7C3AED] transition">Features</a>
      <a href="#" className="hover:text-[#7C3AED] transition">Pricing</a>
      <a href="#" className="hover:text-[#7C3AED] transition">Testimonials</a>
      <a href="#" className="hover:text-[#7C3AED] transition">FAQ</a>
    </div>

    {/* 3. Action Buttons (Right) */}
    <div className="flex items-center gap-6">
      {/* Cart with Icon */}
      <button className="flex items-center gap-2 text-gray-700 hover:text-[#7C3AED] transition relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="font-medium text-sm">Cart ({cart.length})</span>
      </button>

      {/* Login */}
      <button className="text-sm font-semibold text-gray-700 hover:text-[#7C3AED] transition">
        Login
      </button>

      {/* Get Started Button */}
      <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#7C3AED]/30 hover:bg-[#6D28D9] transition">
        Get Started
      </button>
    </div>
  </div>
</nav>
      
      
      
<section className="bg-white pt-16 pb-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      <div className="space-y-6">
       
        <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#7C3AED] px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
          <span>New: AI-Powered Tools Available</span>
        </div>

      
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight">
          Supercharge Your Digital Workflow
        </h1>

       
        <p className="text-gray-600 text-lg max-w-xl">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        
       
        <div className="mt-2 mb-6">
          <a href="#" className="text-[#7C3AED] font-medium text-sm flex items-center gap-1.5 hover:underline">
            Explore Products
          </a>
        </div>

        
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-bold hover:bg-[#6D28D9] transition shadow-lg shadow-[#7C3AED]/20">
            Explore Products
          </button>
          <button className="flex items-center gap-2 text-[#7C3AED] px-8 py-3 rounded-full font-semibold border border-[#E5E7EB] hover:bg-[#F9FAFB] transition">
            <span className="w-5 h-5 flex items-center justify-center border-2 border-[#7C3AED] rounded-full text-xs">▶</span>
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      
      <div className="flex justify-center md:justify-end">
        <div className="relative rounded-2xl overflow-hidden max-w-md shadow-2xl shadow-[#E5E7EB]">
          
          <img 
            src="assets/banner.png" 
            alt="Digital Workflow Visualization" 
            className="w-full object-cover" 
          />
        </div>
      </div>
    </div>
  </div>
</section>



      
      <section className="bg-indigo-600 text-white py-16 px-5 text-center">
         <h1 className="text-5xl font-extrabold mb-4">Premium Digital Tools</h1>
         <p className="text-xl opacity-80 mb-6">Level up your productivity with AI tools.</p>
         <div className="stats shadow bg-white text-black">
            <div className="stat"><div className="stat-title">Users</div><div className="stat-value">31K</div></div>
            <div className="stat"><div className="stat-title">Tools</div><div className="stat-value">150+</div></div>
         </div>
      </section>

     
      <div className="flex justify-center gap-4 my-10">
        <button onClick={() => setActiveTab('product')} className={`btn btn-lg ${activeTab==='product'?'btn-primary':'btn-outline'}`}>Products</button>
        <button onClick={() => setActiveTab('cart')} className={`btn btn-lg ${activeTab==='cart'?'btn-primary':'btn-outline'}`}>Cart ({cart.length})</button>
      </div>

     
      <main className="max-w-7xl mx-auto px-5 pb-20">
        {activeTab === 'product' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map(p => (
              <div key={p.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all border">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <img src={p.icon} className="w-12 h-12" alt=""/>
                    <span className="badge badge-secondary">{p.tag}</span>
                  </div>
                  <h2 className="card-title text-2xl font-bold mt-4">{p.name}</h2>
                  <ul className="text-sm space-y-2 my-4 opacity-70">
                    {p.features.map((f, i) => <li key={i}>✅ {f}</li>)}
                  </ul>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-3xl font-black">${p.price}</span>
                    <button onClick={() => addToCart(p)} className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Selected Tools</h2>
            {cart.length === 0 ? <p className="text-center py-10 opacity-40">Your cart is empty.</p> : (
              <div className="space-y-6">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b pb-4">
                    
                    <div className="flex items-center gap-4">
                      <img src={item.icon} className="w-10" alt=""/>
                      <div><p className="font-bold">{item.name}</p><p className="text-sm font-bold text-primary">${item.price}</p></div>
                    </div>
                    <button onClick={() => removeFromCart(idx)} className="btn btn-error btn-xs">Remove</button>
                  </div>
                ))}
                <div className="pt-5 text-2xl font-bold flex justify-between">
                    <span>Total:</span>
                    <span>${cart.reduce((s, i) => s + i.price, 0).toFixed(2)}</span>
                </div>
                <button onClick={() => {setCart([]); toast.info("Checkout Done!");}} className="btn btn-neutral btn-block mt-8">Proceed to Checkout</button>
              </div>
            )}
          </div>
        )}
      </main>
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Get Started In 3 Steps</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="p-8 border rounded-2xl shadow-sm">
        <img src="assets/user.png" alt="User" className="w-16 h-16 mx-auto mb-6" />
        <h3 className="text-xl font-semibold mb-4">Create Account</h3>
        <p className="text-gray-600">Sign up for free and set up your personal profile.</p>
      </div>
      
      <div className="p-8 border rounded-2xl shadow-sm">
        <img src="assets/package.png" alt="Package" className="w-16 h-16 mx-auto mb-6" />
        <h3 className="text-xl font-semibold mb-4">Choose Products</h3>
        <p className="text-gray-600">Select from our premium list of digital tools.</p>
      </div>
      
      <div className="p-8 border rounded-2xl shadow-sm">
        <img src="assets/rocket.png" alt="Rocket" className="w-16 h-16 mx-auto mb-6" />
        <h3 className="text-xl font-semibold mb-4">Start Creating</h3>
        <p className="text-gray-600">Download and start your amazing journey.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Our Pricing Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      
      <div className="bg-white p-8 rounded-2xl border hover:border-purple-500 transition">
        <h3 className="text-lg font-medium">Starter</h3>
        <p className="text-4xl font-bold my-4">$0 <span className="text-base font-normal text-gray-500">/mo</span></p>
        <ul className="text-left space-y-3 mb-8 text-gray-600">
          <li>✓ Basic features</li>
          <li>✓ 10 Downloads</li>
          <li>✓ Community Support</li>
        </ul>
        <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">Get Started</button>
      </div>
      
      <div className="bg-purple-600 p-8 rounded-2xl text-white shadow-xl transform scale-105 border-2 border-yellow-400">
        <div className="text-sm font-bold bg-yellow-400 text-black px-3 py-1 rounded-full inline-block mb-2 text-center">POPULAR</div>
        <h3 className="text-lg font-medium">Pro</h3>
        <p className="text-4xl font-bold my-4">$29 <span className="text-base font-normal text-purple-200">/mo</span></p>
        <ul className="text-left space-y-3 mb-8">
          <li>✓ Everything in Starter</li>
          <li>✓ Unlimited Downloads</li>
          <li>✓ Priority Support</li>
        </ul>
        <button className="w-full py-3 bg-white text-purple-600 rounded-lg font-bold">Start Free Trial</button>
      </div>
      
      <div className="bg-white p-8 rounded-2xl border hover:border-purple-500 transition">
        <h3 className="text-lg font-medium">Enterprise</h3>
        <p className="text-4xl font-bold my-4">$99 <span className="text-base font-normal text-gray-500">/mo</span></p>
        <ul className="text-left space-y-3 mb-8 text-gray-600">
          <li>✓ Dedicated Manager</li>
          <li>✓ Custom Integration</li>
          <li>✓ 24/7 Premium Support</li>
        </ul>
        <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">Contact Sales</button>
      </div>
    </div>
  </div>
</section>

{/* Ready To Transform Section */}
<section className="bg-[#7C3AED] py-20 text-center text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
    <p className="mb-8 opacity-90 max-w-2xl mx-auto">
      Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
    </p>
    <div className="flex justify-center gap-4 mb-4">
      <button className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
        Explore Products
      </button>
      <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#7C3AED] transition">
        View Pricing
      </button>
    </div>
    <p className="text-sm opacity-80">14-day free trial • No credit card required • Cancel anytime</p>
  </div>
</section>


<footer className="bg-[#0F172A] text-gray-400 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">
      
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold text-white mb-6">DigiTools</h2>
        <p className="max-w-xs leading-relaxed">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

     
      <div>
        <h4 className="text-white font-bold mb-6">Product</h4>
        <ul className="space-y-4">
          <li className="hover:text-white cursor-pointer transition">Features</li>
          <li className="hover:text-white cursor-pointer transition">Pricing</li>
          <li className="hover:text-white cursor-pointer transition">Templates</li>
          <li className="hover:text-white cursor-pointer transition">Integrations</li>
        </ul>
      </div>

      
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4">
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Blog</li>
          <li className="hover:text-white cursor-pointer transition">Careers</li>
          <li className="hover:text-white cursor-pointer transition">Press</li>
        </ul>
      </div>

     
      <div>
        <h4 className="text-white font-bold mb-6">Resources</h4>
        <ul className="space-y-4 mb-8">
          <li className="hover:text-white cursor-pointer transition">Documentation</li>
          <li className="hover:text-white cursor-pointer transition">Help Center</li>
          <li className="hover:text-white cursor-pointer transition">Community</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>
        
        <h4 className="text-white font-bold mb-4">Social Links</h4>
        <div className="flex gap-3">
          
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-[#7C3AED] hover:text-white transition">Y</div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-[#7C3AED] hover:text-white transition">F</div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-[#7C3AED] hover:text-white transition">X</div>
        </div>
      </div>
    </div>

    
    <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
      <p>© 2026 DigiTools. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Terms of Service</span>
        <span className="hover:text-white cursor-pointer">Cookies</span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;