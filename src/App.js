import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [likeTotal, setlikeTotal] = useState(0);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Prvi post",
      description:
        "Ovo je prvi post u React applikaciji",
      likes:0
    },
    {
      id: 2,
      title: "Drugi post",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum in cumque rerum numquam fugit id error, cum fugiat porro.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum in cumque rerum numquam fugit id error, cum fugiat porro.",
      likes:0
    },
    {
      id: 3,
      title: "Treci post",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum in cumque rerum numquam fugit id error, cum fugiat porro.",
      likes:0
    }
  ]);

  function like(id){
    posts.forEach((post) => {
      if(post.id == id){
        post.likes = post.likes+1;
        setlikeTotal(likeTotal+1);
        logPosts();
      }
    });
  }

  function logPosts(){
    posts.forEach((post) =>{
      console.log(post.id +" "+post.likes);
    })
  }

  return (
    <BrowserRouter className="App">
    <NavBar></NavBar>
    <Routes>
      <Route
        path="/"
        element={<Main posts = {posts} likeTotal={likeTotal} onLike={like} />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer likeCount={likeTotal} ></Footer>

  </BrowserRouter>
  );
}

export default App;
