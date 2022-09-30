import React, { createContext, useState } from "react";
const FavoritesContext = createContext();
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    return setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    return setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    // eslint-disable-next-line
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
