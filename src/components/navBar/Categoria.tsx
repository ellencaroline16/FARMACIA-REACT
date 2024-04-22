import { useNavigate, Link } from 'react-router-dom'
import React from 'react'


const Categoria = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2 className="text-slate-900 text-5xl   m-4">Categoria</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    Categoria useNavigate
                </button>
                <Link to='/home' className='hover:underline  mx-4'>Categoria por Link</Link>
            </div>

        </div>
    )
}

export default Categoria