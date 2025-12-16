import { http, HttpResponse } from "msw";
import { examHandlers } from "@/mocks/handlers/exam";

export const handlers = [
  http.get("/api/hello", () => {
    return HttpResponse.json({ message: "Hello, world!", code: 200 });
  }),
  ...examHandlers,
];
