
import axios from "axios";

async function getData(id) {
  const {data: users} = await axios ("https://jsonplaceholder.typicode.com/users/1");
  const {data: posts} = await axios ("https://jsonplaceholder.typicode.com/posts?id=1");
  
  console.log("Users", users);
  console.log("Posts", posts);

}

getData();

export default getData;