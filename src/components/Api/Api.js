import React, { useEffect } from 'react';
import axios from 'axios';

export const fetchPatientData = async (patientName) => {
  try {
    const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
      auth: {
        username: 'coalition',
        password: 'skills-test'
      }
    });
    return response.data.find(patient => patient.name === patientName);
  } catch (error) {
    console.error('Error fetching patient data:', error);
    return null;
  }
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

const Api = ({ setPatientData, patientName }) => {
  useEffect(() => {
    const fetchAndSetPatientData = async () => {
      const patientData = await fetchPatientData(patientName);
      setPatientData(patientData);
    };

    fetchAndSetPatientData();
  }, [setPatientData, patientName]);

  return null;
};

export default Api;
