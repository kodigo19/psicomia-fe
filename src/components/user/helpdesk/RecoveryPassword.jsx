import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cleanErrorData, loginUser, loginUserAsync, recoveryPasswordAsync, selectErrorData, selectIsLoading, selectIsSuccess, selectUser, setIsLoading } from '../../../redux/slices/auth/userSlice.js';
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

export const RecoveryPassword = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [notEmail, setNotEmail] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading)
  
  const errorData = useSelector(selectErrorData) ?? {};
  const isSuccess = useSelector(selectIsSuccess) ?? false;

  const handleSubmit = (e) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    if (emailRef.current.value !== "") {
      const email = emailRef.current.value;
      console.log('IsLoading ', isLoading);
      console.log('NotEmaiil ', notEmail);
      console.log('Paso 0');

      dispatch(recoveryPasswordAsync(email));
      setShowResult(true);
    } else {
      // setIsLoading(false);
      dispatch(setIsLoading(false));
      setNotEmail(true);
      
    }
  }

  const cleanError = () => {
    setNotEmail(false);
    dispatch(cleanErrorData({}));
  }

  const handleChange = () => {
    console.log('handle change')
    dispatch(setIsLoading(false));
    setNotEmail(false);
    console.log('IsLoading ', isLoading);
    console.log('NotEmaiil ', notEmail);
    cleanError();
  }

  return (
    <>
    {
      showResult && isSuccess && 
      <div className='pt-4'>
          <p className='font-bold text-lg text-center'>
            Email Enviado con exito
          </p>
          <div className='pt-4'>
            <div className='p-4'>
              <hr className=''/>
            </div>
            <div className="flex flex-col sm:flex-row py-2.5 text-[0.85rem] items-center justify-center space-x-1">
              <p>¿Ya tienes una cuenta?</p>
              <p>Inicia sesión <Link to="/login/user" onClick={() => cleanError()} className="font-bold text-brand-green-500">aquí</Link></p>
            </div>
            <div className="flex flex-col sm:flex-row py-2.5 text-[0.85rem] items-center justify-center space-x-1">
              <p>o</p>
              <p>Regístrate <Link to="/signup/client" onClick={() => cleanError()} className="font-bold text-brand-green-500">aquí</Link></p>
            </div>
          </div>
      </div>
      
    }
    {
      !isSuccess &&
      <div>
        <form onSubmit={handleSubmit} className="px-4">
      <div className="space-y-1.5">
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100 hover:bg-stone-200/80">
          <FaRegUser/><p className="text-[0.9rem] font-medium text-center">Olvidé mi contraseña</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={notEmail ? 'true' : 'false'}
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
              required
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
            notEmail ? <p className="mt-1 text-sm font-medium text-red-500">Ingresar un correo.</p> : <></>
          }
          {
            !isSuccess && !isLoading && showResult ? <p className="mt-1 text-sm font-medium text-red-500">Ocurrió un error, estamos trabajando para solucionarlo</p> : <></>
          }
        </div>
      </motion.div>
      <motion.button
        type={isLoading ? "button" : "submit"}
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-green-500 focus:outline-none"
      >
        {isLoading ? <Spinner/> : 'Resetear contraseña'}
      </motion.button>
      <div className="flex flex-col sm:flex-row py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>¿Ya tienes una cuenta?</p>
        <p>Inicia sesión <Link to="/login/user" onClick={() => cleanError()} className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
      <div className="flex flex-col sm:flex-row py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>o</p>
        <p>Regístrate <Link to="/signup/client" onClick={() => cleanError()} className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
    </form>
      </div>}
    </>
  )
}
