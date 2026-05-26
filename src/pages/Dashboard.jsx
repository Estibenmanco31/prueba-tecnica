import { useEffect, useState } from 'react';
import { showApiError, confirmCancelReservation, showDeletedAlert } from '../helpers/alerts';
import { getUser, logout } from '../helpers/local-storage';
import { getReservations, createReservation, updateReservation, patchReservation, deleteReservation } from '../services/Api';
import Navbar from '../components/NavBar';
import Loader from '../components/Loader';
import FilterButtons from '../components/FilterButtons';
import ReservationForm from '../components/ReservationForm';
import ReservationCard from '../components/ReservationCard';
import { STATUS } from '../utils/constants';

export default function Dashboard() {
    const user = getUser();
    const [items, setItems] = useState([]), [loading, setLoading] = useState(true), [filter, setFilter] = useState('all'), [selected, setSelected] = useState(null);

    const load = async () => { try { setLoading(true); const { data } = await getReservations(); setItems(data); } catch (e) { await showApiError(); } finally { setLoading(false); } };
    useEffect(() => { load() }, []);

    const save = async (form) => {
        const payload = { ...form, cantidadPersonas: Number(form.cantidadPersonas), fechaHora: form.fechaHora || new Date().toISOString() };
        selected ? await updateReservation(selected.id, payload) : await createReservation(payload);
        setSelected(null); load();
    };
    const finish = async (id) => { await patchReservation(id, { estado: STATUS.FINISHED }); load(); };
    const remove = async (id) => { const r = await confirmCancelReservation(); if (r.isConfirmed) { await deleteReservation(id); await showDeletedAlert(); load(); } };

    const filtered = items.filter(x => filter === 'all' ? true : x.estado === filter);

    return <div className='p-6 max-w-6xl mx-auto'>
        <Navbar user={user} onLogout={() => { logout(); location.href = '/login'; }} />
        <ReservationForm selected={selected} onSave={save} onCancel={() => setSelected(null)} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        {loading ? <Loader /> :
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filtered.map(r => <ReservationCard key={r.id} reservation={r} onDelete={remove} onFinish={finish} onEdit={setSelected} />)}
            </div>}
    </div>
}