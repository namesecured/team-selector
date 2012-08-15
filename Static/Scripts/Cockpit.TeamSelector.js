/* cockpit javascript helper */
Cockpit = window.Cockpit || {};

Cockpit.TeamSelector = Cockpit.TeamSelector || (function () {
  var prefix, attached, detached;
  return {
    init : function(prefix, attached, detached){
      this.prefix = prefix;
      this.attached = attached;
      this.detached = detached;
    }
  };
})();
