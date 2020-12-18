import axios from "axios";

let url = "http://localhost:5000/posts";
axios.get(url).then((res) => {
  console.log(res);
});
