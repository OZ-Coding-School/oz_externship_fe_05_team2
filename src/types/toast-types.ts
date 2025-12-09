export interface BaseToast {
  id: number;
  status: "success" | "danger";
  text: string;
}
export interface SmallToast extends BaseToast {
  variant: "small";
}

export interface BigToast extends BaseToast {
  variant: "big";
  title: string;
}
export type Toast = SmallToast | BigToast;
