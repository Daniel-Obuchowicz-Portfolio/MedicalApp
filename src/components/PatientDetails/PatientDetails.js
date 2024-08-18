import React, { useState, useEffect } from 'react';
import Api from '../Api/Api'; // Upewnij się, że ścieżka jest poprawna

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const PatientDetails = () => {
  const [patientData, setPatientData] = useState(null);

  return (
    <div className='order-1 xl:order-3 xl:w-[24.5%]'>
      <Api setPatientData={setPatientData} patientName="Jessica Taylor" />
      {patientData && (
        <>
          <div className='bg-white p-[20px] rounded-[16px] py-[32px] h-fit'>
            <div className='block items-center space-x-4'>
              <img
                src={patientData.profile_picture}
                alt={patientData.name}
                className='w-[200px] h-[200px] rounded-full mx-auto'
              />
              <div className='mt-[24px]'>
                <h2 className='font-manrope text-center text-[24px] leading-[33px] font-extrabold tracking-normal text-[#072635] opacity-100 mb-[32px]'>{patientData.name}</h2>
                <div className='birth flex gap-[16px] mb-[24px]'>
                  <img src='/img/BirthIcon.svg' alt='Date of Birth'/>
                  <div className='data'>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>Date Of Birth</div>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{formatDate(patientData.date_of_birth)}</div>
                  </div>
                </div>
                <div className='birth flex gap-[16px] mb-[24px]'>
                  <img src='/img/FemaleIcon.svg' alt='Gender'/>
                  <div className='data'>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>Gender</div>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{patientData.gender}</div>
                  </div>
                </div>
                <div className='birth flex gap-[16px] mb-[24px]'>
                  <img src='/img/PhoneIcon.svg' alt='Contact Info'/>
                  <div className='data'>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>Contact Info</div>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{patientData.phone_number}</div>
                  </div>
                </div>
                <div className='birth flex gap-[16px] mb-[24px]'>
                  <img src='/img/PhoneIcon.svg' alt='Emergency Contacts'/>
                  <div className='data'>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>Emergency Contacts</div>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{patientData.emergency_contact}</div>
                  </div>
                </div>
                <div className='birth flex gap-[16px] mb-[24px]'>
                  <img src='/img/InsuranceIcon.svg' alt='Insurance Provider'/>
                  <div className='data'>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>Insurance Provider</div>
                    <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{patientData.insurance_type}</div>
                  </div>
                </div>
              </div>
            </div>
            <button className='mt-[40px] bg-[#01F0D0] px-[40px] py-[11px] rounded-[41px] font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] opacity-100 mx-auto flex justify-center'>Show All Information</button>
          </div>
          <div className='down bg-white p-[20px] rounded-[16px] overflow-y-auto py-[32px] h-fit mt-[32px]'>
            <div className='block items-center'>
              <h2 className='font-manrope text-left text-[24px] leading-[33px] font-extrabold tracking-normal text-[#072635] opacity-100 mb-[16px]'>Lab Results</h2>
              <div className='overflow-y-scroll h-[207px] mx-0'>
                <table className='min-w-full divide-y divide-gray-200'>
                <tbody className="bg-white">
                    {patientData.lab_results.map((result, index) => (
                      <tr key={index} className={`${result === 'CT Scans' ? 'bg-[#F6F7F8]' : ''}`}>
                        <td
                          className={`px-[16px] py-[11px] whitespace-nowrap font-manrope text-left text-[13px] leading-[18px] font-normal tracking-normal text-[#072635] capitalize opacity-100 flex justify-between`}
                        >
                          {result}
                          <a href="#" className="text-blue-500 ml-2">
                            <img src="/img/download_FILL0_wght300_GRAD0_opsz24.svg" alt="Download" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PatientDetails;
