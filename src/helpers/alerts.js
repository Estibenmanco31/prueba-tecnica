import Swal from 'sweetalert2';

export const showApiError = () => Swal.fire('Error de API', '', 'error');

export const confirmCancelReservation = () => Swal.fire({
  title: '¿Estás seguro de cancelar esta reserva?',
  showCancelButton: true
});

export const showDeletedAlert = () => Swal.fire('Eliminada', '', 'success');
