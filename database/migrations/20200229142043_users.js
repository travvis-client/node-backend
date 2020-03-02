exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl
      .string("email")
      .notNullable()
      .unique();

    tbl.string("password");

    tbl.string("company_logo");

    tbl.string("company_website");

    tbl.string("company_name");

    tbl.string("company_number");

    tbl.string("company_location");

    tbl.boolean("admin").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
