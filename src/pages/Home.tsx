import { useState, useEffect } from 'react';
import dad from '../assets/dad.jpg';
import mom from '../assets/mom.jpg';
import shirley from '../assets/shirley.jpg';
import alan from '../assets/alan.jpg';
import carmen from '../assets/carmen.jpg';
import jenny from '../assets/jenny.jpg';
import annie from '../assets/annie.jpg';


export function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const images: string[] = [dad, mom, shirley, alan, carmen, jenny, annie];

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modalOpen]);

  return (
    <div>
      <h1 className="text-3xl mt-10 mr-5">Select which card to view. 选择要查看的卡</h1>

      <section>
        <h2 className="text-2xl m-5">Who are you? 你是谁?</h2>
        <div className="logos flex flex-wrap m-5">
          {images.map((image, index) => (
            <div key={index} className="logo size-64 mr-5 mb-5 hover:opacity-80" onClick={() => toggleModal(image)}>
              <img src={image} alt={`person-${index}`} />
            </div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl font-semibold">Person Details</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <img src={selectedImage || ""} alt="person-details" className="size-96" />
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}