export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const MSW_BASE_URL = "https://msw.local";

const API_PREFIX = "/api/v1";

const VERIFICATION_API_PREFIX = "/accounts/verification";

export const API_PATHS = {
  exams: {
    deployments: {
      base: `${API_PREFIX}/exams/deployments`,
      checkCode: (deploymentId: number) =>
        `${API_PREFIX}/exams/deployments/${deploymentId}/check-code`,
      questionList: (deploymentId: number) =>
        `${API_PREFIX}/exams/deployments/${deploymentId}`,
      cheating: (deploymentId: number) =>
        `${API_PREFIX}/exams/deployments/${deploymentId}/cheating`,
      status: (deploymentId: number) =>
        `${API_PREFIX}/exams/deployments/${deploymentId}/status`,
    },
    submissions: {
      base: `${API_PREFIX}/exams/submissions`,
      result: (submissionId: number) =>
        `${API_PREFIX}/exams/submissions/${submissionId}`,
    },
  },
  accounts: {
    login: `${API_PREFIX}/accounts/login`,
    findEmail: `${API_PREFIX}/accounts/find-email`,
    findPassword: `${API_PREFIX}/accounts/find-password`,
    checkNickname: `${API_PREFIX}/accounts/check-nickname`,
    signup: `${API_PREFIX}/accounts/signup`,
    kakaoLogin: `${API_PREFIX}/accounts/social-login/kakao`,
    kakaoCallback: `${API_PREFIX}/accounts/social-login/kakao/callback`,
    naverLogin: `${API_PREFIX}/accounts/social-login/naver`,
    naverCallback: `${API_PREFIX}/accounts/social-login/naver/callback`,
    availableCourses: `${API_PREFIX}/courses/available`,
    enrolledCourses: `${API_PREFIX}/accounts/me/enrolled-courses`,
    enrollStudent: `${API_PREFIX}/accounts/enroll-student`,
    verification: {
      sendEmail: `${API_PREFIX}${VERIFICATION_API_PREFIX}/send-email`,
      verfiyEmail: `${API_PREFIX}${VERIFICATION_API_PREFIX}/verify-email`,
      sendSMS: `${API_PREFIX}${VERIFICATION_API_PREFIX}/send-sms`,
      verfiySMS: `${API_PREFIX}${VERIFICATION_API_PREFIX}/verify-sms`,
    },
    me: `${API_PREFIX}/accounts/me`,
    refresh: `${API_PREFIX}/accounts/refresh`,
    changePassword: `${API_PREFIX}/accounts/change-password`,
    profileImage: `${API_PREFIX}/accounts/me/profile-image`,
    restore: `${API_PREFIX}/accounts/restore`,
  },
} as const;
