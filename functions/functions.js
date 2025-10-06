import pool from "../config/database.js";
import { slugify } from "./slugify.js";

export const postfunction = {
  create: async function (data) {
    const { id, title, content, user_id } = data;
    const slug = slugify(title);
    const text = `INSERT INTO posts(id, title, content, slug, user_id)
                  VALUES($1, $2, $3, $4, $5) RETURNING *`;
    const values = [id, title, content, slug, user_id];
    const res = await pool.query(text, values);
    return res.rows[0];
  },

  getAllPosts: async function () {
    const text = `SELECT * FROM posts`;
    const result = await pool.query(text);
    return result.rows;
  },

  getOnePost: async function (id) {
    const text = `SELECT * FROM posts WHERE id=$1`;
    const result = await pool.query(text, [id]);
    return result.rows[0];
  },

  deletePost: async function (id) {
    const text = `DELETE FROM posts WHERE id=$1 RETURNING *`;
    const result = await pool.query(text, [id]);
    return result.rows[0];
  },

  updatePost: async function (id, data) {
    const fields = [];
    const values = [];
    let idx = 1;

    for (const [key, value] of Object.entries(data)) {
      fields.push(`${key}=$${idx}`);
      values.push(value);
      idx++;
    }

    values.push(Number(id));
    const query = `UPDATE posts
                   SET ${fields.join(", ")}, updated_at=NOW()
                   WHERE id=$${idx}
                   RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0];
  },
};
