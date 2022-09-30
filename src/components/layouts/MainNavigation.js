import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favCtx = useContext(FavoritesContext);
  let totalFavorites = favCtx.totalFavorites;

  return (
    <div className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetups"}>New Meetups</Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              Favorites <span className={classes.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MainNavigation;
