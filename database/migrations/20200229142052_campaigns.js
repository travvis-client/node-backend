exports.up = function(knex) {
  return knex.schema.createTable("campaigns", tbl => {
    tbl.increments();

    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.string("campaign_name").notNullable();

    tbl.integer("people_per_day").notNullable();

    tbl.integer("campaign_days").notNullable();

    tbl.string("campaign_city").notNullable();

    tbl.string("campaign_area").notNullable();

    tbl.time("start_time").notNullable();

    tbl.time("end_time").notNullable();

    tbl.integer("price").notNullable();

    tbl.string("file_type");

    tbl.string("file_link");

    tbl.string("coupons");

    tbl.boolean("paid");

    tbl.boolean("active").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("campaigns");
};
