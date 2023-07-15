const AbstractManager = require("./AbstractManager");

class BirdManager extends AbstractManager {
  constructor() {
    super({ table: "bird" });
  }

  updateBird(bird) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE bird_id = ?`,
      [bird.name, bird.bird_id]
    );
  }

  addBird(bird) {
    return this.database.query(
      `insert into ${this.table} (name, description, food, size, weight, song ) values (?, ?, ?, ?, ?, ?)`,
      [
        bird.name,
        bird.description,
        bird.food,
        bird.size,
        bird.weight,
        bird.song,
      ]
    );
  }
}

module.exports = BirdManager;
