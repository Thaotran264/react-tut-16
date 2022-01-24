import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import api from "./api/posts";
import EditPost from "./EditPost";

function App() {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        // if (!response.ok) throw new Error("");
        setPosts(response.data);
      } catch (error) {}
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filterResults = posts.filter((post) =>
      post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResult(filterResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, body: postBody, datetime };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];

      setPosts(allPosts);
      history.push(`/`);

      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatePost = { id, title: editTitle, body: editBody, datetime };
    try {
      const response = await api.put(`/posts/${id}`, updatePost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );

      setEditBody("");
      setEditTitle("");
      history.push(`/`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await delete `posts/${id}`;
      const postList = posts.filter((post) => post.id !== id);

      setPosts(postList);
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <div className='max-w-screen-lg m-auto min-h-screen flex flex-col'>
      {/* <Header title='ReactJS Blog' /> */}
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route path='/' exact>
          <Home posts={searchResult} />
        </Route>
        <Route exact path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route exact path='/post'>
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path='/edit/:id'>
          <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        </Route>

        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
