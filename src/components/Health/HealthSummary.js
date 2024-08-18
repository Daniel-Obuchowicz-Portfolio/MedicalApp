import React from 'react';
import HealthCard from './HealthCard';

const HealthSummary = ({ patientData }) => {
  if (!patientData || !patientData.diagnosis_history || patientData.diagnosis_history.length === 0) {
    return null; // lub możesz wyświetlić jakiś placeholder lub komunikat
  }

  return (
    <div className='xl:flex items-stretch gap-4 w-full rounded-lg bg-stripes-cyan text-center'>
      <HealthCard
        icon='/img/respiratory_rate.svg'
        title='Respiratory Rate'
        value={patientData.diagnosis_history[0].respiratory_rate.value}
        unit='bpm'
        description={patientData.diagnosis_history[0].respiratory_rate.levels}
        backgroundColor='#E0F3FA'
      />
      <HealthCard
        icon='/img/temperature.svg'
        title='Temperature'
        value={patientData.diagnosis_history[0].temperature.value}
        unit='°F'
        description={patientData.diagnosis_history[0].temperature.levels}
        backgroundColor='#FFE6E9'
      />
      <HealthCard
        icon='/img/HeartBPM.svg'
        title='Heart Rate'
        value={patientData.diagnosis_history[0].heart_rate.value}
        unit='bpm'
        description={patientData.diagnosis_history[0].heart_rate.levels}
        backgroundColor='#FFE6F1'
      />
    </div>
  );
};

export default HealthSummary;
