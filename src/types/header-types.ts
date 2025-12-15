import type { ReactNode } from "react";

export interface HeaderLinkProps {
  to: string;
  children: ReactNode;
}

export interface DropdownItemProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export interface UserMenuProps {
  onLogout: () => void;
}
