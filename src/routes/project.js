const express = require("express");

const router = express.Router();
const { Project, Item } = require("../models");

router.get("/", (req, res, next) => {
  Project.findAll()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  let name = req.body.name;
  Project.create({ name })
    .then(project => res.json(project))
    .catch(next);
});

router.get("/:projectId", (req, res, next) => {
  let { projectId } = req.params;
  Project.findByPk(projectId)
    .then(project => res.json(project))
    .catch(next);
});

router.put("/:projectId", (req, res, next) => {
  let { projectId } = req.params;
  let { name } = req.body;
  Project.update(
    { name },
    {
      where: {
        id: projectId
      }
    }
  )
    .then(() => Project.findByPk(projectId))
    .then(project => res.json(project))
    .catch(next);
});

router.delete("/:projectId", (req, res, next) => {
  let { projectId } = req.params;
  Project.destroy({
    where: {
      id: projectId
    }
  })
    .then(() => res.json({ id: projectId }))
    .catch(next);
});
module.exports.projectRouter = router;
