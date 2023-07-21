const AbstractManager = require("./AbstractManager");

class BirdManager extends AbstractManager {
  constructor() {
    super({ table: "bird" });
  }

  updateBird(bird) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, food = ?, size = ?, weight = ?, song = ?, is_protected = ? WHERE bird_id = ?`,
      [
        bird.name,
        bird.description,
        bird.food,
        bird.size,
        bird.weight,
        bird.song,
        bird.is_protected,
        bird.bird_id,
      ]
    );
  }

  addBird(bird) {
    return this.database.query(
      `insert into ${this.table} (name, image, description, food, size, weight, song, is_protected ) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        bird.name,
        bird.url,
        bird.description,
        bird.food,
        bird.size,
        bird.weight,
        bird.song,
        bird.is_protected,
      ]
    );
  }
}

module.exports = BirdManager;
