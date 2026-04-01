import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { UnsplashImage } from "../types";
import { useGlobalContext } from "../context/use-global-context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isPending) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length === 0) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }
  // console.log(data);
  return (
    <section className='image-container'>
      {results.map((item: UnsplashImage) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
}

export default Gallery;
