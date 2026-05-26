import { useEffect, useState } from 'react';
import { STATUS } from '../utils/constants';
export default function ReservationForm({ selected, onSave, onCancel }) {
    const getLocalDateTimeString = (date = new Date()) => {
        const tzOffset = date.getTimezoneOffset() * 60000;
        return (new Date(date.getTime() - tzOffset)).toISOString().slice(0, 16);
    };

    const defaultForm = { nombreCliente: '', cantidadPersonas: 1, estado: STATUS.CONFIRMED, fechaHora: getLocalDateTimeString() };
    const [form, setForm] = useState(defaultForm);
    
    useEffect(() => {
        if (selected) {
            setForm({
                ...selected,
                fechaHora: selected.fechaHora ? getLocalDateTimeString(new Date(selected.fechaHora)) : getLocalDateTimeString()
            });
        } else {
            setForm({
                ...defaultForm,
                fechaHora: getLocalDateTimeString()
            });
        }
    }, [selected]);
    
    const change = e => setForm({ ...form, [e.target.name]: e.target.value });
    
    const handleSubmit = e => {
        e.preventDefault();
        onSave({
            ...form,
            fechaHora: new Date(form.fechaHora).toISOString()
        });
        setForm({
            ...defaultForm,
            fechaHora: getLocalDateTimeString()
        });
    };
    
    return <form onSubmit={handleSubmit} className='grid md:grid-cols-5 gap-4 mb-6 items-end'>
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-gray-700'>Nombre del Cliente</label>
            <input name='nombreCliente' value={form.nombreCliente} onChange={change} required className='border p-2 rounded' placeholder='Ej. Pedro Pérez' />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-gray-700'>Cantidad de Personas</label>
            <input name='cantidadPersonas' type='number' min='1' value={form.cantidadPersonas} onChange={change} required className='border p-2 rounded' />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-gray-700'>Fecha y Hora</label>
            <input name='fechaHora' type='datetime-local' value={form.fechaHora} onChange={change} required className='border p-2 rounded' />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm text-gray-700'>Estado de la Reserva</label>
            <select name='estado' value={form.estado} onChange={change} className='border p-2 rounded'>
                <option>Confirmada</option><option>En Espera</option><option>Finalizada</option>
            </select>
        </div>
        <div className='flex gap-2 h-10'>
            <button className='bg-blue-600 text-white px-4 rounded w-full cursor-pointer hover:bg-blue-700 transition'>Guardar</button>
            {selected && <button type='button' onClick={onCancel} className='bg-gray-400 text-white px-4 rounded w-full cursor-pointer hover:bg-gray-500 transition'>Cancelar</button>}
        </div>
    </form>
}