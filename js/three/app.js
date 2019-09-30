import {Elm} from "../../elm/Three.elm";

(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  Elm.Three.init({node: root});
})();
