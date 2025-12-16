export const MSW_BASE_URL = "https://msw.local";

const API_PREFIX = "/api/v1";

export const API_PATHS = {
  exams: {
    deployments: {
      base: `${API_PREFIX}/exams/deployments`,
      list: (page: number) => `${API_PREFIX}/exams/deployments?page=${page}`,
    },
  },
} as const;
