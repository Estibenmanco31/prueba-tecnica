import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../helpers/local-storage';
export default function Login() {
    const [nombre, setNombre] = useState(''); const [turno, setTurno] = useState('Mañana'); const nav = useNavigate();
    const submit = e => { e.preventDefault(); login({ nombre, turno }); nav('/panel'); };
    return <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form onSubmit={submit} className='bg-white p-6 rounded-xl shadow w-96 space-y-4'>
            <h1 className='text-2xl font-bold'>Table Track</h1>
            <input className='border p-2 w-full' value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Nombre completo' required />
            <select className='border p-2 w-full' value={turno} onChange={e => setTurno(e.target.value)}><option>Mañana</option><option>Tarde</option><option>Noche</option></select>
            <button className='bg-blue-600 text-white w-full p-2 rounded'>Ingresar</button>
        </form>
    </div>
}