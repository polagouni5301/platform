const normalizePath = (path = "") => {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
};

const resolveAppOrigin = (port) => {
  if (typeof window === "undefined") {
    return `http://localhost:${port}`;
  }

  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:${port}`;
};

export const getCandidateAppUrl = (path = "") =>
  `${resolveAppOrigin(8081)}${normalizePath(path)}`;

export const getInterviewAppUrl = (path = "") =>
  `${resolveAppOrigin(8082)}${normalizePath(path)}`;
