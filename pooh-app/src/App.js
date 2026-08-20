import React from "react";
import Header from "./components/Header";
import MovieList from "./components/Movielist";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import './App.css';

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'สมชาย ใจดี', nickname: 'หนู',
    major: 'ชีวะ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 3, name: 'สมศรี ใจดี', nickname: 'นก',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['ชาเขียว', 'แมว'] },
  
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="profile-card">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;