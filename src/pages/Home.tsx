import { useState, useEffect } from 'react';
import dad from '../assets/dad.jpg';
import mom from '../assets/mom.jpg';
import shirley from '../assets/shirley.jpg';
import alan from '../assets/alan.jpg';
import carmen from '../assets/carmen.jpg';
import jenny from '../assets/jenny.jpg';
import annie from '../assets/annie.jpg';

const imageMessages = {
  [dad]: '圣诞快乐，爸爸。\n希望你有美好的一天 我的礼物是一张简单的卡片，上面写着从你开始对所有人的祝福。谢谢你的美味炸鸡，希望你能继续戒烟。\n\n 爱你的儿子',
  [mom]: '圣诞快乐，妈妈 \n 希望你今天过得愉快，也希望我今天能早早起床。也希望我能继续自己早起。哈哈哈。我还要去找份工作，这样就能学以致用了。\n\n  爱你的儿子',
  [shirley]: "Merry Christmas Shirley. \nThank you for being the best eldest sister I can have. Thank you for washing dishes 2-3 times a week so I don't have to :). Also, thanks for getting dad the massage gun so I can use it if anyone needs a massage. \n\n Love, your younger brother (not Alan), \n Ricky ",
  [alan]: 'Merry Christmas Alan.  \n You need to stop touching me man. Go get friends so you can play with them. Go talk to some white dudes who are looking for people to fish and snowboard together. They lonely like you too. \n\n Love, your only brother, \n Ricky',
  [carmen]: 'Merry Christmas Carmen. \n Thank you for being the best sister who taught me how to bike and drive. Thank you for always driving me around :) and for helping me with my driving education. \n\n Love, your only younger brother, \n Ricky ',
  [jenny]: 'Merry Christmas Jenny. \n Thank you for being the best weeb sister. Your role and contributions in society should be noteworthy and celebrated for without your help, it would be Gojover as there would be tons of unwashed bums. j/k :D \n\n Love, your brother who regrets introucing you to AOT, \n Ricky ',
  [annie]: 'Merry Christmas Annie. \n Thank you for being the best closest to my age sister I can have. Thank you for being a fellow Twitch.tv/The_Happy_Hob viewer and LeBum/the Snake hater so we can have high quality and world defining conversations.\n May your mornings stay cozee, and the skies remains blue. \n\n Love, your same weight younger brother, \n Ricky ',
};

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);
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
              <div className="relative p-6 flex-auto flex flex-col items-center">
                <img src={selectedImage || ""} alt="person-details" className="size-96 mb-10" />
                <div className="text-xl w-3/4 whitespace-pre-line" >
                  <p>
                    {imageMessages[selectedImage || '']}
                  </p>
                </div>
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
