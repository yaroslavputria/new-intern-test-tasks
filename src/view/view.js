'use strict';
define(function () {
  function View() {

  }

  View.prototype.render = function () {
    var h1 = document.createElement('h1');
    h1.textContent = 'View works :)';
    document.body.appendChild(h1);
    console.log('Render');

    var form = document.createElement('form');
    utForName.type = 'text';
    form.innerHTML = `
    <label> lang:<br>
    <select name="lang" id="lang">
    <option value="JSON">JSON</option> 
    <option value="JavaScript">JavaScript</option>
    <option value="Text">Text</option>
    </select>
    </label><br>
    <label> type:<br>
    <select name="type" id="type">
    <option value="application/json">application/json</option> 
    <option value="application/javascript">application/javascript</option>
    <option value="text/plain">text/plain</option>
    </select>
    </label><br>
    <label> user name:<br>
    <input type = "text" id="userName">
    </label><br>
    <button type="button" id="sendRequest">Send</button>`;
    document.body.appendChild(form);
  };

  return View;
});
