import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ScientistCard from "./components/ScientistCard";
import "./HomePage.css";

const scientists = [
  {
    name: "Albert Einstein",
    field: "Physics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/320px-Albert_Einstein_Head.jpg"
  },
  {
    name: "Isaac Newton",
    field: "Mathematics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sir_Isaac_Newton_%281642-1727%29.jpg/320px-Sir_Isaac_Newton_%281642-1727%29.jpg"
  },
  {
    name: "Marie Curie",
    field: "Chemistry",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Marie_Curie_c1920.jpg/320px-Marie_Curie_c1920.jpg"
  },
  {
    name: "Nikola Tesla",
    field: "Engineering",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/320px-N.Tesla.JPG"
  },
  {
    name: "Galileo Galilei",
    field: "Astronomy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Galileo.arp.300pix.jpg/320px-Galileo.arp.300pix.jpg"
  },
  {
    name: "Charles Darwin",
    field: "Biology",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg/320px-Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg"
  },
  {
    name: "Stephen Hawking",
    field: "Cosmology",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/320px-Stephen_Hawking.StarChild.jpg"
  },
  {
    name: "Ada Lovelace",
    field: "Computing",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ada_Lovelace_portrait.jpg/320px-Ada_Lovelace_portrait.jpg"
  },
  {
    name: "Rosalind Franklin",
    field: "Genetics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rosalind_Franklin.jpg/320px-Rosalind_Franklin.jpg"
  },
  {
    name: "James Clerk Maxwell",
    field: "Electromagnetism",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/James_Clerk_Maxwell.png/320px-James_Clerk_Maxwell.png"
  }
];


const colors = [
  "#f9c74f", "#90be6d", "#f9844a", "#43aa8b", "#577590",
  "#f94144", "#adb5bd", "#b983ff", "#00b4d8", "#ffd6a5"
];

function HomePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Top 10 Scientists</h2>
        <button
          className="logout-button"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div className="scientist-grid">
        {scientists.map((sci, idx) => (
          <ScientistCard
            key={idx}
            name={sci.name}
            field={sci.field}
            image={sci.image}
            bgColor={colors[idx % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
