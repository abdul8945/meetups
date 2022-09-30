// import { Link } from "react-router-dom";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedData, setloadedData] = useState([]);
  useEffect(() => {
    // setisLoading(true);
    fetch(
      "https://my-react-starter-a1b1a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        // console.log(response.json);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        const meetups = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
          // console.log(meetups);
        }
        setisLoading(false);
        setloadedData(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading Data from server........</p>
      </section>
    );
  }
  return (
    <div>
      <MeetupList meetups={loadedData} />
    </div>
  );
}
export default AllMeetupsPage;
