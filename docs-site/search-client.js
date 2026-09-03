// Progressive enhancement for the search box in the sidebar nav (Layout.tsx).
// No framework, no build step of its own — copied as-is into dist/docs/assets/
// by scripts/build-docs.mjs. Loads /docs/assets/search-index.json once, then
// filters client-side as the user types (§32 of the spec).
;(function () {
  var form = document.querySelector('[data-docs-search]')
  if (!form) return
  var input = form.querySelector('input')
  var results = form.querySelector('.search-results')
  var index = null

  function ensureIndex() {
    if (index) return Promise.resolve(index)
    return fetch('/docs/assets/search-index.json')
      .then(function (r) {
        return r.json()
      })
      .then(function (data) {
        index = data
        return data
      })
      .catch(function () {
        index = []
        return index
      })
  }

  function render(matches, query) {
    results.innerHTML = ''
    if (!query) {
      results.hidden = true
      return
    }
    if (!matches.length) {
      var empty = document.createElement('li')
      empty.className = 'search-empty'
      empty.textContent = 'Aucun résultat pour « ' + query + ' ».'
      results.appendChild(empty)
      results.hidden = false
      return
    }
    matches.slice(0, 12).forEach(function (m) {
      var li = document.createElement('li')
      var a = document.createElement('a')
      a.href = m.url
      var section = document.createElement('span')
      section.className = 'search-result-section'
      section.textContent = m.section || 'Accueil'
      a.appendChild(section)
      a.appendChild(document.createTextNode(m.title))
      li.appendChild(a)
      results.appendChild(li)
    })
    results.hidden = false
  }

  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase()
    if (!query) {
      render([], '')
      return
    }
    ensureIndex().then(function (data) {
      var matches = data.filter(function (p) {
        return p.title.toLowerCase().indexOf(query) !== -1 || p.excerpt.toLowerCase().indexOf(query) !== -1
      })
      render(matches, query)
    })
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault()
  })

  document.addEventListener('click', function (e) {
    if (!form.contains(e.target)) results.hidden = true
  })
})()
