import React from 'react'

function Connexion() {
  return (
    <div className='login'>
       
      <h2>Connexion</h2>

    <form>
      <input type="text" placeholder="Username" className='form-control' name="email" required />
      <input type="password" placeholder="Mot de Passe"className='form-control' name="password" required />
      <button type="submit">Connexion</button>
    </form>
    </div>
  )
}

export default Connexion
