// javascript for index.html
const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (keyword) => {
  let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if (keyword) {
    url += `&q=${keyword}`;
  }

  const res = await fetch(url);
  const posts = await res.json();
  console.table(posts);

  let template = "";
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">Read more...</a>
      </div>
    `
  });

  container.innerHTML = template;
}

// window.addEventListener("DOMContentLoaded", renderPosts);
// ❓ Not pass into event object
window.addEventListener("DOMContentLoaded", () => renderPosts());

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderPosts(searchForm.keyword.value.trim());
});