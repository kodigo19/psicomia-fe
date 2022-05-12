import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emailNotFound, invalidEmail, loadingLogin, minLenPassword, passwordIsIncorrect, setEmailNotFound, setInvalidEmail, setMinLengthPassword, setPasswordIsIncorrect, signInUserAsync, user } from '../../../redux/slices/auth/signInUserSlice.js';
import { Spinner } from '../../shared/Spinner';

const variants = {
  true: {
    x: [-8, 8, -8, 0],
    transition: {
      duration: 0.3,
      type: 'spring'
    }
  },
  false: {
    x: 0
  }
}

export const SignInClient = () => {

  const navigate = useNavigate();

  const tokenLocalStorage = localStorage.getItem('token');

  const authUser = useSelector(user);
  console.log("user from state", authUser);

  const [isShowing, setIsShowing] = useState(true);
  const [notEmail, setNotEmail] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMinLenPassword, setErrorMinLenPassword] = useState(false);
  const [errorInvalidEmail, setErrorInvalidEmail] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const loading = useSelector(loadingLogin) ?? false;
  const passwordIncorrect = useSelector(passwordIsIncorrect) ?? false;
  const emailNFound = useSelector(emailNotFound) ?? false;
  const minLengthPassword = useSelector(minLenPassword) ?? false;
  const invEmail = useSelector(invalidEmail) ?? false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== "") {
      const client = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: 2
      }
      dispatch(signInUserAsync(client))
        .then((response) => {
          console.log('response----!');
          console.log(response);
        });
    } else {
      setNotEmail(true);
    }
  }

  const handleError = () => {
    dispatch(setPasswordIsIncorrect(false));
    dispatch(setEmailNotFound(false));
    dispatch(setMinLengthPassword(false));
    dispatch(setInvalidEmail(false));
  }

  const handleChange = () => {
    setNotEmail(false);
    setUserNotFound(false);
    setErrorPassword(false);
    setErrorMinLenPassword(false);
    setErrorInvalidEmail(false);
    handleError();
  }

  useEffect(() => {
    if (tokenLocalStorage) navigate('/cliente/inicio');
    if (passwordIncorrect) setErrorPassword(true);
    if (emailNFound) setUserNotFound(true);
    if (minLengthPassword) setErrorMinLenPassword(true);
    if (invEmail) setErrorInvalidEmail(true);
    // eslint-disable-next-line
  }, [tokenLocalStorage, passwordIncorrect, emailNFound, minLengthPassword, invEmail]);

  return (
    <form onSubmit={handleSubmit} className="px-4">
      <div className="space-y-1.5">
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100 hover:bg-stone-200/80">
          <FaRegUser/><p className="text-[0.9rem] font-medium text-center">Ingresa a tu cuenta</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={notEmail | userNotFound | errorPassword | errorMinLenPassword | errorInvalidEmail ? 'true' : 'false'}
        variants={variants}
        className="my-4 space-y-3"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              onChange={handleChange}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 peer border rounded-md md:font-medium focus:ring-2 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-3 pointer-events-none peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
          {
            errorInvalidEmail ? <p className="mt-1 text-sm font-medium text-red-500">Correo inválido.</p> : <></>
          }
          {
            notEmail ? <p className="mt-1 text-sm font-medium text-red-500">Ingresar un correo.</p> : <></>
          }
          {
            userNotFound ? <p className="mt-1 text-sm font-medium text-red-500">Correo no registrado.</p> : <></>
          }
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type={isShowing ? 'password' : 'text'}
              name="password"
              id="password"
              ref={passwordRef}
              required
              onChange={handleChange}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border peer rounded-md md:font-medium focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-3 pointer-events-none peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <LockClosedIcon className="w-5 h-5" />
              </span>
            </div>
            <button
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
              }}
              type="button"
              className="absolute border-l inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
            >
              {
                isShowing === true ? (
                  <span className="text-gray-500 sm:text-sm">
                    <EyeIcon className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="text-gray-500 sm:text-sm">
                    <EyeOffIcon className="w-5 h-5" />
                  </span>
                )
              }
            </button>
          </div>
          {
            errorMinLenPassword ? <p className="mt-1 text-sm font-medium text-red-500">Ingresa por lo menos 8 caracteres.</p> : <></>
          }
          {
            errorPassword ? <p className="mt-1 text-sm font-medium text-red-500">Contraseña incorrecta.</p> : <></>
          }
        </div>
      </motion.div>
      <div className="flex justify-center w-full">
        <Link to='/recovery' className="my-4 text-sm text-center underline decoration-transparent hover:decoration-current underline-offset-2">Olvidé mi contraseña</Link>
      </div>
      <motion.button
        type={loading ? "button" : "submit"}
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-green-500 focus:outline-none"
      >
        {loading ? <Spinner/> : 'Iniciar sesión'}
      </motion.button>
      <div className="flex flex-col sm:flex-row py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>¿No tienes una cuenta?</p>
        <p>Regístrate <Link to="/signup/cliente" onClick={() => handleError()} className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
    </form>
  )
}
