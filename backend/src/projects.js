//projects.js

const pool = require('./db.js')

/* 
The following file contains the code to 
assemble the projects table, display functions and functions to 
perform CRUD Operations
 */

async function createTable() {
  //ENUM for project status

  await pool.query(`
    CREATE TYPE project_status as ENUM('Hiring', 'Completed','Ongoing'); 
    
  `);

  //This code creates the table

  await pool.query(`

        CREATE TABLE Projects(
            id integer,
            name varchar(50) ,
            body varchar(200) ,
            description varchar(200),
            tags varchar(200),
            status project_status,
            created_date date,
            last_modified timestamp without time zone DEFAULT CURRENT_TIMESTAMP
        );
    `);

  //This code is a trigger and a function code applied whenever a change
  //is made on the Projects Table

  await pool.query(`CREATE OR REPLACE FUNCTION update_last_modified()
            RETURNS trigger
            LANGUAGE 'plpgsql'
                    
            AS $$

            BEGIN 	
                NEW.last_modified = CURRENT_TIMESTAMP;
                RETURN NEW;

            END;
            $$;
    `)

    await pool.query(`CREATE OR REPLACE TRIGGER trigger_update_last_modified
                BEFORE UPDATE 
                ON Projects
                FOR EACH ROW
                EXECUTE FUNCTION update_last_modified();
    `)
};


async function createProject(id,name,body, description, tags, status, created_date, last_modified){
    //This inserts an entry into the table
    await pool.query(`
        INSERT INTO Projects VALUES(${id},${name},${body},${description},${tags},${status},${created_date},${last_modified});
    `);
}

/* Now some of the fetch functions to get a particular Project*/

async function fetchProjects(){ 
    const projects = await pool.query(`
        SELECT * FROM Projects;
    `)
    return projects.rows[0];
}

async function fetchProjectsByID(id){
    const project = await pool.query(`
        SELECT * FROM Projects WHERE id = ${id};
    `)

    return project.rows[0]
}