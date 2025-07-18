document.addEventListener("DOMContentLoaded", () => {
  // Expand/collapse folders
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const parent = toggle.parentElement;
      parent.classList.toggle("open");
    });
  });

  // Blog post display
  const links = document.querySelectorAll("a[data-post]");
  const posts = document.querySelectorAll(".blog-post");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Hide all posts
      posts.forEach(post => post.classList.remove("active"));

      const id = link.getAttribute("data-post");
      const target = document.getElementById(id);
      if (target) {
        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});
