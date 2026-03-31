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
    </div>
  );
}

export default App;