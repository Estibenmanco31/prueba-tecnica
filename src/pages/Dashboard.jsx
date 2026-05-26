import { useEffect, useState } from 'react';
import { showApiError, confirmCancelReservation, showDeletedAlert, showFinishedAlert, showUpdatedAlert, showCreatedAlert } from '../helpers/alerts';
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
    const [items, setItems] = useState([]), [loading, setLoading] = useState(true), [filter, setFilter] = useState('Todas'), [selected, setSelected] = useState(null);

    const load = async () => { try { setLoading(true); const { data } = await getReservations(); setItems(data); } catch (e) { await showApiError(); } finally { setLoading(false); } };
    useEffect(() => { load() }, []);

    const save = async (form) => {
        try {
            const payload = { ...form, cantidadPersonas: Number(form.cantidadPersonas), fechaHora: form.fechaHora || new Date().toISOString() };
            if (selected) {
                await updateReservation(selected.id, payload);
                await showUpdatedAlert();
            } else {
                await createReservation(payload);
                await showCreatedAlert();
            }
            setSelected(null);
            load();
        } catch (e) {
            await showApiError();
        }
    };
    const finish = async (id) => {
        try {
            await patchReservation(id, { estado: STATUS.FINISHED });
            await showFinishedAlert();
            load();
        } catch (e) {
            await showApiError();
        }
    };
    const remove = async (id) => { const r = await confirmCancelReservation(); if (r.isConfirmed) { await deleteReservation(id); await showDeletedAlert(); load(); } };

    const filtered = items.filter(x => filter === 'Todas' ? true : x.estado === filter);

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