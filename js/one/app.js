import {Elm} from "../../elm/One.elm";

(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  Elm.One.init({node: root});
})();
