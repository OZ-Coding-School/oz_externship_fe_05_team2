import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { availableCourseListMock } from "@/mocks/data/enrollment-data";
import { http, HttpResponse } from "msw";

const getAvailableCourseshandler = http.get(
  `${MSW_BASE_URL}${API_PATHS.accounts.availableCourses}`,
  () => {
    return HttpResponse.json(availableCourseListMock);
  }
);

export const enrollmentHandlers = [getAvailableCourseshandler];
