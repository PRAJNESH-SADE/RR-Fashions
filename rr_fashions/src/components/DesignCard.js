import React, { useState } from 'react';
import Modal from './Modal';

function DesignCard({ design }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        className="border rounded-lg shadow-lg p-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={`http://127.0.0.1:5000/static/${design.image}`}
          alt={design.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-bold mt-2">{design.name}</h3>
      </div>
      {isModalOpen && (
        <Modal
          design={design}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default DesignCard;
