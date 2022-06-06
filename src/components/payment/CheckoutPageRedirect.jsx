import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { savePaymentResponseAsync, selectSavedPaymentStatus, setSuccessPaymentResponse } from '../../redux/slices/ecommerce/checkoutSlice';

export const CheckoutPageRedirect = () => {
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const [isSuccess, setIsSuccess] = useState(false);
    const dispatch = useDispatch();
  
    const statusS = useSelector(selectSavedPaymentStatus) ?? false;
  
    useEffect(() => {
      dispatch(savePaymentResponseAsync({
        payment_id: searchParams.get("payment_id"),
        payment_type: searchParams.get("payment_type"),
        merchant_order_id: searchParams.get("merchant_order_id"),
        collection_id: searchParams.get("collection_id"),
        collection_status: searchParams.get("collection_status"),
        status: searchParams.get("status"),
        external_reference: searchParams.get("external_reference"),
        preference_id: searchParams.get("preference_id"),
        site_id: searchParams.get("site_id"),
        processing_mode: searchParams.get("processing_mode"),
        merchant_account_id: searchParams.get("merchant_account_id"),
        user_id: localStorage.getItem('userId'),
      }));
      // eslint-disable-next-line
    }, []);
  
    useEffect(() => {
      if (statusS) {
        dispatch(setSuccessPaymentResponse(true));
        setIsSuccess(true);
      }
      // eslint-disable-next-line
    }, [statusS]);
  
    return (
      <>
        {
          isSuccess ? (<Navigate to='/client/dashboard'/>) : (<p>Cargando</p>)
        }
      </>
    );
}
