export type Toast =
  | SmallToast
  | BigToast
  | {
      id: number;
      status: "success" | "danger";
      text: string;
    };

export interface SmallToast {
  type: "small";
}

export interface BigToast {
  type: "big";
  title: string;
}
