import { IRidesResponse, IRide } from "../types";
import api from "./index";

interface GetRidesParams {
  page?: number;
  limit?: number;
}

const buildQueryParams = (searchData: IRidesResponse<IRide>): string => {
  const queryParams = new URLSearchParams(
    Object.entries(searchData)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, value instanceof Date ? value.toISOString() : encodeURIComponent(value)])
  );

  return queryParams.toString();
};

export const getrides = async ({ page = 1, limit = 1 }: GetRidesParams) => {
  try {
    // const queryParams = buildQueryParams(searchData);
    const response = await api.get(`rides?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rides:", error);
  }
};

const ridesAPI = {
  getrides,
};

export default ridesAPI;
