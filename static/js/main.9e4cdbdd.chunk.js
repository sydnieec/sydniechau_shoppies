(this.webpackJsonpsydniechau_shoppies=this.webpackJsonpsydniechau_shoppies||[]).push([[0],{33:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),r=n.n(i),a=n(26),c=n.n(a),o=(n(33),n(8)),h=n(9),d=n(11),l=n(10),u=n(7),j=n(12),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Search Results"}),this.props.searchedMovieList.map((function(t){return Object(s.jsx)(b,{onNominate:e.props.onNominate,searchedMovie:t,currentIdList:e.props.currentIdList},t.id)}))]})}}]),n}(i.Component),b=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e,t=this;return this.props.currentIdList.includes(this.props.searchedMovie.id)||this.props.currentIdList.length>=5?(console.log("WHEE"),e=Object(s.jsx)(m,{})):(console.log("NOMINATEDS",this.props.nominationsList,this.props.searchedMovie),e=Object(s.jsx)("button",{onClick:function(){return t.props.onNominate(t.props.searchedMovie.name,t.props.searchedMovie.year,t.props.searchedMovie.id)},className:"btn btn-success btn-sm m-2",children:"Nominate"})),Object(s.jsxs)("div",{class:"d-flex justify-content-between",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("span",{style:{fontsize:30},children:[this.props.searchedMovie.name," - ",this.props.searchedMovie.year]})}),Object(s.jsx)("div",{children:e})]})}}]),n}(i.Component);function m(e){return Object(s.jsx)("button",{type:"button",class:"btn btn-secondary btn-sm m-2",disabled:!0,children:"Nominate"})}var v=n(16),f=n.n(v),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Nominations"}),this.props.nominationsList.map((function(t){return Object(s.jsx)(x,{onDelete:e.props.onDelete,nominatedMovie:t},t.id)}))]})}}]),n}(i.Component),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{class:"d-flex justify-content-between",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("span",{style:{fontsize:30},children:[this.props.nominatedMovie.name," , ",this.props.nominatedMovie.year]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.nominatedMovie.id)},className:"btn btn-danger btn-sm m-2",children:"Remove"})})]})}}]),n}(i.Component),y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={searchedMovieList:[],nominationsList:[],currentIdList:[],searchField:"",url:"http://www.omdbapi.com/?apikey=f7b87fd5&s="},e.addurl=function(t){f.a.get(e.state.url+t).then((function(t){for(var n=[],s=0;s<t.data.Search.length;s++)n.push({id:t.data.Search[s].imdbID,name:t.data.Search[s].Title,year:t.data.Search[s].Year});e.setState({searchedMovieList:n})})).catch((function(e){console.log(e),alert(e)}))},e.handleSubmit=function(t){e.addurl(e.state.searchField),t.preventDefault(),e.setState({searchField:""})},e.handleChange=function(t){e.setState({searchField:t.target.value})},e.handleDelete=function(t){var n=e.state.nominationsList.filter((function(e){return e.id!==t}));e.setState({nominationsList:n});var s=e.state.currentIdList.filter((function(e){return e!==t}));e.setState({currentIdList:s})},e.onNominate=function(t,n,s){e.state.nominationsList.push({id:s,name:t,year:n}),e.setState({nominationsList:e.state.nominationsList}),e.state.currentIdList.push(s),e.setState({currentIdList:e.state.currentIdList})},e}return Object(h.a)(n,[{key:"render",value:function(){var e;return this.state.currentIdList.length>=5&&(e=Object(s.jsx)("div",{style:{color:"#11cbd7"},children:Object(s.jsx)("h1",{style:{color:"#fffff",fontWeight:"bold"},className:"text-center mt-2",children:"You have finished Nominations!"})})),Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)("h1",{style:{fontWeight:"bold"},className:"text-center mt-2",children:"The Shoppies"}),e,Object(s.jsxs)(u.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(u.a.Group,{children:[Object(s.jsx)(u.a.Label,{children:" Movie Title"}),Object(s.jsx)(u.a.Control,{type:"",placeholder:"Search for movie...",onChange:this.handleChange,value:this.state.searchField}),Object(s.jsx)(u.a.Text,{className:"text-muted"})]}),Object(s.jsx)(j.a,{variant:"primary",type:"submit",children:"Search"})]}),Object(s.jsx)(p,{onNominate:this.onNominate,searchedMovieList:this.state.searchedMovieList,currentIdList:this.state.currentIdList}),Object(s.jsx)(O,{onDelete:this.handleDelete,nominationsList:this.state.nominationsList})]})}}]),n}(i.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),r(e),a(e)}))};n(55),i.Component;c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.9e4cdbdd.chunk.js.map