import { useState, useEffect } from 'react';
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import useUserStore from '../stores/userStore';
import { RiFacebookCircleFill, RiGoogleFill } from 'react-icons/ri';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { SignInButton } from '../Components/Login/SignIn';

const Login = () => {
  const navigate = useNavigate();
  const setUserData = useUserStore((state) => state.setUser);
  const { instance } = useMsal();

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

          setUserData(response.data);

          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    fetchUserProfile();
  }, [user]);

  const getInfo = async () => {
    const currentAccount = instance.getActiveAccount();
    if (currentAccount) {
      setUserData({ name: currentAccount.name, email: currentAccount.username });
      navigate('/dashboard');
    }
  };

  if (useIsAuthenticated()) {
    getInfo();
  }

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
          {/* Contenedor botones Login*/}
          <div className="flex flex-col gap-3">
            {/* Boton de Google */}

            <button onClick={() => login()} className="flex items-center gap-2 hover:bg-purple-400 hover:text-white transition-colors hover:border-purple-400 bg-gray-200 py-2 px-4 rounded-lg shadow-lg">
              <RiGoogleFill className="w-5 h-5" />
              Iniciar sesion con Google
            </button>

            {/* Boton de Facebook */}

            <button onClick={() => login()} className="flex items-center gap-2 hover:bg-purple-400 hover:text-white transition-colors hover:border-purple-400 bg-gray-200 py-2 px-4 rounded-lg shadow-lg">
              <RiFacebookCircleFill className="w-5 h-5" />
              Iniciar sesión con Facebook
            </button>

            {/* Boton Microsoft */}

            {<SignInButton />}
          </div>
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
