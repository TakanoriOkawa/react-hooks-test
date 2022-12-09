import { useEffect, useState } from "react"

function useFetchJson() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
      setPosts(data)
    })
  },[])

  return posts
}

export default useFetchJson