exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("users")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          {
            id: 1,
            email: "ijd.irving@gmail.com",
            password: "password",
            admin: 1
          },
          {
            id: 2,
            email: "contact@duranirving.com",
            password: "password",
            admin: 0,
            company_logo:
              "https://www.duranirving.com/static/media/cartoon.72f7f183.jpg",
            company_website: "duranirving.com",
            company_name: "Fixmylife Designs",
            company_number: "+13472655234",
            company_location: "New York"
          },
          {
            id: 3,
            email: "ijd.irving2@gmail.com",
            password: "password",
            admin: 0,
            company_logo:
              "https://www.duranirving.com/static/media/cartoon.72f7f183.jpg",
            company_website: "duranirving.com",
            company_name: "Fixmylife Designs",
            company_number: "+13472655234",
            company_location: "New York"
          }
        ]);
      })
  );
};
