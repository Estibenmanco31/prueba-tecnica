const opts = ['Todas', 'Confirmada', 'En Espera', 'Finalizada'];
export default function FilterButtons({ filter, setFilter }) {
    return <div className='flex gap-2 flex-wrap mb-4'>{opts.map(o => <button key={o} onClick={() => setFilter(o)} className={`px-3 py-1 rounded cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 ${filter === o ? 'bg-blue-600 hover:bg-blue-700 text-white shadow' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>{o}</button>)}</div>
}