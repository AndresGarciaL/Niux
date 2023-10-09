import { useState, useEffect } from "react";

import headerImg from "../assets/Img/header-img.svg";

import TrackVisibility from 'react-on-screen';

export default Banner_Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="mt-0 py-64 bg-center bg-no-repeat bg-cover relative" id="home">
    <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 xl:w-7/12">
                {/* Asumiendo que TrackVisibility se integra bien con Tailwind, lo dejamos aquí */}
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-opacity-50 border border-white border-opacity-50 font-semibold tracking-wider px-3 py-1 mb-4 text-lg">Welcome to my Portfolio</span>
                            <h1 className="text-5xl font-semibold tracking-wider mb-5 block">
                                {`Hi! I'm Judy `}
                                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <p className="text-gray-400 text-lg tracking-wider leading-relaxed w-11/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button onClick={() => console.log('connect')} className="flex items-center mt-14 text-white font-semibold text-lg tracking-wider space-x-2">
                                Let’s Connect
                                
                            </button>
                        </div>
                    }
                </TrackVisibility>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12">
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img" className="animate-updown" />
                        </div>}
                </TrackVisibility>
            </div>
        </div>
    </div>
</section>

  )
}