import { Status, Test } from "../../types";

export const getLink = (id: Test["id"], status: Status) =>
  `/${status === Status.DRAFT ? "finalize" : "results"}/${id}`;

export const getLinkName = (status: Status) =>
  status === Status.DRAFT ? "Finalize" : "Results";

export const getLinkClassName = (status: Status) =>
  status === Status.DRAFT ? "finalize" : "results";
