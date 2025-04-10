
export const ThinCheckboxUnchecked = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      fill="none"
      stroke="#555"
      strokeWidth="1"
    />
  </svg>
);


export const ThinCheckboxIndeterminate = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    {/* Outer square */}
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      fill="none"
      stroke="#555"
      strokeWidth="1"
    />
    {/* Inner square - 10x10 centered */}
    <rect x="7" y="7" width="10" height="10" fill="#f05742" stroke="none" />
  </svg>
);



export const ThinCheckboxChecked = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      fill="#f05742"
      stroke="none"
      
    />
    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);
