import { useEffect, useState } from "react"

const Home = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })
  
  const handleFirstName = (firstName: string) => {
    // ↓更新前のステートを取得する
    setName((prev) => ({ ...prev, firstName})) // 既存のオブジェクトのプロパティを更新
  }

  const handleLastName = (lastName: string) => {
    setName((prev) => ({ ...prev, lastName }));
  }

  useEffect(() => {
    console.log("useEffectが実行されました。", name)
  }, [name])

  return (
    <>
      <h1>Learn useEffect</h1>
      <h2>Name: {name.firstName} {name.lastName}</h2>
      <button onClick={() => handleFirstName('John')}>John</button>
      <button onClick={() => handleLastName('Doe')}>Doe</button>
    </>
  )
}

export default Home