const baseUrl = "http://20.84.89.186/";

export const api = `${baseUrl}/api/v1`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
