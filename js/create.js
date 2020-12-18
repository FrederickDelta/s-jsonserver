// javascript for create.html
const form = document.querySelector("form")

const createPost = async (e) => {
  e.preventDefault();

  const post = {
    title: form.title.value,
    body: form.body.value,
    likes: 0
  }
  console.log(post);
  await fetch("http://localhost:3000/posts/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post)
  })

  window.location.replace("/");
}

form.addEventListener("submit", createPost);