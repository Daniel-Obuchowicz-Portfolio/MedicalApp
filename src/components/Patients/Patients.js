import React, { useEffect, useState } from 'react';
import { getAllPatients } from '../Api/Api'; // Poprawiona ścieżka do pliku Api.js

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const patientsData = await getAllPatients();
      setPatients(patientsData);
    };

    fetchPatients();
  }, []);

  return (
    <div className="order-3 xl:order-1 bg-white rounded-[16px] xl:w-[24.5%]">
      <div className='flex mb-[40px] justify-between px-[20px] pt-[20px]'>
        <h2 className="font-manrope text-left text-[24px] leading-[33px] font-extrabold tracking-normal text-[#072635] opacity-100">Patients</h2>
        <img src='/img/search_icon.svg' alt='Search'/>
      </div>
      <ul className="space-y-2 overflow-y-scroll h-[1010px]">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`hover:bg-gray-200 rounded cursor-pointer mt-[0] ${patient.name === 'Jessica Taylor' ? 'bg-[#D8FCF7]' : ''}`}
          >
            <div className="flex items-center gap-[12px] justify-between p-[16px_20px]">
              <div className='flex items-center gap-[12px]'>
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="w-[48px] h-[48px] rounded-full"
                />
                <div>
                  <h3 className="font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] opacity-100">{patient.name}</h3>
                  <p className="font-manrope text-left text-[14px] leading-[19px] font-normal tracking-normal text-[#707070] opacity-100">{patient.gender}, {patient.age}</p>
                </div>
              </div>
              <div>
                <img src='/img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg' alt='More'/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
