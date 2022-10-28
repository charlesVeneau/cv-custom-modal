import e from"react";import{NavLink as t}from"react-router-dom";const l=()=>e.createElement("div",{className:"modal-isValid"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))),o=()=>e.createElement("div",{className:"modal-closeBtn"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})));!function(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===l&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".modal-block{background-color:rgba(42,42,42,.75);height:100vh;overflow:hidden;position:fixed;top:0;width:100%;z-index:50}.modal-block,.modal-elt{align-items:center;display:flex;justify-content:center}.modal-elt{background-color:#fff;flex-direction:column;height:auto;position:relative;width:75%}.modal-closeBtn{height:1.5rem;position:absolute;right:.5rem;top:.5rem;width:1.5rem}.modal-isValid{color:#3ba546;height:100px;width:100px}");const a=({isOpen:a,toggleModal:i,content:n})=>{if(a)return e.createElement("div",{onClick:e=>{e.target.classList.contains("modal-block")&&i()},id:"modal-block",className:"modal-block"},e.createElement("div",{id:"modal-elt",className:"modal-elt"},e.createElement(o,{onClick:()=>i()}),e.createElement(l,null),e.createElement("h3",{className:"modal-title"},n.modalTitle),e.createElement("p",null,n.modalText),e.createElement(t,{to:n.link,className:"modal-link",onClick:()=>i()},n.linkText)))};export{a as Modal};
