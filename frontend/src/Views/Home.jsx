import Breadcrums from "./Breadcrums";
import Navbar from "./Navbar";
import video from '../../public/Images/video_HD_.mp4';


function Home() {
  return (
    <>
      <Navbar />
      <Breadcrums />
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <video className="rounded-lg shadow-lg" loop autoPlay muted >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
   
    
    </>
  );
}
export default Home;
