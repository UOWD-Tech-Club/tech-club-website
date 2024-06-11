const postgres = require("postgres");
let sql = postgres("postgresql://postgres:1234@localhost:5432"); // will use psql environment variables

//await sql`drop database test;`

await sql`create database test;`;

sql = postgres("postgresql://postgres:1234@localhost:5432/test");

await sql`CREATE TABLE newsletter (
    newsletter_id SERIAL PRIMARY KEY, 
    newsletter_title TEXT,
    newsletter_body TEXT,
    tags TEXT,
    author TEXT,
    length INT,
    reading_time INT, 
    created_time TIMESTAMP WITH TIME ZONE DEFAULT CAST(TIMEOFDAY() AS TIMESTAMP WITH TIME ZONE)
  );`;

await sql`INSERT INTO newsletter (newsletter_title, newsletter_body, tags, author, length, reading_time) VALUES ('Tech Trends', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies felis in purus tempus, vitae vestibulum ex tincidunt. Duis rhoncus arcu et urna tempor, at fringilla justo pretium. Integer convallis, eros vitae ultrices pulvinar, urna dui varius dui, id sagittis felis ligula sed justo. Nam tempus turpis et quam sodales vestibulum.', 'technology, trends, coding', 'John Doe', 300, 1);`;

await sql`CREATE TABLE subscriber (
  subscriber_id SERIAL PRIMARY KEY, 
  email TEXT,
  created_time TIMESTAMP WITH TIME ZONE DEFAULT CAST(TIMEOFDAY() AS TIMESTAMP WITH TIME ZONE),
  is_verified BOOLEAN DEFAULT false
)`;
