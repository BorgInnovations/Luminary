

const cortex_core = ['jstor', 'jstor 2']

function conduct_search() {

  search_var = document.getElementById("search_var").value
  console.log(search_var)
  vs = search_var.split('')
  document.getElementById("search_var_result").innerHTML = cortex_core.includes(search_var)

  document.getElementById("search_output").innerHTML = cortex_core.filter(vs[0])
}

  /*
      { id: x, title: '', search_content:'', content: '', author: '', language: ''},


  */

const documents = [

    { id: 100001, title: "HTML5 Document", search_content:"html 5 document html5 boilerplate", content: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>INSERT TITLE HERE</title></head></html>', author: "Borg", language: "HTML", license: 'N/A'},
    { id: 100002, title: "Javascript Remote Script", search_content:"remote script javascript", content: '<script src=""></script> <noscript></noscript>', author: "Borg", language: "HTML, Javascript", license: "N/A"},
    { id: 100003, title: "Image", search_content:"img image html", content: '<img src="" alt="">', author: "Borg", language: "HTML", license: "N/A"},
    { id: 100004, title: "Article", search_content:"HTML Article Tag", content: '<article id="" class=""><h2>Title</h2><p>body</p></article>', author: "Borg", language: "HTML", license: "N/A"},
    { id: 100005, title: "Blockquote", search_content:"html blockquote ", content: '<blockquote cite="https://luminary.borginnovations.com/"><p>This is a basic HTML blockquote</p><p><i>-Borg</i></p></blockquote>', author: "Borg", language: "HTML", license: "N/A"},
    { id: 100005, title: "SEO Starter", search_content:"html seo boilerplate", content: '<meta property="og:image" content=""><meta name="twitter:image" content=""><meta name="twitter:card" content="summary"><meta name="twitter:title" content=""><meta property="og:type" content="website"><meta name="description" content=""><meta name="twitter:description" content="">', author: "Borg", language: "HTML", license: "N/A"},
    { id: 100006, title: "Embed", search_content:"html embed iframe", content: '<embed type="text/html" src="https://borginnovations.com/" width="500" height="200">', author: "Borg", language: "HTML", license: "N/A"},
    { id: 100007, title: "Iframe", search_content:"html iframe embed", content: '<iframe src="https://borginnovations.com/" title="Borg Innovations"></iframe>', author: "Borg", language: "HTML", license: "N/A"},

    //Luminary
    { id: 200001, title: 'Install LuminaryCSS', search_content:'LuminaryCSS luminary support css install luminary', content: '<link rel="stylesheet" href="https://luminary.borginnovations.com/luminary.css"><script src="https://luminary.borginnovations.com/luminary.js"></script>', author: 'Borg', language: 'HTML, CSS, JavaScript', license: 'MIT'},
    { id: 200002, title: 'LuminaryCSS HTML Card', search_content:'LuminaryCSS luminary styled card', content: '<section class="card"><div class="card-heading"></div><div class="card-body"></div></section>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200003, title: 'LuminaryCSS HTML Card Alt Style', search_content:'LuminaryCSS luminary styled card Alt Style', content: '<section class="card-alt"><div class="card-heading-alt"></div><div class="card-body-alt"></div></section>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200004, title: 'LuminaryCSS Orange Button', search_content:'LuminaryCSS luminary button html orange styled styles link a', content: '<a class="obus">obus Button</a>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200005, title: 'LuminaryCSS Blue Button', search_content:'LuminaryCSS luminary button html blue styled styles link a', content: '<a class="bbus">bbus Button</a>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200006, title: 'LuminaryCSS Green Button', search_content:'LuminaryCSS luminary button html green styled styles link a', content: '<a class="gbus">gbus Button</a>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200007, title: 'LuminaryCSS Default Button', search_content:'LuminaryCSS luminary button html white styled styles link a', content: '<a class="abus">abus Button</a>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    { id: 200008, title: 'LuminaryCSS Link', search_content:'LuminaryCSS luminary button html default basic styled styles link a', content: '<a class="a">default link</a>', author: 'Borg', language: 'HTML, CSS', license: 'MIT'},
    //Bulma
    { id: 300001, title: "Install Bulma CSS", search_content:"CSS Library Bulma Install", content: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">', author: "Jeremy Thomas", language: "HTML, CSS",license: 'MIT'},

    //Bootstrap
    { id: 400001, title: "Install Bootstrap", search_content:"CSS Javascript Bootstrap Install Library", content: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>', author: "Bootstrap Team", language: "HTML, CSS, Javascript", license: 'MIT'},


]; 

const pre = 'https://'
function performSearch() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const results = search(query);
  displayResults(results);
}

function search(query) {
  return documents.filter(doc => doc.search_content.toLowerCase().includes(query));
}

function displayResults(results) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';
  
    results.forEach(result => {
      const listItem = document.createElement('a');
      listItem.innerHTML = '<div class="synapses"><span class="" style="font-size: 12pt;">' + result.title + '</span> <p style="font-size: 8pt;" id="sid">Language: ' + result.language + ' | Author: ' + result.author + ' | License: '+result.license+'</p></div>';
      listItem.style = 'color: var(--mercury); border-bottom: 0px solid var(--mercury); text-decoration: none;';
  
      listItem.onclick = function() {
        result_copy(result.content);
      };
  
      resultsElement.appendChild(listItem);
    });
  }
  
  function result_copy(content) {
    navigator.clipboard.writeText(content);
  }