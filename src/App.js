import logo from "./logo.svg";
import "./App.css";
import Note from "./Components/Notes";

const NoteArray = [
  {
    Title: "My First Job",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    Day: 5,
    Month: 12,
    Year: 2018,
  },
  {
    Title: "My Birtday",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    Day: 3,
    Month: 3,
    Year: 2012,
  },
  {
    Title: "Funny Story in Shop",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    Day: 26,
    Month: 11,
    Year: 2021,
  },
];

function App() {
  return (
    <div className="App">
      <body>
        <h1 className="title">Welcome to My Diary</h1>
        <div className="Note-Box">
          <Note
            Title={NoteArray[0].Title}
            Description={NoteArray[0].Description}
            Month={NoteArray[0].Month}
            Day={NoteArray[0].Day}
            Year={NoteArray[0].Year}
          ></Note>
          <Note
            Title={NoteArray[1].Title}
            Description={NoteArray[1].Description}
            Month={NoteArray[1].Month}
            Day={NoteArray[1].Day}
            Year={NoteArray[1].Year}
          ></Note>
          <Note
            Title={NoteArray[2].Title}
            Description={NoteArray[2].Description}
            Month={NoteArray[2].Month}
            Day={NoteArray[2].Day}
            Year={NoteArray[2].Year}
          ></Note>
          <Note
            Title={NoteArray[0].Title}
            Description={NoteArray[0].Description}
            Month={NoteArray[0].Month}
            Day={NoteArray[0].Day}
            Year={NoteArray[0].Year}
          ></Note>
          <Note
            Title={NoteArray[1].Title}
            Description={NoteArray[1].Description}
            Month={NoteArray[1].Month}
            Day={NoteArray[1].Day}
            Year={NoteArray[1].Year}
          ></Note>
          <Note
            Title={NoteArray[2].Title}
            Description={NoteArray[2].Description}
            Month={NoteArray[2].Month}
            Day={NoteArray[2].Day}
            Year={NoteArray[2].Year}
          ></Note>
        </div>
      </body>
    </div>
  );
}

export default App;
