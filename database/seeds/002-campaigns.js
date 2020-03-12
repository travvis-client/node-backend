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
              "https://images-na.ssl-images-amazon.com/images/I/818xRxhwd8L.jpg",
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
              "https://public-v2links.adobecc.com/f8dcbe57-3094-4dca-5a05-efb49f093667/component?params=component_id%3A179c5d92-f4c8-449b-8f2d-8d0b6a61378c&params=version%3A0&token=1584070934_da39a3ee_51533f321a8fac7b5a9bf9c00df93b3aefabb8ed&api_key=CometServer1",
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
              "https://public-v2links.adobecc.com/f8dcbe57-3094-4dca-5a05-efb49f093667/component?params=component_id%3A18271e4b-3ca5-4dd7-905e-59a306cbe152&params=version%3A0&token=1584070934_da39a3ee_51533f321a8fac7b5a9bf9c00df93b3aefabb8ed&api_key=CometServer1",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "Los Bros",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://public-v2links.adobecc.com/f8dcbe57-3094-4dca-5a05-efb49f093667/component?params=component_id%3A312d1b98-cbc5-41e0-b13d-4c70a27dd22e&params=version%3A0&token=1584070934_da39a3ee_51533f321a8fac7b5a9bf9c00df93b3aefabb8ed&api_key=CometServer1",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "Mi Medellin",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://blog.amigofoods.com/wp-content/uploads/2019/02/colombian-food.jpg",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "Mas Arepas",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://nextstreet.com/wp-content/uploads/2018/05/Arepazo2.jpg",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "Brokenulock",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://www.brokenulock.com/static/media/brokenulocklogo.b3cff15a.png",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "fixmylife",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://assets.bigcartel.com/theme_images/40699339/fixed_gear_new_york.png?auto=format&fit=max&h=200&w=600",
            paid: 0,
            active: 1
          },
          {
            user_id: 3,
            campaign_name: "Mas Arepas",
            people_per_day: 100,
            campaign_days: 30,
            campaign_city: "bogota(col)",
            campaign_area: "zona norte",
            start_time: "22:00:00",
            end_time: "11:00:00",
            price: 663,
            file_type: "image",
            file_link:
              "https://nextstreet.com/wp-content/uploads/2018/05/Arepazo2.jpg",
            paid: 0,
            active: 1
          },
        ]);
      })
  );
};
