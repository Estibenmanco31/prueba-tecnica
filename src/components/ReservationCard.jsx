export default function ReservationCard({ reservation, onDelete, onFinish, onEdit }) {
    const isConfirmed = reservation.estado === 'Confirmada';
    const isPending = reservation.estado === 'En Espera';
    const isFinished = reservation.estado === 'Finalizada';

    // Status colors and styling
    let statusClass = 'bg-gray-100 text-gray-800 border-gray-200';
    let borderAccent = 'border-l-gray-400';
    if (isConfirmed) {
        statusClass = 'bg-green-50 text-green-700 border-green-200';
        borderAccent = 'border-l-emerald-500';
    } else if (isPending) {
        statusClass = 'bg-amber-50 text-amber-700 border-amber-200';
        borderAccent = 'border-l-amber-500';
    } else if (isFinished) {
        statusClass = 'bg-blue-50 text-blue-700 border-blue-200';
        borderAccent = 'border-l-blue-400';
    }

    return <div className={`bg-white border border-gray-100 border-l-4 ${borderAccent} rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full`}>
        <div>
            {/* Header: Name and Status Badge */}
            <div className='flex justify-between items-start gap-2 mb-3'>
                <h3 className='font-bold text-gray-800 text-lg leading-tight'>{reservation.nombreCliente}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusClass}`}>
                    {reservation.estado}
                </span>
            </div>

            {/* Info details */}
            <div className='space-y-2 mb-5 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span><b>{reservation.cantidadPersonas}</b> {reservation.cantidadPersonas === 1 ? 'persona' : 'personas'}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{new Date(reservation.fechaHora).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-2 pt-3 border-t border-gray-100 flex-wrap justify-end'>
            <button onClick={() => onEdit(reservation)} className='flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95'>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                Editar
            </button>
            {!isFinished && (
                <button onClick={() => onFinish(reservation.id)} className='flex items-center gap-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95'>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Finalizar
                </button>
            )}
            <button onClick={() => onDelete(reservation.id)} className='flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95'>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Eliminar
            </button>
        </div>
    </div>
}