import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import AddParticipant from './pages/AddParticipant';
import SearchParticipant from './pages/SearchParticipant';
import SearchBatch from './pages/SearchBatch';
import CreateBatch from './pages/CreateBatch';
import Navbar from './components/Navbar';
import AddCoach from './pages/AddCoach';
import SearchCoach from './pages/SearchCoach';
import ParticipantAttendance from './pages/ParticipantAttendance';
import Reminders from './pages/Reminders';
import Location from './pages/Location';
import SchoolEduInstitutions from './pages/SchoolEduInstitutions';
import AddingParticipant from './pages/AddingParticipant';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/add-participant" element={<AddParticipant />} />
          <Route path="/adding-participant" element={<AddingParticipant />} />
          <Route path="/search-participant" element={<SearchParticipant />} />
          <Route path="/search-batch" element={<SearchBatch />} />
          <Route path="/add-coach" element={<AddCoach />} />
          <Route path="/search-coach" element={<SearchCoach />} />
          <Route path="/create-batch" element={<CreateBatch />} />
          <Route path="/reminder" element={<Reminders />} />
          <Route path="/participant-attendance" element={<ParticipantAttendance />} />
          <Route path="/location" element={<Location />} />
          <Route path="/institution-details" element={<SchoolEduInstitutions />} />
          

        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  
  return (
    <>
      <Header />
      <Navbar/>
      <h1>Welcome to the Home Page!</h1>;
      <Footer />
  </>
  )
}

export default App;
