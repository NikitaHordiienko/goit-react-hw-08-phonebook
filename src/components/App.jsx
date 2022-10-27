import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "redux/contactsThunks/contactsOperations";

import AppBar from "./AppBar/AppBar";
import HomePage from "pages/HomePage/HomePage";
import Contacts from "pages/Contacts/Contacts";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";


export default function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <HomePage />
      <Contacts />
      <Register />
      <Login />
    </>
  );
}