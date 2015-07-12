import $ from "jquery";
import Backbone from "backbone";
import Wookie from "./wookie";

Backbone.$ = $

$(function(){
  window.wookie = new Wookie();
  Backbone.history.start();
});
