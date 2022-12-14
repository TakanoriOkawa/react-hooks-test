import { ReactElement } from "react";

type SuspensedProps = {
  children: ReactElement
}

const AlwaysSuspend = (props: SuspensedProps) => {
  const {children} = props;

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  throw sleep(2000);
  // if (Math.random() < 0.8) {
  // }
  // return <div>{children}</div>
}

export default AlwaysSuspend