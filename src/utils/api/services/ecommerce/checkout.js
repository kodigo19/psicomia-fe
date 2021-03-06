import { ENDPOINTS, URI_SERVER } from "../../endpoints";

// TODO IMPLEMENT AXIOS

export const createPreference = async (orderData) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.CREATEPREFERENCE}`, {
      method: 'post',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // TODO CATCH ERROR
  }
}

export const savePaymentResponse = async (paymentResponse) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.SAVEPAYMENTRESPONSE}`, {
      method: 'post',
      body: JSON.stringify(paymentResponse),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.status;
  } catch (error) {
    // TODO CATCH ERROR
  }
}

