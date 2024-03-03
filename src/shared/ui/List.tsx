import React from "react";

interface ListProps<T> {
  data: T[];
  renderItem(value: T): JSX.Element;
  direction?: "row" | "column";
  gap?: number;
}

export function List<T>(props: ListProps<T>) {
  const { data, renderItem, direction = "row", gap = 0 } = props;

  return <div style={{display: 'flex', flexDirection: direction, gap}}>{data.map(item => renderItem(item))}</div>
}
