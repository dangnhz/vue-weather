import axios from 'axios'
const apiKey = '9934ac46472fdb312772f5e07f526e49';
const apiUrl = "https://api.darksky.net/forecast";
module.exports = async (req, res) => {
    let lat = req.query.lat;
    let long = req.query.long;
    if (!lat || !long) return res.status(400).json({ error: "Bad request" });
    try {
      const response = await axios.get(`${apiUrl}/${apiKey}/${lat},${long}`);
      if (response) {
        res.json(response.data);
      }
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }