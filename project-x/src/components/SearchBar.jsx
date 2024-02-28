import "../css/mainPage.css";

const SearchBar = () => {
  return (
    <div className="wrapper">
      <div class="relative w-full">
        <input
          type="text"
          id="item-search"
          class="text-7xl rounded-full p-6 box-border"
          placeholder="Search Here..."
        />
        <button
          type="submit"
          class="p-6 ms-2 rounded-lg "
        >
          <svg
            class="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
