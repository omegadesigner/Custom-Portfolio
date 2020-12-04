import api from './apiConfig';

export const getAllMessages = async () => {
    const resp = await api.get(`/messages`);
    return resp.data;
}

export const createMessage = async (messageData) => {
    const resp = await api.post(`/messages`, {message: messageData});
    return resp.data;
}

export const deleteMessage = async (id) => {
    const resp = await api.delete(`/messages/${id}`);
    return resp;
}