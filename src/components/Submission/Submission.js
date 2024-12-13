import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Submission/Submission.css";
import FormSubmission from "../SubmissionForm/FormSubmission";

function Submission() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const submissions = [
    {
      id: 1,
      imageURL:
        "https://i.pinimg.com/474x/b8/56/db/b856db4e8b7127066c54782e0fff4b64.jpg",
      name: "Shellen Putri",
    },
    {
      id: 2,
      imageURL:
        "https://i.pinimg.com/236x/b6/e4/39/b6e43945b1ba845f5222aa7b0d917712.jpg",
      name: "Dzaky Chesta",
    },
    {
      id: 3,
      imageURL:
        "https://i.pinimg.com/736x/e3/a5/b2/e3a5b2c5aeeb229c39af7b4e7c5a16c3.jpg",
      name: "Fakhri Rifqi",
    },
    {
      id: 4,
      imageURL:
        "https://i.pinimg.com/236x/53/fb/71/53fb7146802361582344afc5338d09e4.jpg",
      name: "Muhammad Berlino Calvin Renaldo",
    },
    {
      id: 5,
      imageURL:
        "https://i.pinimg.com/736x/f3/54/09/f354094c5fe878d3b01dc3cf42956607.jpg",
      name: "Aquijade Grace Paendong",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCard = (submission) => {
    setCurrentCard(submission);
    setIsCardOpen(true);
  };
  const closeCard = () => setIsCardOpen(false);

  return (
    <div className="submission-container">
      <div className="title-sub">
        <h1 className="t-sub">Weekly Submission</h1>
        <p className="desc-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          lacinia, <br /> odio ut lacinia fringilla, lectus dolor tempor ligula,
          sit amet viverra purus nibh sed nibh.
        </p>
        <button className="submit-btn" onClick={openModal}>
          Submit Here
        </button>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {submissions.map((submission) => (
          <SwiperSlide key={submission.id}>
            <div className="submission-card">
              <div className="submission-content">
                <div
                  className="image-placeholder"
                  style={{ backgroundImage: `url(${submission.imageURL})` }}
                ></div>
                <h3>{submission.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && <FormSubmission closeModal={closeModal} />}
      {isCardOpen && currentCard && (
        <div className="modalcard-overlay" onClick={closeCard}>
          <div className="modalcard-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-modalcard-btn" onClick={closeCard}>
              &times;
            </button>
            <h2>{currentCard.name}</h2>
            <div
              className="modalcard-image"
              style={{ backgroundImage: `url(${currentCard.imageURL})` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Submission;
