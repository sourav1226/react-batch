import api from './axiosInstance';

export const getBatchSchedules = async (batchId) => {
  const response = await api.get(`/batches/${batchId}/schedules`);
  return response.data;
};
export const getBatchScheduleCalendar = async (batchId) => {
  const response = await api.get(`/batches/${batchId}/schedules/calendar`);
  return response.data;
};
export const createBatchSchedule = async (batchId, scheduleData) => {
  const response = await api.post(
    `/batches/${batchId}/schedules`,
    scheduleData
  );
  return response.data;
};
export const getScheduleGeneratorOptions = async (batchId) => {
  const response = await api.get(
    `/batches/${batchId}/schedules/generate`
  );
  return response.data;
};
export const generateBatchSchedules = async (batchId, scheduleData) => {
  const response = await api.post(
    `/batches/${batchId}/schedules/generate`,
    scheduleData
  );
  return response.data;
};
export const updateBatchSchedule = async (
  batchId,
  scheduleId,
  scheduleData
) => {
  const response = await api.put(
    `/batches/${batchId}/schedules/${scheduleId}`,
    scheduleData
  );
  return response.data;
};
export const deleteBatchSchedule = async (batchId, scheduleId) => {
  const response = await api.delete(
    `/batches/${batchId}/schedules/${scheduleId}`
  );
  return response.data;
};
export const getAllSchedules = async (params = {}) => {
  const response = await api.get('/schedules', {
    params,
  });
  return response.data;
};
export const getBatchStudyMaterials = async (batchId) => {
  const response = await api.get(
    `/batches/${batchId}/study-materials`
  );
  return response.data;
};
export const uploadBatchStudyMaterial = async (batchId, title, file) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("file", file);

  const response = await api.post(
    `/batches/${batchId}/study-materials/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
export const deleteBatchStudyMaterial = async (batchId, materialId) => {
  const response = await api.delete(
    `/batches/${batchId}/study-materials/${materialId}`
  );
  return response.data;
};
export const downloadStudyMaterial = async (materialId) => {
  const response = await api.get(
    `/study-materials/${materialId}/download`,
    {
      responseType: "blob",
    }
  );

  return response.data;
};