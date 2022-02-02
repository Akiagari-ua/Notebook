import React from 'react';

// type TIconProps = {
//   size?: string;
// };

const UserIcon = (props: any) => {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <circle fill="transparent" stroke="currentColor" cx="16" cy="16" r="14" />
      <circle fill="" cx="16" cy="13" r="5" />
      <path fill="currentColor" d="M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7" />
    </svg>
  );
};
export default UserIcon;
