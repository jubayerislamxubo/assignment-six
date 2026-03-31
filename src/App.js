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

      
      <nav className="navbar bg-white shadow-sm px-10 sticky top-0 z-50">
        <div className="flex-1 font-black text-2xl text-primary">DigiTools</div>
        <div className="flex-none font-bold">Cart: {cart.length}</div>
      </nav>
      
      
      <div className="relative w-full h-[300px] md:h-[400px] mb-8 overflow-hidden rounded-2xl shadow-xl px-4 mt-4">
        <img 
          src="assets/banner.png" 
          alt="Shop Banner" 
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-10 rounded-2xl mx-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome to Our Shop</h1>
            
            <p className="text-lg opacity-90">Find the best tools to boost your productivity</p>

            <h1 className="text-4xl md:text-5xl font-bold mb-2 py-12">JUBAYER</h1>
            
          </div>
        </div>
      </div>

      
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