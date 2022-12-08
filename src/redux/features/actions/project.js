import { selectProject } from "../../selector";
import { pending, rejected, resolved } from "../reducers/project";
import { PENDING } from "../reducers/status";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://devchalenger-portfolio-backend.vercel.app/",
});

export const loadProject = () => {
  return async (dispatch, getState) => {
    const status = selectProject(getState()).status;
    if (status === PENDING) {
      return setTimeout(() => {
        dispatch(rejected());
      }, 20000);
    }
    dispatch(pending());
    try {
      const data = await instance.get("api/project");
      dispatch(resolved(data.data));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
};
