import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import flowerVideo from './assets/4127679-hd_1280_720_60fps.mp4';
import f1 from './assets/IMG_3069.webp';
import f2 from './assets/il_1080xN.5352833005_2ahe.avif';
import f3 from './assets/20220207030334_file_62008c06eeb6c_62008c76db802.avif';
import f4 from './assets/HS1001_SUNFLOWER_BOUQUET.webp';
import f5 from './assets/Gorgeous.webp';
import f6 from './assets/fz0145.jpg';
import f7 from './assets/145_1_1.webp';
import f8 from './assets/A079-Rose-Bouquet-White-Rose-Bouquet-SweetLife-Co.-florist-penang-penang-florist-florist-in-penang-flower-delivery-penang-bouquet-delivery-penang-2.jpg';
import f9 from './assets/3.1.jpeg';
import f10 from './assets/white_dahlia_bouquet_62bb5f565d797.jpg.webp';
import f11 from './assets/DaisyBouquet-Ssize.webp';
import f12 from './assets/IMG_23Mar2020at44935PM-1000x1000.jpg';
import f13 from './assets/File_000_1.webp';
import f14 from './assets/place-for-wedding-ceremony-in-garden-outdoors-cop-2023-11-27-04-56-09-utc.jpg';
import f15 from './assets/images.jpg';
import f16 from './assets/Four-Seasons-Hotel-Singapore-pink-peach-red-white-4.webp';
import f17 from './assets/16669489_494707777268_0.56393700-1500204564.jpg';
import f18 from './assets/ef80-128-seru-strausi.jpg';
import f19 from './assets/mrroses_sympathy-flowers_coffin-centerpiece_medium_white-roses.webp';
import f20 from './assets/hq720.jpg';
import f21 from './assets/03c98418272a8b734e79af982a153422.jpg';
import f22 from './assets/fresh-flower-diwali-decorations.jpg';
import f23 from './assets/images (1).jpg';
import f24 from './assets/sicily-img-1.jpg';
import f25 from './assets/Stage-Deco-A.jpg';
import f26 from './assets/podium-exclusive-flower-decorations.jpg';
import f27 from './assets/images (2).jpg';
import f28 from './assets/11062b_c9b7ce072e90493a9790c7ecd863121e~mv2.avif';
import f29 from './assets/20250602213204_file_683e1854c8fdb.avif';



const Home = ({ flowers, addToCart, searchTerm, setSearchTerm }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { 
      id: 1, title: "Wedding Decoration", 
      mainImg: f16, 
      desc: "Flowers bring beauty, romance, and elegance to every wedding. Our wedding floral decorations are carefully designed to match your theme and create a magical atmosphere for your special day. From bridal bouquets to stage decorations and table arrangements, we use fresh, high-quality flowers to make your wedding unforgettable.",
      gallery: [
        f12,
        f13,
        f14,
        f15
      ]
    },
    { 
      id: 2, title: "Sympathy Flowers", 
      mainImg: f17, 
      desc: "Funeral flowers are a respectful way to express sympathy and honor a loved one’s memory. Our elegant arrangements are designed to offer comfort and show heartfelt condolences.",
      gallery: [
        f18,
        f19
      ]
    },
    { 
      id: 3, title: "Religious Decoration", 
      mainImg: f20, 
      desc: "We provide fresh and meaningful flowers for religious decorations, helping create a calm and respectful environment for prayers, blessings, and special spiritual occasions.",
      gallery: [
        f21,
        f22,
        f23,
        f24
      ]
    },
    { 
      id: 4, title: "Corporate Event Decoration", 
      mainImg: f25, 
      desc: "Our flower stage decorations bring elegance and charm to any celebration. With creative designs and fresh flowers, we transform stages into stunning focal points for your event.",
      gallery: [
        f26,
        f27
      ]
    }
  ];

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%' }}>
      {/* 1. Hero Section with Video Background */}
<header style={{ 
  position: 'relative', 
  width: '100%', 
  height: '75vh', 
  display: 'flex',  
  justifyContent: 'center', 
  alignItems: 'center', 
  overflow: 'hidden',
}}>
  
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0
    }}
  >
   
    <source src={flowerVideo} type="video/mp4" />
  </video>

  
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 0
  }}></div>

  
  <div style={{ zIndex: 1, padding: '0 20px', maxWidth: '800px' }}>
    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
      Bloom & Petal
    </h1>
    <p style={{ fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '300' }}>
      Welcome to Sri Lanka's finest floral destination. We curate the freshest blooms 
      to bring elegance and joy to your every occasion. From hand-picked bouquets 
      to stunning event decors, we deliver nature's beauty right to your heart.
    </p>
    
    {/* Search Bar */}
    <input 
      type="text" 
      placeholder="Find your perfect flowers..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      style={{ 
        padding: '12px 25px', 
        width: '100%', 
        maxWidth: '450px', 
        borderRadius: '30px', 
        border: 'none', 
        fontSize: '1rem',
        outline: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }} 
    />
  </div>
