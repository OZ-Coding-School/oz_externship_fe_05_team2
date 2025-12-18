import { availableCourseListMock } from "@/mocks/data/enrollment-data";
import { http, HttpResponse } from "msw";

const getAvailableCourseshandler =
  //TODO: MSW_BASE_URL 추가
  http.get(`/api/v1/accounts/available-courses`, () => {
    return HttpResponse.json(availableCourseListMock);
  });

export const enrollmentHandlers = [getAvailableCourseshandler];
