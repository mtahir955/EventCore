import { API_BASE_URL } from "@/config/apiConfig";

export const resolveFileUrl = (path?: string) => {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;

  const base = API_BASE_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");

  return `${base}/${cleanPath}`;
};
