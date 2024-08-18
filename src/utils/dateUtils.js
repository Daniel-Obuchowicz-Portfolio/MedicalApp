// src/utils/dateUtils.js

export const getFormattedDate = (month, year) => {
    const date = new Date(`${month} 1, ${year}`);
    return date.toLocaleString('default', { month: 'short' });
  };
  
  export const generateDiagnosisData = (diagnosisHistory) => {
    if (!diagnosisHistory || diagnosisHistory.length === 0) {
      return { labels: [], systolic: [], diastolic: [] };
    }
  
    const filteredAndSortedHistory = diagnosisHistory
      .filter(d => new Date(d.year, new Date(d.month + ' 1, 2024').getMonth()) >= new Date('October 1, 2023'))
      .slice(-6)
      .sort((a, b) => new Date(a.year, new Date(a.month + ' 1, 2024').getMonth()) - new Date(b.year, new Date(b.month + ' 1, 2024').getMonth()));
  
    return {
      labels: filteredAndSortedHistory.map(d => `${getFormattedDate(d.month, d.year)}, ${d.year}`),
      systolic: filteredAndSortedHistory.map(d => d.blood_pressure.systolic.value),
      diastolic: filteredAndSortedHistory.map(d => d.blood_pressure.diastolic.value),
    };
  };
  