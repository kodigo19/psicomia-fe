import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { DashboardTableComponent } from '../components/dashboard/DashboardTableComponent'
import { Navbar } from '../components/landing/Navbar'
import { selectUser } from '../redux/slices/auth/userSlice'
import { getClientProfileServiceById } from '../utils/api/services/user/getClientProfileService'

export const DashboardPsychologist = () => {

  // const [appCredits, setAppCredits] = useState([])
  const appAppointments = []

  const user = useSelector(selectUser);

  // useEffect(() => {
  //   setAppCredits(user.current_appointments);
  // },[user])

  return (
    <>
    <Navbar/>
    <Outlet/>
    <div
    className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'
    >
    <div className="">
      <h1 className="text-xl font-semibold">Mis Citas Agendadas</h1>
    </div>
    <div
      className='mt-6'
    >
    <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {
                appAppointments.length === 0 ? <div>Aún no cuentas con citas agendadas</div> :(
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead
                    className="bg-gray-50"
                    >
                      <tr
                      className='text-center'
                      >
                        <th
                        className='group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          <div className="flex items-center justify-center">
                          Tipo de sesión
                          </div>
                        </th>
                        <th
                          className='group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          <div className="flex items-center justify-center">
                          Sesiones disponibles
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className='bg-white divide-y divide-gray-200'
                    >
                    {
                      appAppointments.map((item, index) => (
                        <DashboardTableComponent key={index} item={item}/>
                      ))
                    }
                    </tbody>
                  </table>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
