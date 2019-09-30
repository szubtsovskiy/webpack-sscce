import {Elm} from "../../elm/Two.elm";

(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  Elm.Two.init({node: root});
})();
