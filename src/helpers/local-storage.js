export const getUser = ()=> JSON.parse(localStorage.getItem('host'));
export const login = (data)=> localStorage.setItem('host', JSON.stringify(data));
export const logout = ()=> localStorage.removeItem('host');