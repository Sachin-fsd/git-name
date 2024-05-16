import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  const notify = () => toast("Wow so easy!");
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [data, setData] = useState([])
  const [page, setPage] = useState(1);
  const [location,setLocation] = useState("Delhi")
  // Function to fetch users based on location
  function fetchUsersByLocation(location, page) {
    // GitHub Search API endpoint
    const api = `https://api.github.com/search/users?q=location:${location}&page=${page}`;


    // Use Fetch API to get users
    fetch(api)
      .then(response => {
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data.items)
        // 'data' contains an array of users who have set their location to the specified value
        // You can loop through the array and display the user details on your website
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // Call the function with a location
  // fetchUsersByLocation('San Francisco');
  useEffect(() => {
    fetchUsersByLocation('Delhi',page);
  }, [])
  useEffect(() => {
    fetchUsersByLocation(location,page);
  }, [page,location])

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color='#ddd'
        // loading={loading}
        cssOverride={override}
        size={50}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      /> */}
      <input type="text" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} />
      <h1>Users</h1>
      <div className="feeds" id="feeds">
        {data.map((post, index) => {
          return (
            <div className="feed" key={index}>
              {/* <PostCard post={post} setPosts={setPosts} /> */}
              {/* <Link to={post.html_url}> */}
              <a href={post.html_url} target='blank'>

              <h1>Name: {post.login}</h1>
              </a>
              {/* </Link> */}
              <img src={post.avatar_url} className='profile-photo' />
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
export default App