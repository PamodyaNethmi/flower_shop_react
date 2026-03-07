import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Home Page Component ---
const Home = ({ flowers, addToCart, searchTerm, setSearchTerm }) => {
  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%' }}>
      <header style={{ 
        textAlign: 'center', padding: '120px 20px', width: '100%', minHeight: '70vh', 
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1519378013359-44f01c34a7d2?w=1200&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', color: 'white'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Freshness Delivered to Your Doorstep</h1>
        <p style={{ fontSize: '1.5rem' }}>Premium quality flowers for your loved ones.</p>
        <input 
          type="text" placeholder="Search for flowers..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            marginTop: '30px', padding: '12px 25px', width: '80%', maxWidth: '500px', 
            borderRadius: '30px', border: 'none', fontSize: '1rem', outline: 'none'
          }}
        />
      </header>

      <main style={{ padding: '60px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#333' }}>Our Collections</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredFlowers.map(flower => (
            <div key={flower.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <img src={flower.img} alt={flower.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3>{flower.name}</h3>
                <p style={{ color: '#d63384', fontWeight: 'bold', fontSize: '1.2rem' }}>Rs. {flower.price}</p>
                <button 
                  onClick={() => addToCart(flower)}
                  style={{ width: '100%', marginTop: '15px', padding: '12px', backgroundColor: '#d63384', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <main style={{ padding: '60px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#333' }}>Our Collections</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredFlowers.map(flower => (
            <div key={flower.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
              <img src={flower.img} alt={flower.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3>{flower.name}</h3>
                <p style={{ color: '#d63384', fontWeight: 'bold', fontSize: '1.2rem' }}>Rs. {flower.price}</p>
                <button 
                  onClick={() => addToCart(flower)}
                  style={{ width: '100%', marginTop: '15px', padding: '12px', backgroundColor: '#d63384', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

// --- About Page Component ---
const About = () => (
  <div style={{ width: '100%', minHeight: '80vh', backgroundColor: '#fff' }}>
    {/* About Header */}
    <div style={{ 
      padding: '80px 20px', 
      textAlign: 'center', 
      backgroundColor: '#d63384', 
      color: 'white' 
    }}>
      <h2 style={{ fontSize: '3rem' }}>Our Story</h2>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Cultivating love and beauty since 2015</p>
    </div>

    {/* About Content */}
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      padding: '60px 50px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      alignItems: 'center', 
      gap: '40px' 
    }}>
      {/* Image Side */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <img 
          src="11062b_c9b7ce072e90493a9790c7ecd863121e~mv2.avif" 
          alt="Our Florist" 
          style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Text Side */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h3 style={{ color: '#d63384', fontSize: '2rem', marginBottom: '20px' }}>Who We Are</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          At <b>Bloom & Petal</b>, we believe that every flower tells a story. What started as a small dream by <b>Pamodya Nethmi</b> in Colombo has now grown into a beloved floral destination for everyone who values freshness and elegance.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
          We source our flowers directly from local growers in Nuwara Eliya to ensure that you receive the highest quality blooms. Whether it's for a wedding, a birthday, or a simple "I love you," we are here to make your moments magical.
        </p>
        
        <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#d63384', fontSize: '1.5rem' }}>100%</h4>
            <p style={{ fontSize: '0.9rem' }}>Fresh Flowers</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#d63384', fontSize: '1.5rem' }}>Fast</h4>
            <p style={{ fontSize: '0.9rem' }}>Delivery</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#d63384', fontSize: '1.5rem' }}>Eco</h4>
            <p style={{ fontSize: '0.9rem' }}>Friendly</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Contact Page Component (With Form) ---
const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
  };

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '80vh', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#d63384', fontSize: '2.5rem', marginBottom: '40px' }}>Contact Us</h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '40px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* වම් පැත්ත - Contact Form */}
        <div style={{ flex: '1', minWidth: '320px', textAlign: 'left', background: '#f9f9f9', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label>Full Name</label>
              <input type="text" required style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Email Address</label>
              <input type="email" required style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Message</label>
              <textarea required rows="4" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
            </div>
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#d63384', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Send Message
            </button>
          </form>
          {status && <p style={{ marginTop: '20px', color: 'green', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
        </div>

        {/* දකුණු පැත්ත - Map & Info */}
        <div style={{ flex: '1', minWidth: '320px' }}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <p>📍 123 Flower Road, Colombo, Sri Lanka</p>
            <p>📞 +94 71 234 5678</p>
          </div>
          
          {/* Google Map Embed */}
          <div style={{ width: '100%', height: '350px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <iframe 
              title="Bloom & Petal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.5828543788!2d79.786164!3d6.921837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x2db351b3f19452d!2sColombo!5e0!3m2!1sen!2slk!4v1709800000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [flowers] = useState([
    { id: 1, name: "Red Roses", price: 1500, img: "IMG_3069.webp" },
    { id: 2, name: "White Orchids", price: 2500, img: "il_1080xN.5352833005_2ahe.avif" },
    { id: 3, name: "Mixed Bouquet", price: 3800, img: "20220207030334_file_62008c06eeb6c_62008c76db802.avif" },
    { id: 4, name: "Sunflowers", price: 1200, img: "HS1001_SUNFLOWER_BOUQUET.webp" },
    { id: 5, name: "Lily flowers", price: 1300, img: "Gorgeous.webp" },
    { id: 3, name: "Mixed Rose Bouquet", price: 3500, img: "fz0145.jpg" },
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (flower) => {
    setCart([...cart, flower]);
    alert(flower.name + " added to cart!");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh' }}>
        <nav style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', 
          backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 
        }}>
          <h2 style={{ color: '#d63384', margin: 0 }}>🌸 Bloom & Petal</h2>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>About</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</Link>
            <button style={{ backgroundColor: '#d63384', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold' }}>
              Cart ({cart.length}) - Rs. {totalPrice}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home flowers={flowers} addToCart={addToCart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ textAlign: 'center', padding: '40px', background: '#333', color: '#fff', marginTop: 'auto' }}>
          <p>© 2026 Bloom & Petal - Developed by Pamodya Nethmi</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;