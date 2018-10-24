const toEatDisplay = document.querySelector("#to-eat-list");
const eatenDisplay = document.querySelector("#eaten-list");

// when devoured button is clicked, the associated burger should move down to next list

document.querySelectorAll(".devour-btn").forEach((each) => {
  each.addEventListener("click", (e) => {
    console.log("registered a click");
    const data = { id: e.target.value };
    $.ajax({
      type: "POST",
      url: "/",
      data: data
    });
    location.reload();
  });
});

document.querySelector("#sub-btn").addEventListener("click", () => {
  const burger_name = document.querySelector("#new-input").value;
  const data = { name: burger_name }
  $.ajax({
    type: "POST",
    url: "/new",
    data: data
  });
  location.reload();
});


