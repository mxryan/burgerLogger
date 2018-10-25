document.querySelectorAll(".devour-btn").forEach((each) => {
  each.addEventListener("click", (e) => {
    
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
  }).then((d)=>{
    console.log(d);
  }).catch((e)=>{
    console.log(e);
  });
  location.reload();
});


