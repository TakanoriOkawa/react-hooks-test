import { useCountTime } from "../hooks/useCountTime"

const About = () => {
  const count = useCountTime();
  
  return (
    <div>About:{count}</div>
  )
}

export default About