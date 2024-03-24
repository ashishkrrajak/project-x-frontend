import "../css/mainPage.css";

const SearchBar = () => {
  return (
    <div className="wrapper">
      <div className="relative w-full">
        <input
          type="text"
          id="item-search"
          className="text-7xl rounded-full p-6 box-border"
          placeholder="Search Here..."
        />
        <button
          type="submit"
          className="p-6 ms-2 rounded-lg "
        >
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
