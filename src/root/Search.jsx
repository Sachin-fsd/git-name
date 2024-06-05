import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import ClipLoader from "react-spinners/ClipLoader"; // Import ClipLoader component

function Search() {
    const navigate = useNavigate(); // Initialize navigate function from useNavigate hook
    let [loading, setLoading] = useState(true); // Initialize loading state variable
    const [data, setData] = useState([]); // Initialize data state variable
    const [page, setPage] = useState(1); // Initialize page state variable
    const [location, setLocation] = useState("Delhi"); // Initialize location state variable
    const [name, setName] = useState("Aman"); // Initialize name state variable
    const [language, setLanguage] = useState(""); // Initialize language state variable
    const [total, setTotal] = useState(0); // Initialize total state variable// Function to fetch users based on location
   
    function fetchUsersByName(username, page) {
        setLoading(true); // Set loading state to true
        toast("Wait...!"); // Display a toast message indicating loading
    
        // GitHub Search API endpoint
        const api = `https://api.github.com/search/users?q=${username}&page=${page}`;
    
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
                setTotal(data.total_count); // Set total count based on API response
                setData(data.items); // Set user data (array of users) based on API response
                // 'data' contains an array of users who have the specified username
                // You can loop through the array and display the user details on your website
            })
            .catch(error => {
                console.error('Error:', error);
            });
    
        setLoading(false); // Set loading state to false
    }

    useEffect(() => {
        console.log(name, page, "abc")
        fetchUsersByName(name, page);
    }, [page])

    useEffect(()=>{
        localStorage.getItem("loggedIn") ? fetchUsersByName(name, page) : navigate("/login")
    },[])

    return (
        <div className='content'>
            <h1>Search Github Users by Name</h1>
            <input
                className='input'
                type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        fetchUsersByName(name, page);
                        setPage(1); // Reset page on Enter
                    }
                }}
            />
            <button
                className='btn btn-primary'
                onClick={() => { setPage(1); fetchUsersByName(name, page); }}

            > Search</button> <br />
            <div>
                {page > 1 && <button
                    className='btn'
                    onClick={() => setPage(page - 1)}>Previous
                </button>
                }

                {
                    total / 30 > 1 && <button onClick={() => setPage(page + 1)}>Next</button>
                }

            </div>

            <h1>Users</h1>
            {
                loading ?
                    <ClipLoader /> :
                    <div className="feeds" id="feeds">
                        {data.map((post, index) => {
                            return (
                                <div className="feed user-profile" key={index}>
                                    {/* <PostCard post={post} setPosts={setPosts} /> */}
                                    {/* <Link to={post.html_url}> */}
                                    <a href={post.html_url} target='blank'>

                                        <h2>{post.login}</h2>
                                    </a>
                                    {/* </Link> */}
                                    <img src={post.avatar_url} className='profile-photo' />
                                </div>
                            );
                        })}
                    </div>
            }
            <div>
                {page > 1 && <button
                    className='btn'
                    onClick={() => setPage(page - 1)}>Previous
                </button>
                }
                {
                    total / 30 > 1 && <button onClick={() => setPage(page + 1)}>Next</button>
                }

            </div>
            <div className='pagination'>
                {
                    [...Array(Math.ceil(total / 30))].map((item, index) => {
                        if (index + 1 < 35) {
                            return <button key={index} onClick={() => setPage(index + 1)} className={`page-no ${page === index + 1 ? "active" : ""}`}>{index + 1}</button>
                        }
                    })
                }
            </div>
        </div>
    );
}
export default Search