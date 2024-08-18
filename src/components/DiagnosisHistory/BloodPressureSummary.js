import React from 'react';

const BloodPressureSummary = ({ systolic, diastolic }) => (
  <div className='block w-full xl:max-w-[35%]'>
    <SummaryItem
      title="Systolic"
      value={systolic.value}
      color="#E66FD2"
      level={systolic.levels}
      arrow="up"
    />
    <div className='w-full h-[1px] my-[16px] bg-[#CBC8D4]'></div>
    <SummaryItem
      title="Diastolic"
      value={diastolic.value}
      color="#8C6FE6"
      level={diastolic.levels}
      arrow="down"
    />
  </div>
);

const SummaryItem = ({ title, value, color, level, arrow }) => (
  <div className='el gap-[9px] h-max'>
    <div className='flex gap-[4px] mb-[8px]'>
      <div className={`dot w-[14px] h-[14px]`} style={{ backgroundColor: color, borderColor: '#fff' }}></div>
      <div className='font-manrope text-left text-[14px] leading-[19px] font-bold tracking-normal text-[#072635] capitalize opacity-100'>{title}</div>
    </div>
    <div className='font-manrope text-left text-[22px] leading-[30px] font-bold tracking-normal text-[#072635] capitalize opacity-100 mb-[8px]'>{value}</div>
    <div className='flex gap-[8px]'>
      <div className='items-center flex'><img src={`/img/Arrow${arrow === "up" ? "Up" : "Down"}.svg`} alt={`Arrow ${arrow}`}/></div>
      <div className='font-manrope text-left text-[14px] leading-[19px] font-normal tracking-normal text-[#072635] opacity-100'>{level}</div>
    </div>
  </div>
);

export default BloodPressureSummary;
