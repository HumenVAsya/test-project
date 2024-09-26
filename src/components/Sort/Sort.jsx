import { useState, useEffect } from "react";
import './Sort.css';

export const Sorting = {
  BY_YEAR: "newest",
  BY_NAME: "alphabetically",
  BY_PRICE: "cheapest",
};

export const Sort = ({ setProducts, originalProducts }) => {
  const [sortCriteria, setSortCriteria] = useState(Sorting.BY_NAME);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const sortProducts = (products, criteria) => {
    const sortedProducts = [...products];
    switch (criteria) {
      case Sorting.BY_YEAR:
        sortedProducts.sort((a, b) => b.year - a.year);
        break;
      case Sorting.BY_NAME:
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case Sorting.BY_PRICE:
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const filterProducts = (products, query) => {
    if (!query) return products;
    return products.filter((product) =>
      Object.values(product).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSortOptionClick = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    let filteredProducts = filterProducts(originalProducts, searchQuery);
    let sortedAndFilteredProducts = sortProducts(filteredProducts, sortCriteria);
    setProducts(sortedAndFilteredProducts);
  }, [searchQuery, sortCriteria, originalProducts, setProducts]);

  return (
    <div className="sort__container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search__input"
      />
      <div className="dropdown">
        <div
          className="dropdown__box"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="dropdown__box__text">{sortCriteria}</span>
          <button className="dropdown__box__trigger">push</button>
        </div>
        {dropdownOpen && (
          <ul className="dropdown__options active">
            <li
              className="dropdown__options__option"
              onClick={() => handleSortOptionClick(Sorting.BY_YEAR)}
            >
              {Sorting.BY_YEAR}
            </li>
            <li
              className="dropdown__options__option"
              onClick={() => handleSortOptionClick(Sorting.BY_NAME)}
            >
              {Sorting.BY_NAME}
            </li>
            <li
              className="dropdown__options__option"
              onClick={() => handleSortOptionClick(Sorting.BY_PRICE)}
            >
              {Sorting.BY_PRICE}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};