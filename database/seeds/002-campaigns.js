exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("campaigns")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("campaigns").insert([
          {
            user_id: 2,
            campaign_name: "example name",
            people_per_day: 1000,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "21:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://www.duranirving.com/static/media/cartoon.72f7f183.jpg",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "example name 1",
            people_per_day: 1000,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "21:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://www.duranirving.com/static/media/cartoon.72f7f183.jpg",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "example name 2",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://www.duranirving.com/static/media/cartoon.72f7f183.jpg",
            paid: 0,
            active: 1
          }
        ]);
      })
  );
};
