import logo from "./logo.svg";
import React, { createContext } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import Login from "./components/Login";
import Cart from "./components/Cart";
import DetailedProduct from "./components/DetailedProduct";
import CopiedToClipboard from "./components/CopiedToClipboard";
import Loading from "./components/Loading";

const firebaseConfig = {
  apiKey: "AIzaSyBiWemR5wWlTETRBG19avJVJiXHE-wgQwc",
  authDomain: "cube-17bb1.firebaseapp.com",
  projectId: "cube-17bb1",
  storageBucket: "cube-17bb1.appspot.com",
  messagingSenderId: "964732895800",
  appId: "1:964732895800:web:b78fdf9a12626faa1f5ccd",
};

export const dataContext = createContext();
export const authContext = createContext();
function App() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [currentPage, setCurrentPage] = useState("home");
  const [cartData, setCartData] = useState();
  const [detailedProduct, setDetailedProduct] = useState();
  const [bannerData, setBannerData] = useState();
  const [copyStatus, setCopyStatus] = useState();
  const [settings, setSettings] = useState();

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();
  const productsRef = collection(db, "products");
  const bannerRef = collection(db, "banner");
  const settingsRef = collection(db, "settings");

  useEffect(() => {
    onSnapshot(productsRef, (snapshot) => {
      const products = [];
      snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));
      setData(products);
    });
  }, []);
  useEffect(() => {
    onSnapshot(bannerRef, (snapshot) => {
      const banner = [];
      snapshot.forEach((doc) => banner.push({ ...doc.data(), id: doc.id }));
      setBannerData(banner);
    });
  }, []);
  useEffect(() => {
    onSnapshot(settingsRef, (snapshot) => {
      const Settings = [];
      snapshot.forEach((doc) => Settings.push({ ...doc.data(), id: doc.id }));
      setSettings(Settings[0]);
    });
  }, []);
  useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", `${auth.currentUser.uid}`);
      getDoc(userRef)
        .then((doc) => setUserData({ ...doc.data(), id: doc.id }))
        .catch((err) => console.log(err));
    } else {
    }
  }, [auth.currentUser]);

  const copyToClipboard = (copiedString) => {
    navigator.clipboard.writeText(`${copiedString}`);
    setCopyStatus(true);
    const interval = setInterval(() => {
      setCopyStatus(false);
    }, 6000);
    return () => clearInterval(interval);
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const addUserDocument = (userId) => {
    setDoc(doc(db, "users", `${userId}`), { cart: [] });
  };
  const addProductToCart = (productId) => {
    if (auth.currentUser) {
      const initialCart = [];
      const userRef = doc(db, "users", `${auth.currentUser.uid}`);
      getDoc(userRef)
        .then((doc) =>
          updateDoc(userRef, { cart: doc.data().cart.concat(`${productId}`) })
        )
        .catch((err) => console.log(err));
    } else {
      navigate("/profile/Login");
    }
  };
  const removeProductFromCart = (productId) => {
    if (auth.currentUser) {
      const initialCart = [];
      const userRef = doc(db, "users", `${auth.currentUser.uid}`);
      getDoc(userRef)
        .then((doc) => {
          if (
            () => {
              return doc.data().cart.some((Id) => {
                if (Id === productId) {
                  return true;
                }
              });
            }
          ) {
            updateDoc(userRef, {
              cart: doc.data().cart.filter((Id) => {
                return Id !== productId;
              }),
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
  // --------------------------------------------------------------------------------------------------------------------------------------
  const showDetailedProduct = (product) => {
    setDetailedProduct(product);
    navigate(`/products/${product.id}`);
  };
  const hideDetailedProduct = () => {
    setDetailedProduct({});
    navigate(`/products`);
  };

  useEffect(() => {
    if (!cartData && userData) {
      setCartData(
        data &&
          data.filter((product) => {
            return (
              userData.cart &&
              userData.cart.some((Id) => {
                if (product.id == Id) {
                  return true;
                }
              })
            );
          })
      );
    } else if (!userData) {
      setCartData();
    }
  });

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setCartData({});
      })
      .catch((err) => console.log(err));
  };

  const signInUser = ({ email, password, username }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("user created");
      })
      .catch((err) => console.log(err));
    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        addUserDocument(auth.currentUser.uid);
      }
    });
  };

  const loginUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("user logged"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {copyStatus && <CopiedToClipboard />}
      {data ? (
        <Routes>
          {/* production -------------------- */}
          <Route
            path="/"
            element={
              <dataContext.Provider
                value={{
                  data,
                  showDetailedProduct,
                  hideDetailedProduct,
                  changePage,
                  bannerData,
                  copyToClipboard,
                  settings,
                }}
              >
                <Home />
              </dataContext.Provider>
            }
          />
          <Route
            path="/products"
            element={
              <dataContext.Provider
                value={{ data, showDetailedProduct, changePage }}
              >
                <authContext.Provider
                  value={{ removeProductFromCart, addProductToCart }}
                >
                  <Products />
                </authContext.Provider>
              </dataContext.Provider>
            }
          >
            <Route
              path={`/products/:${detailedProduct && detailedProduct.id}`}
              element={
                <dataContext.Provider
                  value={{
                    detailedProduct,
                    hideDetailedProduct,
                    currentPage,
                    copyToClipboard,
                  }}
                >
                  <DetailedProduct />
                </dataContext.Provider>
              }
            />
          </Route>

          {/* production --------------- */}
          <Route
            path="/profile"
            element={
              <dataContext.Provider value={changePage}>
                <authContext.Provider value={{ auth }}>
                  <Profile />
                </authContext.Provider>
              </dataContext.Provider>
            }
          >
            <Route
              path={"Login"}
              element={
                <authContext.Provider
                  value={{
                    auth,
                    loginUser,
                    signInUser,
                    logOutUser,
                    addUserDocument,
                  }}
                >
                  <Login />
                </authContext.Provider>
              }
            />
            <Route
              path={"Cart"}
              element={
                <dataContext.Provider value={{ currentPage, copyToClipboard }}>
                  <authContext.Provider
                    value={{
                      auth,
                      logOutUser,
                      cartData,
                      removeProductFromCart,
                      addProductToCart,
                    }}
                  >
                    <Cart />
                  </authContext.Provider>
                </dataContext.Provider>
              }
            />
          </Route>
        </Routes>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
