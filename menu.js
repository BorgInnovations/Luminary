
function topMenu_load() {
  document.getElementById("topMenu").innerHTML = '<ul><li><a href="https://borginnovations.com" target="_blank">B0RG</a></li><li><a class="nbus" onclick="showproducts()">Projects</a></li><li><a class="nbus" onclick="openL()">File</a></li><li><a class="nbus" onclick="showcontact()">Contact</a></li></ul>'
  document.getElementById('products').innerHTML = '<div class="card"><div class="card-heading"><h1>Projects.</h1> </div><div class="card-body"><div><h3>C0RT3X 01</h3><p>A human-centric research platform.</p><p><a href="https://borginnovations.com/c0rt3x.html"><button class="abus">Learn More</button></a></p><h3>Project Luminary</h3><p>Revisitng modern code standards.</p><p><a href="https://luminary.borginnovations.com"><button class="abus">Learn More</button></a></p><h3>Author</h3><p>A focused writing space.</p><p><a href="https://borginnovations.com/author.html"><button class="abus">Learn More</button></a></p>                <h3>Buy Me a Coffee</h3>  <p>Fighting the AI-slop is not free.</p> <p><a href="https://buymeacoffee.com/jborg_arts" target="_BLANK"><button class="obus" >Buy Me a Coffee</button></a></p></div></div></div>'
  console.log('Top menu factor loaded')
}

function footMenu_load() {
  document.getElementById("footMenu").innerHTML = '    <p style="text-align: center;"><a href="./index.html"><img src="./img/icons/BI_1.svg" style="width: 200px;padding: 15px;" alt=""></a></p><p style="text-align: center;">Organically coded in San Diego, CA</p><center><p><a class="a" href="https://buymeacoffee.com/jborg_arts" target="_blank"> <button class="obus">Buy me a coffee</button> </a></p><p><a class="a" href="./privacy.html">Privacy</a> | <a class="a" href="https://borginnovations.cronitorstatus.com/" target="_BLANK">Status</a></p></center><p style="text-align: center;">© 2026 Jacob Borg</p>  '
  console.log('Footer menu factor loaded')
}

function footMenu_load_alt() {
  document.getElementById("footMenu").innerHTML = '<p style="text-align: center;"><a href="./index.html"><img src="./img/icons/BorgRetroFuturism_4.svg" style="width: 200px;padding: 15px;" alt=""></a></p><p style="text-align: center;">Organically coded in San Diego, CA</p><center><p><a href="https://buymeacoffee.com/jborg_arts" target="_blank" class="a-alt"> Buy me a coffee </a></p><p><a class="a-alt" href="./privacy.html">Privacy</a> | <a class="a-alt" href="https://borginnovations.cronitorstatus.com/" target="_BLANK">Status</a></p></center><p style="text-align: center;">© 2026 Jacob Borg</p>  '
  console.log('Footer menu factor loaded')
}

function loadContact() {
  document.getElementById("contact").innerHTML = '<div class="card"><div class="card-heading"><h1>Contact.</h1></div ><div class="card-body"><center><iframe style="border: none; width: 95%; height: 701px" src="https://docs.getgrist.com/forms/b1EUs21w5g3cSCF67jrWbe/9"></iframe></center></div></div > '
  console.log('Contact factor loaded')
}

function openL() {
  document.getElementById("luminaryMenu").innerHTML = '<div class="card"><div class="card-heading"><h1>File.</h1> </div><div class="card-body"><div><h3> <a class="a" onclick="saveFile()">Download Project</a> </h3></div></div></div>';
  var x = document.getElementById("luminaryMenu");
  if (x.style.display === "none") {
     x.style.display = "block";

  } else {
     x.style.display = "none";

  }
}


console.log('All menu factors loaded')


