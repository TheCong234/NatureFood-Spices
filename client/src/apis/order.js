import { apiClient } from "./config.api";
import { OrderV1 } from "../constants/endpoints.const";

export const createCustomerOrderApi = async (data) => {
    const result = await apiClient.post(OrderV1.CREATE_CUSTOMER_ORDER, data);
    return result.data;
};
