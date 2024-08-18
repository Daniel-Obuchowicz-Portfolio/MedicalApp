import React from 'react';
import Api from '../Api/Api';

const DiagnosisList = ({ diagnosticList }) => (
  <div className="bg-white p-[20px] rounded-[16px]">
    <h2 className="font-manrope text-left text-[24px] leading-[33px] font-extrabold tracking-normal text-[#072635] opacity-100 mb-[40px]">Diagnostic List</h2>
    <div className="grid grid-cols-3 gap-4 bg-[#F6F7F8] p-4 rounded-[24px] mb-[10px]">
      <ListHeaderItem title="Problem/Diagnosis" />
      <ListHeaderItem title="Description" />
      <ListHeaderItem title="Status" />
    </div>
    <div className="overflow-y-scroll h-[207px]">
      {diagnosticList.map((item, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 p-4">
          <ListItem value={item.name} />
          <ListItem value={item.description} />
          <ListItem value={item.status} />
        </div>
      ))}
    </div>
  </div>
);

const ListHeaderItem = ({ title }) => (
  <div className="font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] opacity-100 break-all">{title}</div>
);

const ListItem = ({ value }) => (
  <div className="font-manrope text-left text-[14px] leading-[19px] font-normal tracking-normal text-[#072635] opacity-100">{value}</div>
);

export default DiagnosisList;
