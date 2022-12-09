import useFetchJson from '../hooks/useFetchJson';

type PostType = {
  userId: number,
  id: number,
  title: string,
  body: string
}

function Posts() {
  const posts:PostType[] = useFetchJson(); // このフックの実行は一回だけ。
  return (
    <>
    {
      posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))
    }
    </>
  )
}

export default Posts


