const sql = require("./db.js");

/* @createDB function to create db
 * @createEventsTable function to create Events table
 * @getEvents function to retreive all events
 * @createEvent function to insert an event record
 * @params : id,ename,ebody,edesc,etags,time_conducted,room_number,status
 *
 * @getEventByName function to get event by its name
 * @params : name of the event
 */

async function createDB(name) {
  await sql`
   CREATE DATABASE ${name}
  `;
}

async function createEventsTable() {
  //CREATE ENUM TYPE FOR STATUS
  await sql`
     CREATE TYPE status_state AS ENUM ('ended','upcoming');

    `;
  // CREATE EVENTS TABLE
  await sql`
        CREATE TABLE Events(
            eid INT PRIMARY KEY,
            ename VARCHAR(255),
            ebody VARCHAR(255),
            edesc VARCHAR(500),
            etags VARCHAR(255),
            time_conducted DATE,
            room_number REAL,
            status status_state,
            created_timestamp timestamptz not null
                default current_timestamp,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()	
        );
    `;
}

async function getEvents() {
  const events = await sql`
        select * from events
    `;
    return events;
}

async function getEventById(id) {
  const events = await sql`
        select * from events where eid = ${id}
    `;
    return events;
}

async function createEvent(event) {
  // INSERT ROW INTO EVENTS

  // Destructuring the events object
  const {
    id,
    ename,
    ebody,
    edesc,
    etags,
    time_conducted,
    room_number,
    status,
  } = event;

  await sql`
      insert into Events values(${id},${ename},${ebody},${edesc},${etags},${time_conducted},${room_number},${status})
    `;
}

module.exports = {createDB , createEventsTable, getEvents, getEventById, createEvent };
