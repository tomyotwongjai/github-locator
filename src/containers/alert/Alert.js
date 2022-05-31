import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

function Alert() {
    const alertContext = useContext(AlertContext);
    const {alert} = alertContext;

  return (
      alert !== null && (
            <div className="Alert-danger" styles={{color: "red"}}>
                {alert.msg}
            </div>
      )

  )
}

export default Alert