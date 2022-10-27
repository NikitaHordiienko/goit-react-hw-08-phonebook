import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}