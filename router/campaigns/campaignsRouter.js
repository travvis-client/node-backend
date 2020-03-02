const router = require("express").Router();

const Campaigns = require("./campaignsModel");
const restricted = require("../auth/middleware/restrictedMiddleware");

router.get("/", (req, res) => {
  Campaigns.getAllCampaigns()
    .then(campaign => {
      res.status(200).json(campaign);
    })
    .catch(error => {
      res
        .status(500)
        .json({ req, error, message: "error retrieving all campaigns" });
    });
});

router.get("/:id", (req, res) => {
  Campaigns.findById(req.params.id)
    .then(campaign => {
      res.status(200).json(campaign);
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "we ran into an error retreving the campaign" });
    });
});

router.post("/", restricted, async (req, res) => {
  const campaign = req.body;
  campaign.paid = 0;
  campaign.active = 1;
  campaign.user_id = decodedToken.id;
  try {
    const inserted = await Campaigns.add(campaign);
    res.status(201).json(inserted);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "we ran into an error adding the campaign" });
  }
});
module.exports = router;
