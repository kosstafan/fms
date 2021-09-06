import { apiDadata } from "./dadata";

export const getFmsItems = (params) => {
    return apiDadata.post("fms_unit", params);
};
