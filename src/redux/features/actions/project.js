import { selectProject } from "../../selector";
import { pending, rejected, resolved } from "../reducers/project";
import { PENDING } from "../reducers/status";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800/api",
});

export const loadProject = () => {
  return async (dispatch, getState) => {
    dispatch(pending());
    try {
      const data = await instance.get("/project/");
      dispatch(resolved(data.data));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
};
