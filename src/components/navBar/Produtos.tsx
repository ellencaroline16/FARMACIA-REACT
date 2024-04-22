import { useNavigate, Link } from 'react-router-dom'
import React from 'react'


const Produtos = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2 className="text-slate-900 text-5xl   m-4">Produtos</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    Produtos useNavigate
                </button>
                <Link to='/home' className='hover:underline  mx-4'>Produtos por Link</Link>
            </div>

        </div>
    )
}

export default Produtos