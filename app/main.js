import Backbone from "backbone";
import Wookie from "./wookie";

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  window.wookie = new Wookie();
  Backbone.history.start();
})
