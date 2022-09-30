import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
  const favCtx = useContext(FavoritesContext);
  let content;
  if (favCtx.totalFavorites === 0) {
    content = <p>You have got no favorites start adding some?</p>;
  } else {
    content = <MeetupList meetups={favCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
