import { useGlobalContext } from "../context/use-global-context";

function SearchForm() {
  // const [search, setSearch] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInputElement = e.target.elements[0] as HTMLInputElement;
    const searchValue = searchInputElement.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>Unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />
        <button className='btn'>search</button>
      </form>
    </section>
  );
}

export default SearchForm;
