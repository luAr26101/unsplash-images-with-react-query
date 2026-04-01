import type { Dispatch, SetStateAction } from "react";

export type ContextInitialValue = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void | undefined;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export type UnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};
