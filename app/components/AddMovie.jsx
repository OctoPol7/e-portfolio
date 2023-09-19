"use client";
import {useState} from 'react'

const AddMovie = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        Add Movie
      </button>
      <dialog id="my_modal_3" className={`modal ${isModalOpen && 'modal-open'}`}>
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setIsModalOpen(false)}>
            ✕
          </button>
          <h3 className="font-bold text-lg">Add A Movie!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
};

export default AddMovie;
