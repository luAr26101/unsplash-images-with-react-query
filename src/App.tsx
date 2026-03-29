import Gallery from "./components/gallery";
import SearchForm from "./components/search-form";
import ThemeToggle from "./components/theme-toggle";

function App() {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
}

export default App;
