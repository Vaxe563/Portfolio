import "./Notes.css";

function Notes(props) {
  return (
    <div className="note">
      <div className="note-title-description">
      <h2 className="note-title">{props.Title}</h2>
      <p className="note-description">
          {props.Description}
      </p>
      </div>
      <div className="note-date-time">
        <h4 className="note-date">{props.Month + "/" + props.Day + "/" + props.Year}</h4>
      </div>
    </div>
  );
}

export default Notes;
