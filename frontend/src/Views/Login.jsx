import  { useState, useEffect } from 'react';
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import useUserStore from '../stores/userStore';

const Login = () => {
  const navigate = useNavigate();
  const setGoogleApiData = useUserStore((state) => state.setUser);

  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log(error),
  });

  const text = 'Bienvenido a Niux';
  const typingSpeed = 100;

  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText((prevDisplayText) => prevDisplayText + text.charAt(charIndex));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingTimer);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingTimer);
    };
  }, [charIndex]);

  // Login Google
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (user) {
          const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          });

          setGoogleApiData(response.data);

          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    fetchUserProfile();
  }, [user]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
        <div className="my-8">
          <img src="../../public/Images/logo3niux.png" alt="Niux" width="100" height="100" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="typing-effect text-4xl font-bold text-gray-900 ">
            <i className="nf nf-md-hand_wave"> </i>
            {displayText}
            <span className="typing-cursor"></span>
          </h1>
          <button onClick={() => login()} className="flex items-center gap-2 bg-gray-200 py-2 px-4 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"></path>
              </g>
            </svg>
            Iniciar sesión con Google
          </button>
        </div>
        <div className="my-14">
          <p className="text-center relative text-purple-400 font-bold bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            Ingresa con tu email
          </p>
        </div>
        <div className="w-full mb-8">
          <form>
            <div className="flex justify-center mb-4">
              <input type="email" className="w-full max-w-md py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400" placeholder="Correo electrónico" />
            </div>
            <div className="flex justify-center mb-6">
              <input type="password" className="w-full max-w-md py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400" placeholder="Password" />
            </div>
            <div className="w-full max-w-md mx-auto flex items-center text-gray-500 mb-8 justify-end">
              <div>
                <Link to="#" className="hover:underline hover:text-gray-900 transition-all ">
                  ¿Olvidaste tu password?
                </Link>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <button type="submit" className="w-full font-poppins bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="text-gray-500">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="font-bold text-gray-900 hover:underline hover:text-purple-600 transition-all">
              Registrate
            </Link>
          </span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img src="../../public/Images/login3.png" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
