const opts = ['all', 'Confirmada', 'En Espera', 'Finalizada'];
export default function FilterButtons({ filter, setFilter }) {
    return <div className='flex gap-2 flex-wrap mb-4'>{opts.map(o => <button key={o} onClick={() => setFilter(o)} className={`px-3 py-1 rounded ${filter === o ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{o}</button>)}</div>
}