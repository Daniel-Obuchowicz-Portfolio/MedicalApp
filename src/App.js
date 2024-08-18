import React from 'react';
import Header from './components/Header/Header';
import Patients from './components/Patients/Patients';
import DiagnosisHistory from './components/DiagnosisHistory/DiagnosisHistory';
import PatientDetails from './components/PatientDetails/PatientDetails';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <main className="grid xl:flex gap-[32px] xl:m-[18px]">
          <Patients />
          <DiagnosisHistory />
          <PatientDetails />
        </main>
      </div>
    </div>
  );
}

export default App;
