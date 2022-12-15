chrome.storage.local.get(["scriptActive"], (result) => {
  const scriptActive: boolean = result.scriptActive.statusCode === 200;
});

const renderStatus = (main: HTMLElement) => {

  const statusDiv = createHtml("DIV", ["status-container"]);
  const pagesH4 = createHtml("H4", ["status-container__mainHeader"]);
  const pagesH5 = createHtml("H5", ["status-container__secondHeader"]);

  pagesH4.innerHTML = `✅ The request to Hello Retail succeeded: 200 - OK</span>`;

  /*
  chrome.storage.local.get(["pagesDiv"], (result) => {
    if (result.pagesDiv.isPresent) {
      pagesH4.innerHTML = `✅ Detected Pages div with ID: <span>${result.pagesDiv.id}</span>`;
      pagesH5.innerHTML = `✅ Supplied data/path: <span>${result.pagesDiv.hierarchies}</span>`;
    } else {
      pagesH5.innerText = "No pages div detected on this page";
    }
  });
  */
  statusDiv.appendChild(pagesH4).after(pagesH5);
  main.appendChild(statusDiv);
};

const buildExtension = (main: HTMLElement, header: HTMLElement) => {
  const h1 = createHtml("H1", ["hr-header__main-header"]);
  const h3 = createHtml("H3", ["hr-header__sub-header"]);
  h1.innerText = "This page is using Hello Retail. ✅";
  h3.innerText = "Hello Retail main script detected on this page.";
  header.appendChild(h1).after(h3);
  renderStatus(main);
};


const createHtml = (type: string, classArr?: string[], id?: string) => {
  const div = document.createElement(type);
  if (classArr) div.classList.add(...classArr);
  if (id) div.id = id;
  return div;
};

const b: HTMLElement = document.body;
const header = createHtml("HEADER", ["hr-header"]);
const main = createHtml("MAIN", ["hr-main"]);

b?.appendChild(header);
b?.appendChild(main);

buildExtension(main, header);
