const apiAdapter = require("../../apiAdapter");

const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    const cloudinary = await api.get("/cloudinary");
    return res.json(cloudinary.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED")
      res.status(500).json({ status: "error", message: "service unavailable" });

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
