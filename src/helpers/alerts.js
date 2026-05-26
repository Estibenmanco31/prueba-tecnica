import Swal from 'sweetalert2';

export const showApiError = () => Swal.fire('Error de API', '', 'error');

export const confirmCancelReservation = () => Swal.fire({
  title: '¿Estás seguro de cancelar esta reserva?',
  showCancelButton: true
});

export const showDeletedAlert = () => Swal.fire('Eliminada', '', 'success');

export const showFinishedAlert = () => Swal.fire('Finalizada', 'La reserva ha sido finalizada', 'success');

export const showUpdatedAlert = () => Swal.fire('Actualizada', 'La reserva ha sido modificada con éxito', 'success');

export const showCreatedAlert = () => Swal.fire('Creada', 'La reserva ha sido registrada con éxito', 'success');
