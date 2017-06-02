$(document).ready(function(){

  // your code here!

    $("#photo-form").on("submit", function(event){
      event.preventDefault()
      console.log("form submitted")
      let urlImg = $("#image_url").val()
      let caption = $("#caption").val()
      let imgCap = `<h2> ${caption}</h2>`
      let picture = `<img src="${urlImg}" >`

      // let addComment =
      // let comments = `<ul> ${comments.render()} </ul>`

      $("#photo-list").append(picture)
      $("#photo-list h1").append(caption)

  })

})
