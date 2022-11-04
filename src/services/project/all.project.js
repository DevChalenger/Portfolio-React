import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800/api",
});

const fetchAllProject = async () => {
  try {
    const data = await instance.get("/project/");

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAllProject;
