import { useEffect, useState } from 'react';
import { STATUS } from '../utils/constants';
export default function ReservationForm({ selected, onSave, onCancel }) {
    const [form, setForm] = useState({ nombreCliente: '', cantidadPersonas: 1, estado: STATUS.CONFIRMED });
    useEffect(() => { if (selected) setForm(selected); }, [selected]);
    const change = e => setForm({ ...form, [e.target.name]: e.target.value });
    return <form onSubmit={e => { e.preventDefault(); onSave(form); }} className='grid md:grid-cols-4 gap-2 mb-6'>
        <input name='nombreCliente' value={form.nombreCliente} onChange={change} required className='border p-2 rounded' placeholder='Cliente' />
        <input name='cantidadPersonas' type='number' min='1' value={form.cantidadPersonas} onChange={change} required className='border p-2 rounded' />
        <select name='estado' value={form.estado} onChange={change} className='border p-2 rounded'>
            <option>Confirmada</option><option>En Espera</option><option>Finalizada</option>
        </select>
        <div className='flex gap-2'>
            <button className='bg-blue-600 text-white px-4 rounded'>Guardar</button>
            {selected && <button type='button' onClick={onCancel} className='bg-gray-400 text-white px-4 rounded'>Cancelar</button>}
        </div>
    </form>
}