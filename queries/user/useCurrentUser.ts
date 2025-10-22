import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "@/lib/axiosInstance";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.me],
    queryFn: () => axios.get("/api/me").then((res) => res.data),
  });
};
