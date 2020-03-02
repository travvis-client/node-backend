const db = require("../../database/dbConfig");

module.exports = {
  add,
  remove,
  update,
  getUsersCampaigns,
  getAllCampaigns,
  findById
};

const selectedInfo = [
  "campaigns.id",
  "user_id",
  "users.email",
  "users.company_logo",
  "users.company_website",
  "users.company_name",
  "users.company_number",
  "users.company_location",
  "campaigns.campaign_name",
  "campaigns.people_per_day",
  "campaigns.campaign_days",
  "campaigns.campaign_city",
  "campaigns.campaign_area",
  "campaigns.start_time",
  "campaigns.end_time",
  "campaigns.price",
  "campaigns.file_type",
  "campaigns.file_link",
  "campaigns.coupons",
  "campaigns.paid",
  "campaigns.active",
  "campaigns.created_at",
  "campaigns.updated_at"
];

function getAllCampaigns() {
  return db("campaigns")
    .join("users", "campaigns.user_id", "=", "users.id")
    .select(selectedInfo);
}

function findById(id) {
  return db("campaigns")
    .where("campaigns.id", id)
    .first()
    .join("users", "campaigns.user_id", "=", "users.id")
    .select(selectedInfo);
}

function getUsersCampaigns(id) {
  return db("campaigns")
    .where("campaigns.user_id", id)
    .join("users", "campaigns.user_id", "=", "users.id")
    .select(selectedInfo);
}

async function add(campaign) {
  const [id] = await db("campaigns").insert(campaign, "id");

  return findById(id);
}

function remove(id) {
  return db("campaigns")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("campaigns")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}
