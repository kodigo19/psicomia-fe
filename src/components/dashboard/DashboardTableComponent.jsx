import React from 'react'

export const DashboardTableComponent = ({item}) => {
  let therapy_display_name = '';
  const {_id, therapy_code, credits} = item;
  if (therapy_code === 'ind') {therapy_display_name = 'Individual'}
  else if (therapy_code === 'duo') {therapy_display_name = 'En Pareja'}
  else {therapy_display_name = 'Consultar a soporte el tipo de sesión'}
  return (
    <tr
      key={_id}
      className='text-center'
    >
      <td
        className='px-6 py-4 whitespace-nowrap'
      >
        <div
         className='text-sm font-medium text-gray-900'
        >
          {therapy_display_name}
        </div>
      </td>
      <td
        className='px-6 py-4 whitespace-nowrap'
      >
        <div
          className='text-sm font-medium text-gray-900'
        >
          {credits}
        </div>
      </td>
    </tr>
  )
}
