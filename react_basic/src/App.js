import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./230926/Header";
import Navbar from "./230926/Navbar";
import AddList from "./230925/AddList";
import RouterPrac1 from "./Router";
import Form from "./230927/Form";
import FormPrac from "./230927/FromPrac";
import LangProvider from "./231004/LangProvider";
import { useState } from "react";
import LangSelector from "./231004/LangSelector";
import MyContext from "./231004/store/lang-context";
import SettingProvider from "./231004/LanguageProvider";
import SettingSelector from "./231004/LanguageSelector";
import LanguageProvider from "./231004/LanguageProvider";
import LanguageSelector from "./231004/LanguageSelector";
import ThemeProvider from "./231004/ThemeProvider";
import ThemeSelector from "./231004/ThemeSelector";
import ProductList from "./231004/ProductList";
import CartProvider from "./231004/CartProvider";
import Cart from "./231004/Cart";

function App() {
  return (
    <>
      {/* <ClassComponent name="yeon"></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent name="kdt8" age={12}>
        안녕
      </FunctionComponent>
      <FunctionComponent /> */}
      {/* <FoodComponent food="빵"></FoodComponent> */}
      {/* <BookComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></BookComponent> */}
      {/* <Event />
      <EventClass /> */}
      {/* <EventHandling message="전달받은 메시지입니다."></EventHandling> */}
      {/* <Router /> */}
      {/* <Header /> */}
      {/* <Navbar />
      <Outlet /> */}
      {/* <AddList /> */}
      {/* <RouterPrac1 /> */}
      {/* <Form /> */}
      {/* <FormPrac /> */}
      {/* <MyContext.Provider value={{ language, setLanguage }}>
        <LangSelector />
      </MyContext.Provider> */}
      {/* <LangProvider>
        <LangSelector />
      </LangProvider> */}
      {/* <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
      <ThemeProvider>
        <ThemeSelector />
      </ThemeProvider> */}
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
