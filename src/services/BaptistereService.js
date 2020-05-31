import axios from "axios";

export const fetchBaptisteres = () => {
  axios
    .get("http://localhost:3003/baptisteries-cache")
    .then((res) => {
      setBaptisteries(res.data);
      axios
        .get("http://localhost:3003/baptisteries-update")
        .then((res) => {
          // TODO marche pas
          if (res.data.status === "updated") {
            console.log("chouette : ", res.data.data);
            setBaptisteries(res.data.data);
          }
        })
        .catch((e) => {
          console.error("error while fetching baptisteries from cache", e);
        });
    })
    .catch((e) => {
      console.error("error while fetching baptisteries from cache", e);
    });
};
