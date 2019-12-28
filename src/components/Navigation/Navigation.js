import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if (isSignedIn){
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={()=>onRouteChange('Signin')} className='ma0 f3 link dim black underline pa3 pointer'>Cerrar Sesión</p>
			</nav>	
		)
	} else {
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={()=>onRouteChange('Signin')} className='ma0 f3 link dim black underline pa3 pointer'>Iniciar Sesión</p>
				<p onClick={()=>onRouteChange('Register')} className='ma0 f3 link dim black underline pa3 pointer'>Registro</p>
			</nav>	
		)
	}
}

export default Navigation;