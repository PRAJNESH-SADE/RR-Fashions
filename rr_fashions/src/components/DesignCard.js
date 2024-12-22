import React, { useState } from 'react';
import Modal from './Modal';

function DesignCard({ design }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        className="p-4 border rounded-lg shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={design.image}
          alt={design.name}
          className="object-cover w-full h-40 rounded"
        />
        <h3 className="mt-2 text-lg font-bold">{design.name}</h3>
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
