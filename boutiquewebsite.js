export default function BoutiqueWebsite() {
  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "$79",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
    },
    {
      id: 2,
      name: "Classic Handbag",
      price: "$120",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
      id: 3,
      name: "Designer Heels",
      price: "$95",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-pink-600">Elegance Boutique</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#shop" className="hover:text-pink-500">Shop</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-200 to-pink-100">
        <h2 className="text-5xl font-bold mb-4">Discover Your Style</h2>
        <p className="text-lg mb-6">Trendy fashion for every occasion</p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700">
          Shop Now
        </button>
      </section>

      {/* Product Section */}
      <section id="shop" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-pink-600 font-bold">{product.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We bring premium fashion collections that combine elegance, comfort, and modern trends.
          Our boutique is designed for people who love unique styles.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white text-center py-6">
        <p>© 2026 Elegance Boutique | Contact: support@eleganceboutique.com</p>
      </footer>
    </div>
  );
}
