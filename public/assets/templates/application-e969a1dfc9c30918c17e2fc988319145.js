Ember.TEMPLATES.application=Ember.Handlebars.template(function(s,e,t,a,l){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,Ember.Handlebars.helpers),l=l||{};var n,o,r,h,i="",u=t.helperMissing,c=this.escapeExpression;return l.buffer.push('    <div class="container">\n      <div class="row row-offcanvas row-offcanvas-right">\n        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">\n          <div class="list-group">\n            <a href="#" class="list-group-item active">Link</a>\n            <a href="#" class="list-group-item">Link</a>\n            '),o={},r={},h={hash:{},contexts:[e],types:["ID"],hashContexts:r,hashTypes:o,data:l},l.buffer.push(c((n=t.outlet||e&&e.outlet,n?n.call(e,"left-sidebar",h):u.call(e,"outlet","left-sidebar",h)))),l.buffer.push('\n          </div>\n        </div><!--/span-->\n        <div class="col-xs-9 col-sm-9">\n          '),o={},r={},h={hash:{},contexts:[e],types:["ID"],hashContexts:r,hashTypes:o,data:l},l.buffer.push(c((n=t.outlet||e&&e.outlet,n?n.call(e,"callout",h):u.call(e,"outlet","callout",h)))),l.buffer.push("\n          "),o={},r={},h={hash:{},contexts:[e],types:["ID"],hashContexts:r,hashTypes:o,data:l},l.buffer.push(c((n=t.outlet||e&&e.outlet,n?n.call(e,"jumbo",h):u.call(e,"outlet","jumbo",h)))),l.buffer.push("\n          "),o={},r={},h={hash:{},contexts:[e],types:["ID"],hashContexts:r,hashTypes:o,data:l},l.buffer.push(c((n=t.outlet||e&&e.outlet,n?n.call(e,"main",h):u.call(e,"outlet","main",h)))),l.buffer.push("\n        </div><!--/span-->\n\n      </div><!--/row-->\n      <footer>\n        <p>&copy; OpenSnourceReportCard 2014</p>\n      </footer>\n    </div><!--/.container-->\n"),i});