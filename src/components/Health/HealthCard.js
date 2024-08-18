import React from 'react';

const HealthCard = ({ icon, title, value, unit, description, backgroundColor }) => {
  return (
    <div className={`rounded-[12px] p-[16px] flex-1 block items-center mb-5 xl:mb-0`} style={{ backgroundColor }}>
      <img className='mb-[16px]' src={icon} alt={title} />
      <div className='font-manrope text-left text-[16px] leading-[22px] font-medium tracking-normal text-[#072635] capitalize opacity-100'>{title}</div>
      <div className='font-manrope text-left text-[30px] leading-[41px] font-extrabold tracking-normal text-[#072635] opacity-100 mb-[17px]'>{value} {unit}</div>
      <div className="font-manrope text-left text-[14px] leading-[19px] font-normal tracking-normal text-[#072635] opacity-100">{description}</div>
    </div>
  );
};

export default HealthCard;
