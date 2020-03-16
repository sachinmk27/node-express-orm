const express = require("express");

const router = express.Router();
const { Project, Item } = require("../models");

router.get("/", (req, res, next) => {
  Item.findAll()
    .then(items => {
      res.json(items);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    let { content, projectId } = req.body;
    let project = await Project.findByPk(projectId);
    let item = await Item.create({ content });
    item = await item.setProject(project);
    return res.json(item);
  } catch (err) {
    next(err);
  }
});

router.get("/:itemId", (req, res, next) => {
  let { itemId } = req.params;
  Item.findByPk(itemId)
    .then(item => res.json(item))
    .catch(next);
});

router.put("/:itemId", (req, res, next) => {
  let { itemId } = req.params;
  let { content } = req.body;
  Item.update(
    { content },
    {
      where: {
        id: itemId
      }
    }
  )
    .then(() => Item.findByPk(itemId))
    .then(item => res.json(item))
    .catch(next);
});

router.delete("/:itemId", (req, res, next) => {
  let { itemId } = req.params;
  Item.destroy({
    where: {
      id: itemId
    }
  })
    .then(() => res.json({ id: itemId }))
    .catch(next);
});
module.exports.itemRouter = router;
