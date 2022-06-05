const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getResponses: (req, res) => {
    sequelize
      .query(`select * from responses;`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  createResponse: (req, res) => {
    let { body } = req.body;

    sequelize
      .query(
        `insert into responses (body)
      values ('${body}');`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  seed: (req, res) => {
    sequelize
      .query(
        `
              drop table if exists responses;
  
              create table responses (
                  id serial primary key, 
                  body varchar
              );
  
              insert into responses (body)
              values ('It is certain.'),
                ('It is decidedly so.'),
                ('Without a doubt.'),
                ('Yes - Definitely.'),
                ('You may rely on it.'),
                ('As I see it, yes.'),
                ('Most likely.'),
                ('Outlook good.'),
                ('Yes.'),
                ('Signs point to yes.'),
                ('Reply hazy, try again.'),
                ('Ask again later.'),
                ('Better not tell you now.'),
                ('Cannot predict now.'),
                ('Concentrate and ask again.'),
                ('Dont count on it.'),
                ('My reply is no.'),
                ('My sources say no.'),
                ('Outlook not so good.'),
                ('Very doubtful.'),
                ('Is that really what you want to know?'),
                ('Why are you the way that you are?');
          `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
