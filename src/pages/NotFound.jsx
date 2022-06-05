import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-brand-gray">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:space-x-5 px-3">
          <div className="flex items-center md:items-start justify-center">
            <p className="text-9xl md:text-8xl font-extrabold text-brand-green-500">404</p>
          </div>
          <div className="space-y-8">
            <div className="md:border-l md:border-gray-200 md:pl-5 space-y-1">
              <p className="text-6xl md:text-6xl font-bold pb-3 text-brand-brown-700 md:text-left text-center">Página no encontrada</p>
              <p className="text-gray-500 md:text-left text-center">Verifique la dirección y vuelva a intentarlo.</p>
            </div>
            <div className="md:pl-5 flex items-center justify-center md:justify-start">
              <Link to="/" className="bg-brand-green-500 px-4 text-white font-medium rounded-xl shadow-lg shadow-brand-green-500/50 py-2 focus:outline-none">Regresar al Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
