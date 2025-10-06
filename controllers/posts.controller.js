import { postfunction } from "../functions/functions.js";

export async function createPost(req, res) {
  try {
    const response = await postfunction.create(req.body);
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllPosts(req, res) {
  try {
    const response = await postfunction.getAllPosts();
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function getOnePost(req, res) {
  try {
    const { id } = req.params;
    const response = await postfunction.getOnePost(id);
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function deletePost(req, res) {
  try {
    const { id } = req.params;
    const response = await postfunction.deletePost(id);
    return res.json({ message: `${id} post deleted`, response });
  } catch (err) {
    console.log(err);
  }
}

export async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const response = await postfunction.updatePost(id, req.body);
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
}
