import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Training from "../pages/Training";
import Courses from "../pages/Courses";
import CandidatePage from "../pages/Candidate";
import BeOurPartner from "../pages/BeOurPartner";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<Training />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/beourpartner" element={<BeOurPartner />} />
      <Route path="/candidatepage" element={<CandidatePage />} />
    </Routes>
  );
};

export default Router;
