export default function ReservationCard({ reservation, onDelete, onFinish, onEdit }) {
    return <div className='border rounded-xl p-4 shadow hover:shadow-lg'>
        <h3 className='font-bold'>{reservation.nombreCliente}</h3>
        <p>{reservation.cantidadPersonas} personas</p>
        <p>{new Date(reservation.fechaHora).toLocaleString()}</p>
        <p>{reservation.estado}</p>
        <div className='flex gap-2 mt-2 flex-wrap'>
            <button onClick={() => onEdit(reservation)} className='bg-yellow-500 text-white px-2 py-1 rounded'>Editar</button>
            <button onClick={() => onFinish(reservation.id)} className='bg-green-600 text-white px-2 py-1 rounded'>Finalizar</button>
            <button onClick={() => onDelete(reservation.id)} className='bg-red-500 text-white px-2 py-1 rounded'>Eliminar</button>
        </div>
    </div>
}