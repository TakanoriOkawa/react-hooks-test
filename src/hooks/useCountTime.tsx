import { useState, useEffect } from "react";

export const useCountTime = () => {
  const [count, setCount] = useState(0);

  // 1秒ずつカウントを増やす
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // クリーンアップ処理
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return count;
};