import React, { useState } from 'react';

function App() {
  const [flowers] = useState([
    { id: 1, name: "රතු රෝස (Red Roses)", price: "Rs. 1,500", img: "https://images.unsplash.com/photo-1548610762-7c6abc25c28e?w=500&q=80" },
    { id: 2, name: "සුදු ඕකිඩ් (White Orchids)", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1597006337533-5ad21f064894?w=500&q=80" },
    { id: 3, name: "මිශ්‍ර මල් කළඹ (Mixed Bouquet)", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80" },
    { id: 4, name: "සූරියකාන්ත (Sunflowers)", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&q=80" },
  ]);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', backgroundColor: '#fff5f7' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#d63384', margin: 0 }}>🌸 පිපුණු මල් කඩය</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Flowers</a>
          <button style={{ backgroundColor: '#d63384', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Cart (0)</button>
        </div>
      </nav>

      <header style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("https://images.unsplash.com/photo-1519378013359-44f01c34a7d2?w=1200&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#444', marginBottom: '10px' }}>ඔබේ ආදරණීයයන්ට නැවුම් මල්...</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>දිවයින පුරා බෙදාහැරීම් සිදු කරනු ලැබේ.</p>
        <button style={{ marginTop: '20px', padding: '12px 30px', fontSize: '1rem', backgroundColor: '#d63384', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer' }}>දැන්ම ඇණවුම් කරන්න</button>
      </header>

      <main style={{ padding: '50px' }}>
        <h2 style={{ textAlign: 'center', color: '#444', marginBottom: '40px' }}>අපගේ මල් වර්ග</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {flowers.map(flower => (
            <div key={flower.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <img src={flower.img} alt={flower.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{flower.name}</h3>
                <p style={{ color: '#d63384', fontWeight: 'bold', fontSize: '1.1rem' }}>{flower.price}</p>
                <button style={{ width: '100%', padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #d63384', color: '#d63384', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>ඇණවුම් කරන්න</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '30px', backgroundColor: '#333', color: 'white' }}>
        <p>© 2026 පිපුණු මල් කඩය - සියලුම හිමිකම් ඇවිරිණි.</p>
      </footer>
    </div>
  );
}

export default App;