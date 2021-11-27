import type Prisma from "@prisma/client";

export type Action =
  | { type: "addProduct"; payload: Prisma.Product }
  | { type: "deleteProduct"; payload: Prisma.Product }
  | { type: "openMenu" }
  | { type: "closeMenu" };

export type State = {
  readonly products: Array<Prisma.Product>;
  readonly totalPrice: number;
  readonly isOpen: boolean;
};
