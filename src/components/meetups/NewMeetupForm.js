import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

import Card from "../ui/Card";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  // console.log("inside Newmeetup form");
  function submitHandler(event) {
    event.preventDefault();
    // console.log("abdul rahman");
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    // console.log(props.onAddMeetup);
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <h3>New Meetup Form</h3>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              required
              // onSubmit={submitHandler}
              ref={titleInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup image Url</label>
            <input
              type="url"
              required
              // onSubmit={submitHandler}
              ref={imageInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              required
              // onSubmit={submitHandler}
              ref={addressInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              htmlFor="description"
              rows="5"
              required
              // onSubmit={submitHandler}
              ref={descriptionInputRef}
            >
              Description
            </textarea>
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Meetup</button>
          </div>
        </form>
      </div>
    </Card>
  );
}
export default NewMeetupForm;
