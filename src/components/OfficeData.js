import React, { useState } from 'react';
import "./OfficeDataStyles.css";

function OfficeData(props) {
  const [showModal, setShowModal] = useState(false);
  console.log('showmodal', showModal)
  return (
    <div className="o-card">
      <div className="o-image"  onClick={() => setShowModal(true)}>
        <img src={props.image} alt="office" />
      </div>
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowModal(false)}
        >
          <img src={props.image} alt="office" style={{maxWidth: '50%', maxHeight: '50%'}} />
        </div>
      )}
    </div>
  );
}

export default OfficeData;
