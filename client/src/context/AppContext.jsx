/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  const addToCart = (ItemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[ItemId]) {
      cartData[ItemId] += 1;
    } else {
      cartData[ItemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Item Added to Cart");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    setCartItems(cartData);
    toast.success("Item Removed from Cart");
  };

  const removeWholeItemFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    delete cartData[itemId];
    setCartItems(cartData);
    toast.success("Item Removed from Cart");
  };

  const updateCartItem = (itemId, value) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = value;
    setCartItems(cartData);
    toast.success("Cart Updated Successfully");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getCartCount = () => {
    let totalCount = 0;

    for (const item in cartItems) {
      totalCount += cartItems[item];
    }

    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemsInfo = products.find((product) => product._id === items);
      totalAmount += itemsInfo.offerPrice * cartItems[items];
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    cartItems,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    updateCartItem,
    removeWholeItemFromCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
