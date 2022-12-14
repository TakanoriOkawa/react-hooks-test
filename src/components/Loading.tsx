import { useEffect } from 'react'
import gsap from 'gsap'
import '../css/Loading.css'
const str = 'Loading...'

const Loading = () => {
  useEffect(() => {
    const tween = gsap.timeline({repeat: -1});
    // 同じクラスで連続でアニメーションさせるやつはどうやってやるんだっけ？
    tween
    .to('.str',{
      y: 20,
      duration: 0.4,
      stagger: {each: 0.1}
    })
    .to('.str', {
      y: 0,
      duration: 0.4,
      stagger: {each: 0.1}
    })
  },[])

  return (
    <div className='loading'>

      {
        str.split('').map((char,index) => (
          <span className="str" key={index}>{char}</span>
        ))
      }
    </div>
  )
}

export default Loading