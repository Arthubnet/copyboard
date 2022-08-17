import React, { FC } from "react";
import "./wrapper.styles.scss";

type Props = {
  id: string;
  title: string;
  children: any;
};

let Wrapper: FC<Props> = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
