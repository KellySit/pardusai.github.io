function loadList(jsonFile, listId, searchId) {
  fetch(jsonFile)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById(listId);
      const search = document.getElementById(searchId);

      function render(items) {
        list.innerHTML = "";
        items.forEach(item => {
          list.innerHTML += `
            <div class="resource">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              <a href="${item.link}">Read →</a>
            </div>
          `;
        });
      }

      render(data);

      search.addEventListener("input", e => {
        const q = e.target.value.toLowerCase();
        render(
          data.filter(i =>
            i.title.toLowerCase().includes(q)
          )
        );
      });
    });
}
