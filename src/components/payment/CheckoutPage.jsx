import React from 'react'
import { useMercadopago } from "react-sdk-mercadopago/lib";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPreferenceId, selectPreferenceData } from '../../redux/slices/ecommerce/checkoutSlice';

export const CheckoutPage = () => {

  const mercadopago = useMercadopago.v2(`${process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY}`, { locale: 'es-PE' });

  const preference_id = useSelector(selectPreferenceId) ?? false;
  const preference_data = useSelector(selectPreferenceData) ?? false;

  const divButtonRef = useRef();
  
  useEffect(() => {
    if (mercadopago && preference_id) {
      if (divButtonRef.current.hasChildNodes()) {
        divButtonRef.current.removeChild(divButtonRef.current.firstChild);
      }
      mercadopago.checkout({
        preference: {
          id: preference_id,
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        },
        theme: {
          elementsColor: '#1E6C5B',
          headerColor: '#1E6C5B',
        }
      });
    }
  }, [mercadopago, preference_id]);

  const product_title = preference_data.items[0].title;
  const product_description = preference_data.items[0].description;
  const product_price = preference_data.items[0].unit_price;


  return (
    <div className="py-8 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-center">
          <p className="font-semibold text-3xl text-stone-700">Resumen de la promoción</p>
        </div>
        <div className="w-full flex border-2 py-6 rounded-2xl">
          <div className="space-y-6 w-1/2 px-8">
            <div className="space-y-3">
              <p className="font-base text-xl"><span className='font-bold'>Tipo: </span>{product_title}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl">Detalle:</p>
              <p>{product_description}</p>
            </div>
          </div>
          <div className="space-y-6 w-1/2 px-8">
            <div className="flex items-center justify-between">
              <p className="font-base text-xl"><span className='font-bold'>Monto total: </span>S/. {product_price}</p>
              <p></p>
            </div>
            <div className="cho-container" ref={divButtonRef}/>
          </div>
        </div>
      </div>
    </div>
  )
}
