import React from "react";

interface BoxProps extends React.CSSProperties {
  children: React.ReactNode;
}

export function Box(props: BoxProps) {
  const { children, ...styles } = props;
  return <div style={styles}>{children}</div>;
}
