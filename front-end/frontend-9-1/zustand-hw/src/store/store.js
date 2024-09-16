import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useQuoteStore = create(
  devtools((set) => ({
    quotes: [],
    addQuote: (quote, source) =>
      set((state) => ({
        quotes: [
          ...state.quotes,
          { id: Date.now(), quote, source, starred: false },
        ],
      })),

    removeQuote: (id) =>
      set((state) => ({
        quotes: state.quotes.filter((quote) => quote.id !== id),
      })),

    // 체크박스 대신 별표(⭐️)
    toggleStar: (id) =>
      set((state) => ({
        quotes: state.quotes.map((quote) =>
          quote.id === id ? { ...quote, starred: !quote.starred } : quote
        ),
      })),
  }))
);

export default useQuoteStore;
