const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "football.json");

function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const raw = fs.readFileSync(DATA_FILE);
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const createFootball = (req, res) => {
  const data = readData();
  const newTeam = {
    id: Date.now(),
    name: req.body.name,
    country: req.body.country || "",
    coach: req.body.coach || "",
  };
  data.push(newTeam);
  writeData(data);
  res.status(201).json(newTeam);
};

const getFootball = (req, res) => {
  const data = readData();
  res.json(data);
};

const getFootballById = (req, res) => {
  const data = readData();
  const team = data.find((t) => t.id == req.params.id);
  if (!team) return res.status(404).json({ error: "Topilmadi" });
  res.json(team);
};

const updateFootball = (req, res) => {
  const data = readData();
  const team = data.find((t) => t.id == req.params.id);
  if (!team) return res.status(404).json({ error: "Topilmadi" });

  team.name = req.body.name || team.name;
  team.country = req.body.country || team.country;
  team.coach = req.body.coach || team.coach;

  writeData(data);
  res.json(team);
};

const deleteFootball = (req, res) => {
  let data = readData();
  const index = data.findIndex((t) => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Topilmadi" });

  const deleted = data.splice(index, 1);
  writeData(data);

  res.json({ deleted });
};

module.exports = {
  createFootball,
  getFootball,
  getFootballById,
  updateFootball,
  deleteFootball,
};
