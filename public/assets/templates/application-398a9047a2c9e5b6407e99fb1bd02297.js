Ember.TEMPLATES.application=Ember.Handlebars.template(function(s,t,e,a,l){this.compilerInfo=[4,">= 1.0.0"],e=this.merge(e,Ember.Handlebars.helpers),l=l||{};var n,o,h,r,i="",u=e.helperMissing,c=this.escapeExpression;return l.buffer.push('    <div class="container">\n      <div class="row row-offcanvas row-offcanvas-right">\n        <div class="col-xs-12 col-sm-9">\n          '),o={},h={},r={hash:{},contexts:[t],types:["ID"],hashContexts:h,hashTypes:o,data:l},l.buffer.push(c((n=e.outlet||t&&t.outlet,n?n.call(t,"callout",r):u.call(t,"outlet","callout",r)))),l.buffer.push("\n          "),o={},h={},r={hash:{},contexts:[t],types:["ID"],hashContexts:h,hashTypes:o,data:l},l.buffer.push(c((n=e.outlet||t&&t.outlet,n?n.call(t,"jumbo",r):u.call(t,"outlet","jumbo",r)))),l.buffer.push('\n          <div class="row">\n            '),o={},h={},r={hash:{},contexts:[t],types:["ID"],hashContexts:h,hashTypes:o,data:l},l.buffer.push(c((n=e.outlet||t&&t.outlet,n?n.call(t,"main",r):u.call(t,"outlet","main",r)))),l.buffer.push('\n          </div><!--/row-->\n        </div><!--/span-->\n\n        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">\n          <div class="list-group">\n            <a href="#" class="list-group-item active">Link</a>\n            <a href="#" class="list-group-item">Link</a>\n            '),o={},h={},r={hash:{},contexts:[t],types:["ID"],hashContexts:h,hashTypes:o,data:l},l.buffer.push(c((n=e.outlet||t&&t.outlet,n?n.call(t,"left-sidebar",r):u.call(t,"outlet","left-sidebar",r)))),l.buffer.push("\n            "),o={},h={},r={hash:{},contexts:[t],types:["ID"],hashContexts:h,hashTypes:o,data:l},l.buffer.push(c((n=e.outlet||t&&t.outlet,n?n.call(t,"right-sidebar",r):u.call(t,"outlet","right-sidebar",r)))),l.buffer.push("\n          </div>\n        </div><!--/span-->\n      </div><!--/row-->\n\n      <hr>\n\n      <footer>\n        <p>&copy; Company 2014</p>\n      </footer>\n\n    </div><!--/.container-->\n"),i});