import axios from 'axios';

const API = axios.create({ baseURL: 'https://6a15a2a691ff9a63de088688.mockapi.io' });

export const getReservations = () => API.get('/reservations');
export const createReservation = (d) => API.post('/reservations', d);
export const updateReservation = (id, d) => API.put(`/reservations/${id}`, d);
export const patchReservation = (id, d) => API.patch(`/reservations/${id}`, d);
export const deleteReservation = (id) => API.delete(`/reservations/${id}`);
