import React, { FC } from "react";

import "./news-column.styles.scss";
import NewsItem from "./NewsItem";

type ANew = {
  id: number;
  img: any;
  title: string;
  category: string;
  alt: string;
};

type Props = {
  item: ANew;
  setModalActive: (value: boolean) => void;
  setModalNews: (value: ANew) => void;
};

let NewsColumn: FC<Props> = ({ item, setModalActive, setModalNews }) => {
  return (
    <div className="news__column">
      {Object.values(item).map((item, i) => (
        <NewsItem
          key={i}
          item={item}
          setModalActive={setModalActive}
          setModalNews={setModalNews}
        />
      ))}
    </div>
  );
};

export default NewsColumn;
