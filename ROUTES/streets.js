const express = require("express");
const router = express.Router();
const Street = require("../models/street");

router.get("/", async (req, res) => {
  try {
    const street = await Street.find();
    res.json(street);
  } catch (err) {
    res.json({ mesage: err });
  }
});
router.get("/:lat/:long", async (req, res) => {
  try {
    const location = await {
      type: "Point",
      coordinates: [req.params.lat, req.params.long],
    };
    const street = Street.find({
      geometry: {
        $geoIntersects: {
          $geometry: location,
        },
      },
    }).then((doc) => res.json(doc));
  } catch (err) {
    res.json({ mesage: err });
  }
});
module.exports = router;
