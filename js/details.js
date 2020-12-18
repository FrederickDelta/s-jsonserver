// javascript for details.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  let url = `http://localhost:3000/posts/${id}`;

  const res = await fetch(url)
  const post = await res.json();

  let template = `
    <div class="post">
      <h2>${post.title}</h2>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body}</p>
    </div>
  `;
  container.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderDetails());

window.addEventListener("click", async (e) => {
  let url = `http://localhost:3000/posts/${id}`;

  await fetch(url, {
    method: "DELETE"
  })
  
  window.location.replace("/");
});