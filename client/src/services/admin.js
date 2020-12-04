import api from './apiConfig';

export const editAdmin = async (id, adminData) => {
    const resp = await api.put(`/admins/${id}`, {admin: adminData});
    return resp.data;
}