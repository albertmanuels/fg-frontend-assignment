import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 min-h-svh pt-10">
        <h1 className="text-lg md:text-4xl">Dashboard Users</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