</header>

      {/* 2. Flowers For Events */}
      <section style={{ padding: '60px 50px 20px 50px', textAlign: 'center' }}>
        <h2>Flowers For Events</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '30px auto' }}>
          {events.map(event => (
            <div key={event.id} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '15px' }}>
              <img src={event.mainImg} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} alt={event.title} />
              <h3 style={{ margin: '10px 0' }}>{event.title}</h3>
              <button onClick={() => setSelectedEvent(event)} style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #d63384', background: 'none', color: '#d63384', cursor: 'pointer' }}>Browse</button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popup Modal with Gallery */}
      {selectedEvent && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, padding: '20px' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative' }}>
            <span onClick={() => setSelectedEvent(null)} style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '25px', cursor: 'pointer' }}>&times;</span>
            <h2 style={{ color: '#d63384' }}>{selectedEvent.title}</h2>
            <p style={{ margin: '15px 0' }}>{selectedEvent.desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {selectedEvent.gallery.map((img, index) => (
                <img key={index} src={img} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px' }} alt="Gallery" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Shop Collection */}
      <main style={{ padding: '20px 50px 60px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Collection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredFlowers.map(flower => (
            <div key={flower.id} style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <img src={flower.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={flower.name} />
              <div style={{ padding: '15px' }}>
                <h3>{flower.name}</h3>
                <p>Rs. {flower.price}</p>
                <button onClick={() => addToCart(flower)} style={{ width: '100%', padding: '10px', background: '#d63384', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>Add to Cart</button>
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
          src={f28} 
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
        
        {/* Contact Form */}
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

        {/* Map & Info */}
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
    { id: 1, name: "Red Roses", price: 1500, img: f1 },
    { id: 2, name: "White Orchids", price: 2500, img: f2 },
    { id: 3, name: "Mixed Bouquet", price: 3800, img: f3 },
    { id: 4, name: "Sunflowers", price: 1200, img: f4 },
    { id: 5, name: "Lily flowers", price: 1300, img: f5 },
    { id: 6, name: "Mixed Roses", price: 3500, img: f6 },
    { id: 7, name: "Flower Bucket", price: 2500, img: f7 },
    { id: 8, name: "White Roses", price: 1500, img: f8 },
    { id: 9, name: "Chrysanthemum", price: 1300, img: f9 },
    { id: 10, name: "Dahlia", price: 1300, img: f10 },
    { id: 11, name: "Daisy", price: 1000, img: f11 },
    { id: 12, name: "Graduation Flower Bouquet", price: 2500, img: f29 },
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

        <footer style={{ 
  backgroundColor: '#333', 
  color: 'white', 
  padding: '40px 50px', 
  marginTop: '50px' 
}}>
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    maxWidth: '1200px', 
    margin: '0 auto',
    gap: '20px'
  }}>
    
    
    <div style={{ textAlign: 'left' }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        color: '#d63384', 
        marginBottom: '10px',
        fontWeight: 'bold' 
      }}>
        Bloom & Petal
      </h3>
      <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>📞 +94 71 234 5678</p>
      <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>✉️ info@bloomandpetal.com</p>
    </div>

    {/* Social Media Icons (Direct SVG) */}
<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
  
  {/* Facebook */}
  <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
    </svg>
  </a>

  {/* Web / Globe Icon */}
<a href="#" style={{ color: 'white', textDecoration: 'none' }}>
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 4.072V6h2V4.072c3.155.451 5.755 2.766 6.551 5.928h-1.636a5.003 5.003 0 0 0-9.83 0H6.449C7.245 6.838 9.845 4.523 11 4.072zM12 8a4 4 0 0 1 3.919 3.165h-7.838A4 4 0 0 1 12 8zm-5.551 5.835h1.636a5.003 5.003 0 0 0 9.83 0h1.636c-.796 3.162-3.396 5.477-6.551 5.928V18h-2v1.928c-3.155-.451-5.755-2.766-6.551-5.928z"/>
  </svg>
</a>
</div>

  </div>

  <div style={{ 
    textAlign: 'center', 
    borderTop: '1px solid #555', 
    marginTop: '30px', 
    paddingTop: '20px', 
    fontSize: '0.8rem',
    color: '#bbb'
  }}>
    © 2026 Bloom & Petal by Pamodya Nethmi. All Rights Reserved.
  </div>
</footer>
      </div>
    </Router>
  );
}

export default App;
