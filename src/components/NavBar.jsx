export default function Navbar({ user, onLogout }) {
    return <div className='flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm mb-8 transition-shadow duration-300 hover:shadow-md'>
        {/* Left Side: User Avatar and Info */}
        <div className='flex items-center gap-3'>
            {/* User Icon Avatar */}
            <div className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </div>
            <div>
                <div className='text-xs text-gray-400 font-medium uppercase tracking-wider'>Usuario Activo</div>
                <div className='flex items-center gap-2 flex-wrap'>
                    <span className='font-bold text-gray-800 text-base'>{user?.nombre}</span>
                    <span className='text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100'>
                        Turno: {user?.turno}
                    </span>
                </div>
            </div>
        </div>

        {/* Right Side: Logout Button */}
        <button onClick={onLogout} className='flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 active:scale-95 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-sm font-semibold border border-rose-100 shadow-sm'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Cerrar sesión
        </button>
    </div>
}