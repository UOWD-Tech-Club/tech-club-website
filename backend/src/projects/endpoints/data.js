const {
  createProject,
  fetchProjects,
  fetchProjectsByID,
} = require("../../projects.js");

//const auth = require("../../middleware/auth.js");

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const router = require("express-promise-router")();

router.get("/", async (req, res) => {
  let result = await fetchProjects();
  console.log("Authorization Header:", req.headers.authorization);
  res.status(200);
  res.send({ message: "Projects fetched", data: result });
});

router.get("/:projectId", async (req, res) => {
  let id = req.params.projectId;
  const result = await fetchProjectsByID(id);
  res.send({ message: "Project fetched", data: result });
});

router.post("/", jsonParser, async (req, res) => {
  let project = req.body;
  let result = await createProject(project);
  res.send({ message: "Project added", data: result });
});

module.exports = router;
