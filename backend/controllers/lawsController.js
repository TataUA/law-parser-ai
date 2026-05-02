import fs from "fs";
import path from "path";

const dataDir = path.join("data-json");

export const getAllLaws = (req, res) => {
  try {
    const files = fs.readdirSync(dataDir);

    const laws = files.map((file) => {
      const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
      const parsed = JSON.parse(content);

      return {
        id: parsed.id,
        title: parsed.title,
        tags: parsed.tags,
      };
    });

    res.json(laws);
  } catch (err) {
    res.status(500).json({ error: "Failed to load laws" });
  }
};

export const getLawById = (req, res) => {
  try {
    const { id } = req.params;

    const filePath = path.join(dataDir, `law${id}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Law not found" });
    }

    const content = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(content));
  } catch (err) {
    res.status(500).json({ error: "Failed to load law" });
  }
};
