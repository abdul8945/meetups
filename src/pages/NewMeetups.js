// import { Link } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
  const navigate = useNavigate();
  function dataHandler(meetupData) {
    fetch(
      "https://my-react-starter-a1b1a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <h1>Add NewMeetups</h1>
      <NewMeetupForm onAddMeetup={dataHandler} />
    </div>
  );
}
export default NewMeetupsPage;
