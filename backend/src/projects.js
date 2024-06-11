const postgres = require("postgres");
let sql = postgres("postgresql://postgres:rudy123@localhost:5432/test");

/* 
The following file contains the code to 
assemble the projects table, display functions and functions to 
perform CRUD Operations
 */

async function addProjectsTable() {
  try {
    // Drop the Projects table if it exists and other dependencies
    await sql`
      DROP TABLE IF EXISTS Projects CASCADE;
    `;

    // Drop the ENUM type if it exists
    await sql`
      DROP TYPE IF EXISTS project_status;
    `;

    // Create ENUM for project status
    await sql`
      CREATE TYPE project_status AS ENUM('Hiring', 'Completed', 'Ongoing');
    `;

    // Create the Projects table
    await sql`
      CREATE TABLE Projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        body VARCHAR(200),
        description VARCHAR(200),
        tags VARCHAR(200),
        status project_status,
        created_date DATE,
        last_modified TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE OR REPLACE FUNCTION update_last_modified()
      RETURNS trigger
      LANGUAGE 'plpgsql'
      AS $$
      BEGIN
        NEW.last_modified = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$;
    `;
    await sql`
      CREATE OR REPLACE TRIGGER trigger_update_last_modified
      BEFORE UPDATE
      ON Projects
      FOR EACH ROW
      EXECUTE FUNCTION update_last_modified();
    `;
    console.log("Table Created");

    //Inserting dummy data to ensure working
    await sql`
        INSERT INTO Projects (id, name, body, description, tags, status, created_date, last_modified)
        VALUES (
                ${1001}, 
                ${"Tech Club Website"}, 
                ${"Official Website of UOWD Tech Club"}, 
                ${"-"}, 
                ${"Web Development"}, 
                ${"Ongoing"}, 
                ${"2024-04-19"}, 
                NOW()
        );
    `;
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

addProjectsTable();

async function createProject(projects) {
  const {
    id,
    name,
    body,
    description,
    tags,
    status,
    created_date,
    last_modified,
  } = projects;

  try {
    await sql`
      INSERT INTO Projects (id, name, body, description, tags, status, created_date, last_modified)
      VALUES (${id}, ${name}, ${body}, ${description}, ${tags}, ${status}, ${created_date}, ${last_modified});
    `;
  } catch (err) {
    console.error("Error creating project:", err);
  }
}

async function fetchProjects() {
  try {
    const projects = await sql`
      SELECT * FROM Projects;
    `;
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
  }
}

async function fetchProjectsByID(id) {
  try {
    const project = await sql`
      SELECT * FROM Projects WHERE id = ${id};
    `;
    return project[0];
  } catch (err) {
    console.error("Error fetching project by ID:", err);
  }
}

module.exports = { createProject, fetchProjects, fetchProjectsByID };
