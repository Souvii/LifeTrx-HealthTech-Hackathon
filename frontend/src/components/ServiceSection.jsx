import React from 'react';
import { FaUserMd, FaChild, FaClock, FaVideo, FaDesktop, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaUserMd className="text-4xl text-white" />,
    title: 'Best Doctor',
    description: 'Connect with compassionate and experienced doctors dedicated to your mental well-being.',
  },
  {
    icon: <FaChild className="text-4xl text-white" />,
    title: 'Yoga',
    description: 'Enhance your mental wellness with live yoga classes and on-demand meditation videos, tailored for relaxation and inner peace.',
  },
  {
    icon: <FaClock className="text-4xl text-white" />,
    title: '24/7 Support',
    description: 'Get round-the-clock access to expert mental health support with our 24/7 services, ensuring care whenever you need it.',
  },
  {
    icon: <FaVideo className="text-4xl text-white" />,
    title: 'Video Call Service',
    description: 'Connect face-to-face with your doctor through our secure video call feature for personalized consultations anytime, anywhere.',
  },
  {
    icon: <FaDesktop className="text-4xl text-white" />,
    title: 'Online and Offline',
    description: 'Experience the flexibility of mental health care with both online and offline appointment options, tailored to suit your convenience.',
  },
  {
    icon: <FaMobileAlt className="text-4xl text-white" />,
    title: 'App Integration',
    description: 'Empowering your mental wellness journey with expert care and a seamless app for support anytime, anywhere.',
  },
];

const ServiceSection = () => {
  return (
    <div className="services-page h-[100vh] w-screen flex flex-col items-center justify-center">
      <h1 className="text-[3vw] font-bold text-pink-500 border-b-2 px-8">Our Services</h1>
      <div className="services-box h-[70vh] w-[70vw] bg-white mt-[4vh] flex flex-wrap gap-[1vw] justify-evenly items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-[25vh] w-[20vw] rounded-[1vw] flex flex-col items-center justify-evenly px-[1vw] text-center shadow-md shadow-pink-300 text-pink-500 transition-transform transform hover:translate-y-[-5px] hover:shadow-lg relative"
          >
            <div className="icon-circle bg-pink-500 text-white w-[4vw] h-[4vw] rounded-full flex items-center justify-center absolute -top-[1.5vw] -left-[1.5vw]">
              {service.icon}
            </div>
            <h1 className="text-2xl font-bold mt-[4vh] text-zinc-900">{service.title}</h1>
            <p className="text-[1vw] leading-[2.2vh] text-zinc-400 px-5">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
