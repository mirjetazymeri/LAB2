import React from "react";
import { useState, useEffect } from "react";
import postServices from "../services/postServices";
import UpdateModalComponent from "./UpdateModalComponent";

function ShowComponents() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        setPosts(await postServices.getPosts());
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const deletePost = async(id, e) => {
        var response = await postServices.deletePost(id);
        if(response.data.success == true) {
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
        }
        else {
            alert(response.data.msg);
        }
    }
    
    return (
        <div className="App">
            <h1>Posts</h1>
            {posts.data !== undefined && posts.data.data.length > 0 && (
                <table style={{width: '100%'}} border='1'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Stock</th>
                            <th>Brand</th>  
                            <th>Delete</th>  
                            <th>Edit</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {posts.data.data.map(post => (
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>${post.price}</td>
                                <td>
                                    <img src={'http://127.0.0.1:8000/api/postImages/' + post.image} style={{width: '100px', height: '100px'}} />
                                </td>
                                <td>{post.countInStock}</td>
                                <td>{post.brand}</td>
                                <td>
                                    <button id={post._id} onClick={(e) => deletePost(post._id, e)}>Delete</button>
                                </td>
                                <td>
                                    <UpdateModalComponent />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ShowComponents;
