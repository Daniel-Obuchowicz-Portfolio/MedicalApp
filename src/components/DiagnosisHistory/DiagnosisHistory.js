import React, { useState } from 'react';
import Api from '../Api/Api';
import BloodPressureChart from './BloodPressureChart';
import BloodPressureSummary from './BloodPressureSummary';
import DiagnosisList from './DiagnosisList';
import HealthSummary from '../Health/HealthSummary';
import { generateDiagnosisData } from '../../utils/dateUtils';

const DiagnosisHistory = () => {
  const [patientData, setPatientData] = useState(null);

  // Sprawdź, czy patientData i diagnosis_history są dostępne
  const hasData = patientData && patientData.diagnosis_history && patientData.diagnosis_history.length > 0;

  const diagnosisData = patientData ? generateDiagnosisData(patientData.diagnosis_history) : { labels: [], systolic: [], diastolic: [] };

  return (
    <div className='xl:w-[51%] order-2 xl:order-2'>
      <Api setPatientData={setPatientData} patientName="Jessica Taylor" />
      {hasData && (
        <>
          <div className="bg-white p-[20px] rounded-[16px] mb-[32px]">
            <h2 className="font-manrope text-left text-[24px] leading-[33px] font-extrabold tracking-normal text-[#072635] opacity-100 mb-[40px]">Diagnosis History</h2>
            <div className='bg-[#F4F0FE] p-[16px] rounded-[12px] mb-[20px] min-h-[333px]'>
              <div className='xl:flex gap-[40px]'>
                <div className='block w-full xl:max-w-[65%]'>
                  <BloodPressureChart data={diagnosisData} />
                </div>
                <BloodPressureSummary 
                  systolic={patientData.diagnosis_history[0].blood_pressure.systolic} 
                  diastolic={patientData.diagnosis_history[0].blood_pressure.diastolic} 
                />
              </div>
            </div>
        
            <HealthSummary patientData={patientData} />
          </div>
          <DiagnosisList diagnosticList={patientData.diagnostic_list} />
        </>
      )}
    </div>
  );
};

export default DiagnosisHistory;
