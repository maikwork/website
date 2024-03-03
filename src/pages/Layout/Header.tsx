import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../../shared/ui/Box";
import { List } from "../../shared/ui/List";
import { PathRoutes } from "../constant";

export function Header() {
  const nav = [
    {
      title: 'Главное', link: PathRoutes.home
    },
    {
      title: 'Проекты', link: PathRoutes.project
    },
    {
      title: 'Контакты', link: PathRoutes.contact
    },
  ]
  return (
    <Box>
      <Box>
        <p>MW</p>
      </Box>
      <Box>
        <List data={nav} renderItem={(item) => <Link to={item.link} />}/>
      </Box>
    </Box>
  );
}
