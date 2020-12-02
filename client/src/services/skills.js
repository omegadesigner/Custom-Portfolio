import api from './apiConfig';

export const getAllSkills = async () => {
    const resp = await api.get(`/skills`);
    return resp.data;
}

export const getOneSkill = async (id) => {
    const resp = await api.get(`/skills/${id}`);
    return resp.data;
}

export const postSkill = async (skillData) => {
    const resp = await api.post(`/skills`, {skill: skillData});
    return resp.data;
}

export const putSkill = async (id, skillData) => {
    const resp = await api.put(`/skills/${id}`, {skill: skillData});
    return resp.data;
}

export const destroySkill = async (id) => {
    const resp = await api.delete(`/skills/${id}`);
    return resp;
}