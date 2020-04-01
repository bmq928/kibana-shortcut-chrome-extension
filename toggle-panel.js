document.addEventListener('keydown', event => {
  if (!isKibanaPage()) return
  whenCtrlAndSemiPressed(event, () => togglePanel())
})

function whenCtrlAndSemiPressed(event, cb) {
  if (event.ctrlKey && event.keyCode === 186) {
    cb()
  }
}

function isKibanaPage() {
  return document.body.getAttribute('id') === 'kibana-app'
}

function togglePanel() {
  const [_,queryPanel, resultPanel] = document.querySelectorAll('textarea')
  const focused = document.activeElement

  if (focused !== queryPanel) return queryPanel.focus()
  resultPanel.focus()
}
