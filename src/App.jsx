import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {useSelector ,useDispatch} from "react-redux";
import {auth , db} from './firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {  setDoc } from "firebase/firestore"; 
import {  deleteDoc ,updateDoc } from "firebase/firestore";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut} from "firebase/auth"
import Button from "@mui/material/Button";



function App() {

  // const dbcollection = collection(db,"cities")
  // console.log(dbcollection)
  return (
  <>
  
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
</>
  );
}

export default App;
