import streams from "../data";

export const ASSIGN_STREAM_TO_CAMERA = "ASSIGN_STREAM_TO_CAMERA";
const cams = streams.map((floor) => floor.cams.map((cam) => cam)).flat();

export default function camerasReducer(state = cams, action) {
  switch (action.type) {
    case "ASSIGN_STREAM_TO_CAMERA":
      return state.map((cam) => {
        if (cam.id === action.payload.idcamera) {
          return {
            ...cam,
            title: cams.filter((cam) => cam.id === action.payload.idstream)[0]
              .title,
            url: cams.filter((cam) => cam.id === action.payload.idstream)[0]
              .url,
          };
        }
        return cam;
      });
    default:
      return state;
  }
}

export const assignStreamToCamera = (idstream, idcamera) => ({
  type: "ASSIGN_STREAM_TO_CAMERA",
  payload: { idstream, idcamera },
});
