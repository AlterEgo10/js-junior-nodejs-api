const express = require("express");
const router = express.Router(); 

const Project = require('../models/project');

router.get('/', async (req, res) =>{
  
  if(req.query.id !== undefined) {
    return;
  }
  const projects = await Project.find();
  res.json(projects);
})
  
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    await project.save();
    res.json(project);
    return;
  }
  res.status(400);
  res.end();
});

  router.post("/", async function (req, res) {
    try {
      const project = new Project(req.body);
      if (await project.save()) {
        res.json({ result: true, ...project.toObject()});
      } else {
        throw new Error("Не удалось сохранить проект в БД.");
      }
    } catch (err) {
 
      res.json({ result: "false" });
    }
  
  });
  
  router.put("/:id", async function (req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        upsert: true,
        overwrite: true,
        runValidators: true,
      });
      if (project && project.isNew === false) {
        res.status(204);
        res.end();
        return;
      } else {
        res.setHeader("Location", `/api/projects/${req.params.id}`);
        res.status(201);
        res.end();
        return;
      }
    } catch (err) {
 
      res.status(400);
      res.end();
      return;
    }
  });
  
  router.patch("/:id", async function (req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (project) {
        res.status(200);
        res.json(project);
        return;
      }
    } catch (err) {

      res.status(400);
      res.end();
      return;
    }
    res.status(400);
    res.end();
    return;
  });
  
  router.delete("/:id", async function (req, res) {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (project) {
      res.status(204);
      res.end();
      return;
    }
    res.status(400);
    res.end();
  });

module.exports = router;