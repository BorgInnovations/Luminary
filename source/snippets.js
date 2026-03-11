

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

  { id: 1, title: 'LuminaryCSS HTML Support', search_content:'LuminaryCSS luminary support css install luminary', content: '<link rel="stylesheet" href="https://luminary.borginnovations.com/luminary.css"><script src="https://luminary.borginnovations.com/luminary.js"></script>', author: 'Borg', language: 'HTML, CSS, JavaScript'},
  { id: 2, title: 'LuminaryCSS HTML Card', search_content:'LuminaryCSS luminary styled card', content: '<section class="card"><div class="card-heading"></div><div class="card-body"></div></section>', author: 'Borg', language: 'HTML, CSS'},
  { id: 3, title: 'LuminaryCSS HTML Card Alt Style', search_content:'LuminaryCSS luminary styled card Alt Style', content: '<section class="card-alt"><div class="card-heading-alt"></div><div class="card-body-alt"></div></section>', author: 'Borg', language: 'HTML, CSS'},
  { id: 4, title: 'LuminaryCSS Orange Button', search_content:'LuminaryCSS luminary button html orange styled styles link a', content: '<a class="obus">obus Button</a>', author: 'Borg', language: 'HTML, CSS'},
  { id: 5, title: 'LuminaryCSS Blue Button', search_content:'LuminaryCSS luminary button html blue styled styles link a', content: '<a class="bbus">obus Button</a>', author: 'Borg', language: 'HTML, CSS'},
  { id: 6, title: 'LuminaryCSS Green Button', search_content:'LuminaryCSS luminary button html green styled styles link a', content: '<a class="gbus">obus Button</a>', author: 'Borg', language: 'HTML, CSS'},
  { id: 7, title: 'LuminaryCSS Deafult Button', search_content:'LuminaryCSS luminary button html white styled styles link a', content: '<a class="abus">obus Button</a>', author: 'Borg', language: 'HTML, CSS'},
  { id: 8, title: 'LuminaryCSS Link', search_content:'LuminaryCSS luminary button html default basic styled styles link a', content: '<a class="a">default link</a>', author: 'Borg', language: 'HTML, CSS'},




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
      listItem.innerHTML = '<div class="synapses"><span class="" style="font-size: 12pt;">' + result.title + '</span> <p style="font-size: 8pt;" id="sid">Language: ' + result.language + ' | Author: ' + result.author + '</p></div>';
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