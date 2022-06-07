const courses = [
    {
    name: "Complete ReactJS course",
    price: "5.2"
    },

    {
        name: "Complete Angular course",
        price: "5.4"
        },

        {
            name: "Complete Python course",
            price: "1.0"
            },

            {
                name: "Complete Django course",
                price: "2.0"
                },

                {
                    name: "Complete Full-Stack course",
                    price: "5.0"
                    },

                    {
                        name: "Complete JAVA course",
                        price: "4.74"
                        },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach(course => {

      const li = document.createElement("li");
      li.classList.add("list-group-item");

      const name = document.createTextNode(course.name);
      li.appendChild(name);

      const span = document.createElement("span");
      span.classList.add("float-right");

      const price = document.createTextNode("$ " + course.price);
      span.appendChild(price);
      li.append(span);
      ul.appendChild(li);

    })
} 

generateList();

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price);
    generateList();
});
