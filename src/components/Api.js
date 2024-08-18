import React, { useEffect } from 'react';
import axios from 'axios';

const Api = ({ setPatientData }) => {
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
          auth: {
            username: 'coalition',
            password: 'skills-test'
          }
        });

        const jessicaTaylor = response.data.find(patient => patient.name === 'Jessica Taylor');
        setPatientData(jessicaTaylor);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [setPatientData]);

  return null;
};

export const getAllPatients = async () => {
    try {
      const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        auth: {
          username: 'coalition',
          password: 'skills-test'
        }
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching all patients:', error);
      return [];
    }
  };
  
  export default Api;
