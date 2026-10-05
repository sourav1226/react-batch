import api from "./axiosInstance";

export const getBatchStudents = (batchId) => {
  return api.get(`/batches/${batchId}/students`);
};

export const assignStudent = (batchId, userId) => {
  return api.post(`/batches/${batchId}/students/assign`, {
    user_id: userId,
  });
};

export const bulkAssignStudents = (batchId, userIds) => {
  const formData = new URLSearchParams();

  userIds.forEach((userId, index) => {
    formData.append(`user_ids[${index}]`, userId);
  });

  return api.post(
    `/batches/${batchId}/students/bulk-assign`,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export const transferStudent = (
  batchId,
  userId,
  fromBatchId,
  toBatchId
) => {
  const formData = new URLSearchParams();

  formData.append("user_id", userId);
  formData.append("from_batch_id", fromBatchId);
  formData.append("to_batch_id", toBatchId);

  return api.post(
    `/batches/${batchId}/students/transfer`,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export const getBatches = () => {
  return api.get("/batches", {
    params: {
      status: "active",
    },
  });
};

export const sendLoginGuide = (batchId, userId) => {
  return api.post(
    `/batches/${batchId}/students/${userId}/send-login-guide`
  );
};

export const removeStudent = (batchId, userId) => {
  return api.delete(`/batches/${batchId}/students/${userId}/remove`);
};