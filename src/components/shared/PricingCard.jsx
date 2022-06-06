import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMercadopago } from 'react-sdk-mercadopago/lib';
import { createPreferenceAsync, selectPreferenceId } from '../../redux/slices/ecommerce/checkoutSlice';
import { Spinner } from './Spinner';

export const PricingCard = ({type, title,description, strPrice, productCode}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);

  const handlePayment = async () => {
    setIsLoadingPayment(true);
    
    // Create preference variable for Mercadopago Preference

    const user_id = localStorage.getItem('userId');
    
    const preferenceData = {
      quantity: 1,
      product_code: productCode,
      user_id,
    }

    dispatch(createPreferenceAsync(preferenceData))
      .then((response) => {
        setIsLoadingPayment(false);
        navigate('/client/checkout');
      })
      .catch((error) => {
        setIsLoadingPayment(false);
      });
  };

  return (
    <div className='max-w-xs grid gap-y-8 text-center px-8 py-6 rounded-xl shadow-lg bg-white'>
      <div>
        {
          type === "paquetes" &&
          <p className='text-base font-semibold'>
            Paquete de citas
          </p>
        }
        <p className='text-base font-semibold'>
          {title}
        </p>
      </div>
      <p className='text-4xl font-bold'>
        {strPrice}
      </p>
      <div className={`grid ${type === 'citas' ? 'gap-y-8' : 'gap-y-2' }`}>
        <p className='text-sm font-normal'>
          {description}
        </p>
        {
          type === "paquetes" &&
          <p className={`text-xs font-semibold ${type=== 'citas' ? 'mt-4' : 'mt-2'} text-green-400`}>
            El precio incluye 5% de descuento
          </p>
        }
        <button
          className='bg-brand-purple-500 h-10 text-center text-white grid content-center rounded-md'
          onClick={handlePayment}
        >
          {isLoadingPayment ? <Spinner/> : 'Continuar' }
        </button>
      </div>
    </div>
  )
}
