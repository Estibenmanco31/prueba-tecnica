export default function Navbar({ user, onLogout }) {
    return <div className='flex flex-col md:flex-row justify-between gap-2 mb-6'>
        <div>Host: <b>{user?.nombre}</b> ({user?.turno})</div>
        <button onClick={onLogout} className='bg-red-500 text-white px-3 py-2 rounded'>Cerrar sesión</button>
    </div>
}