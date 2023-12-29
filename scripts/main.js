// get references
// containers
const app = document.querySelector("#app");

// STEP #3:
function getNotes() {
  return JSON.parse(localStorage.getItem("stickyNotes") || "[]");
}

function saveNotes(notes) {
  localStorage.getItem("stickyNotes", JSON.stringify(notes));
}

function addNote() {
  const getNotes = getNotes();
}

// STEP #2: create elements  and append where it is necessary
// ----------------------------------------------------------
function appContent() {
  const div = createElement("div", "app-content");

  div.appendChild(stickyHead());
  div.appendChild(createTextArea());
  div.appendChild(stickyBottom());

  return div;
}

function stickyHead() {
  const section = createElement("section", "sticky-note");
  section.classList.add("sticky-head");

  section.appendChild(addStickyNote());
  section.appendChild(dotStickyNote());
  section.appendChild(closeStickyNote());

  return section;
}

function stickyBottom() {
  const section = createElement("section", "sticky-note");
  section.classList.add("sticky-bottom");

  section.appendChild(bold());
  section.appendChild(italic());
  section.appendChild(underline());
  section.appendChild(strikethrough());

  return section;
}

/**
 *
 *
 *
 */
function addStickyNote() {
  const plus = createElement("button", "sticky-btn");
  plus.classList.add("plus");
  plus.textContent = "+";

  plus.addEventListener("click", () => {
    // append app content to the app
    app.appendChild(appContent());

    // return app content
    return appContent();
  });

  return plus;
}

/**
 *
 *
 *
 */

function dotStickyNote() {
  const dots = createElement("button", "sticky-btn");
  dots.classList.add("dots");
  dots.textContent = "...";

  return dots;
}

function closeStickyNote() {
  const close = createElement("button", "sticky-btn");
  close.classList.add("close");
  close.textContent = "x";

  return close;
}

function createTextArea(id, content) {
  const txtAr = createElement("textarea", "notes");
  txtAr.placeholder = "Take note...";
  content = txtAr.placeholder;
  txtAr.value = content;

  return txtAr;
}

function bold() {
  const btn = createElement("button", "sticky-btn");
  btn.classList.add("bold");
  btn.textContent = "B";

  return btn;
}

function italic() {
  const btn = createElement("button", "sticky-btn");
  btn.classList.add("italic");
  btn.textContent = "I";

  return btn;
}

function underline() {
  const btn = createElement("button", "sticky-btn");
  btn.classList.add("underline");
  btn.textContent = "U";

  return btn;
}

function strikethrough() {
  const btn = createElement("button", "sticky-btn");
  btn.classList.add("strikethrough");
  btn.textContent = "ab";

  return btn;
}

// STEP #1: function to create function to create an element
// and can add a class if that element needs one
function createElement(tag, className) {
  const elmnt = document.createElement(tag);
  className ? elmnt.classList.add(className) : tag;

  return elmnt;
}

app.appendChild(appContent());
