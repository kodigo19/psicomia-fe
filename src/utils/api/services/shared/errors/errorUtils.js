export const handleError = (error) => {
  if (!error.hasOwnProperty('code')) {
    return {message: 'Ocurrió un error. Estamos trabajando para solucionarlo', code: '500'};
  }
  console.log('error in handle', error);
  // Firebase signup Errors
  if (error.code === 'auth/email-already-in-use') {
    return {message: 'Este email ya se encuentra registrado', code:error.code};
  }
  if (error.code === 'auth/email-already-exists') {
    return {message: 'Este email ya se encuentra registrado', code:error.code};
  }
  if (error.code === 'auth/weak-password') {
    return {message: 'Contraseña débil: Ingrese al menos 8 caracteres', code:error.code};
  }
  // Firebase signin Errors
  if (error.code === 'auth/wrong-password') {
    return {message: 'Email o contraseña incorrecta', code:error.code};
  }
  if (error.code === 'auth/too-many-requests') {
    return {message: 'Cuenta temporalmente suspendida. Cambia tu contraseña o intenta nuevamente más tarde', code:error.code};
  }
  // Firebase token Errors
  if (error.code === 'auth/id-token-expired') {
    return {message: 'Inicia sesión nuevamente', code:error.code};
  }
  let code = '';
  code = error.code
  const message = error.message ?? '';
  return {message: message, code: code};
}