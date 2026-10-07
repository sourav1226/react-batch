import api from "./axiosInstance";

export const getBatchNotices = (batchId) => {
  return api.get(`/batches/${batchId}/notices`);
};

export const createNotice = (batchId, title, content) => {
  return api.post(`/batches/${batchId}/notices`, {
    title,
    content,
  });
};

export const updateNotice = (batchId, noticeId, title, content) => {
  return api.put(`/batches/${batchId}/notices/${noticeId}`, {
    title,
    content,
  });
};

export const deleteNotice = (batchId, noticeId) => {
  return api.delete(`/batches/${batchId}/notices/${noticeId}`);
};