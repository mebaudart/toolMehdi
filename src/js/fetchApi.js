const createNode = element => {
  return document.createElement(element);
};

const append = (parent, el) => {
  return parent.appendChild(el);
};

window.onload = () => {
  const ul = document.getElementById("list");
  const url = "https://api.myjson.com/bins/9l2ez";

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let elements = data.todos;

      return elements.map(element => {
        let li = createNode("li");

        if (element.complete) {
          li.classList += "completed";
        }

        li.addEventListener("click", () => {
          this.classList.toggle("completed");
        });

        li.innerHTML = element.label;

        append(ul, li);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
