(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(215)},215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),o=n(8),i=n(2),s=n(3),u=n(4);function m(){var e=Object(s.a)(["\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tdisplay: flex;\n\twidth: fit-content;\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tbox-sizing: unset;\n"]);return m=function(){return e},e}function d(){var e=Object(s.a)(["\ndisplay: flex;\nflex-direction: column-reverse;\n  width: ","em;\n  height: ","em;\n  padding: 2px 6px 2px 2px\n  background-color: ",";\n"]);return d=function(){return e},e}function p(){var e=Object(s.a)(["\n\twidth: ","em;\n\theight: ","em;\n\tborder-radius: ","em;\n\tborder: 2px solid\n\t\t",";\n\tbackground-color: ",";\n\tmargin-top: 1px;\n"]);return p=function(){return e},e}var h={red:"hsl(348, 100%, 61%)",blue:"hsl(217, 71%, 53%)"},f=u.a.div(p(),2,2,2,function(e){var t=e.color;return t.includes("-win")?"black":h[t]},function(e){var t=e.color;return h[t.replace("-win","")]}),E=u.a.div(d(),2,14,function(e){return e.index%2===0?"hsl(0, 0%, 96%)":"hsl(0, 0%, 86%)"}),g=u.a.div(m()),w=function(e){var t=e.grid,n=e.onDrop;return r.a.createElement(g,null,t.map(function(e,t){return r.a.createElement(E,{key:t,index:t,onClick:function(){return n&&n(t)}},e.map(function(e,t){return r.a.createElement(f,{key:t,color:e})}))}))},v=function e(t,n,a,r,l){var c=a.column,o=a.row;return!(!n[c]||n[c][o]!==t)&&(e(t,n,{column:c+1,row:o+r},r,(l=l||0)+1)||l>=3?(n[c][o]=t+"-win",!0):void 0)},b=function e(t,n,a,r){var l=a.column,c=a.row;if(!n[l]||n[l][c]!==t)return!1;var o=e(t,n,{column:l-1,row:c-r},r);return!1===o?{column:l,row:c}:o},k=function(e,t,n){return function(e,t,n){var a={column:n,row:t[n].length-1},r=b(e,t,a,-1);return v(e,t,r,-1)}(e,t,n)||function(e,t,n){var a={column:n,row:t[n].length-1},r=b(e,t,a,1);return v(e,t,r,1)}(e,t,n)||function(e,t,n){var a={column:n,row:t[n].length-1},r=b(e,t,a,0);return v(e,t,r,0)}(e,t,n)||function e(t,n,a){a=a||1;var r=n.length-a;return!(!n[r]||n[r]!==t)&&(4===a||e(t,n,a+1)?(n[r]=t+"-win",!0):void 0)}(e,t[n])},x=[[],[],[],[],[],[],[]],y=function(){return Math.random()>=.5?"red":"blue"},N=function(){var e=Object(a.useState)(x),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(y()),s=Object(i.a)(c,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(i.a)(d,2),h=p[0],f=p[1];return r.a.createElement("div",{className:"has-text-centered"},h?r.a.createElement("p",null,!0!==h?"The ".concat(u," player won!"):"Game over."," ","Click"," ",r.a.createElement("a",{href:"#!",onClick:function(){return m(y())||f(!1)||l(x)}},"here")," ","to play again."):r.a.createElement("p",null,"Is ",u," player turn!"),r.a.createElement(w,{grid:n,setGrid:l,onDrop:function(e){if(!(n[e].length>5||h)){var t=Object(o.a)(n);return t[e]=[].concat(Object(o.a)(t[e]),[u]),l(t),function(e){return e.reduce(function(e,t){return e&&6===t.length},!0)}(t)?f(!0):k(u,t,e)?f(u):void m("red"===u?"blue":"red")}}}))},j=(n(26),n(1)),A=n.n(j),C=function(e){var t=e.children,n=e.title,l=Object(a.useState)(!0),c=Object(i.a)(l,2),o=c[0],s=c[1];return r.a.createElement("section",{className:"section",style:{paddingBottom:0}},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,n+" ",o?r.a.createElement("a",{className:"has-text-danger is-size-5",href:"#!",onClick:function(){return s(!o)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-minus-circle"}))):r.a.createElement("a",{className:"has-text-success is-size-5",href:"#!",onClick:function(){return s(!o)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-plus-circle"})))),o&&t))},O=function(){return r.a.createElement(C,{title:"Gettin' started"},r.a.createElement("div",null,r.a.createElement("p",null,"First of all we have to use Create React App to make the boiler plate of our app."),r.a.createElement("pre",null,"$ npx create-react-app connect-four"),r.a.createElement("p",null,'And since we already are in the terminal lets go inside of the "connect-four" directory and install Styled Component.'),r.a.createElement("pre",null,"$ cd connect-four ",r.a.createElement("br",null),"$ npm i styled-components"),r.a.createElement("p",null,"Finally, lets clean up a little bit so we can start with our awesome game."),r.a.createElement("pre",null,"$ cd src ",r.a.createElement("br",null),"$ rm App.css App.test.js index.css logo.svg"),r.a.createElement("p",null,"Now change App.js to look like this:"),r.a.createElement(A.a,{className:"javascript"},"import React from 'react';\n\nconst App = () => {\n  return (\n\t <div>Connect Four</div>\n  );\n}\n\nexport default App;"),r.a.createElement("p",null,"And index.js to look like this:"),r.a.createElement(A.a,{className:"javascript"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\nserviceWorker.unregister();\n")))},S=function(){return r.a.createElement(C,{title:"Defining Data structure"},r.a.createElement("p",null,"The grid where we're going to drop the disks can be represented with an array of arrays."),r.a.createElement(A.a,{className:"javascript"},"const grid = [[],[],[],[],[],[],[]];"),r.a.createElement("p",null,"The only difference with the usual way of representing it is that we are going to set the columns first and then the rows. So, to get row 1 column 2 we say"),r.a.createElement(A.a,{className:"javascript"},"grid[2][1];"),r.a.createElement("p",null,"This is because we want to have de columns independent of each other. So, to drop the disks into de grid we can do:"),r.a.createElement(A.a,{className:"javascript"},"grid[1].push('disk');"),r.a.createElement("p",null,"Talking about disks, we are going to represent them with the colour setted in two constants."),r.a.createElement(A.a,{className:"javascript"},"const RED = 'red';",r.a.createElement("br",null),"const BLUE = 'blue';"),r.a.createElement("p",null,"So, to drop a red disk into the grid we're going to do:"),r.a.createElement(A.a,{className:"javascript"},"grid[1].push(RED);"),r.a.createElement("p",null,"As we are going to use Hooks, we have to import the useState hook. App.js should look like this:"),r.a.createElement(A.a,{className:"javascript"},"import React, {useState} from 'react';\nconst RED = 'red';\nconst BLUE = 'blue';\nconst GRID = [[], [], [], [], [], [], []];\n\nconst App = () => {\n  const [grid, setGrid] = useState(GRID);\n  return <div>Connect Four</div>;\n};\n\nexport default App;"))},D=function(){return r.a.createElement(C,{title:"Settin' the Grid"},r.a.createElement("p",null,"First of all we're going to set some constants with the colors and sizes. This way if something changes in the future we only have to change the values here."),r.a.createElement(A.a,{className:"javascript"},"const COLOR = {\n\tred: 'hsl(348, 100%, 61%)',\n\tblue: 'hsl(217, 71%, 53%)',\n};\nconst LIGHT = 'hsl(0, 0%, 96%)';\nconst DARK = 'hsl(0, 0%, 86%)';\nconst SIZE = 2;"),r.a.createElement("p",null,"The next step is to set up the Grid. We're going to use flexbox to display it. The left, right and margin attributs are set to display the grid in the center of the page. The display one is to make the columns be displayed next to each other. And the rest are to display de border, except for the box-sizing one which is used because bulma messed up with the padding."),r.a.createElement(A.a,{className:"javascript"},"const Container = styled.div`\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tdisplay: flex;\n\twidth: fit-content;\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tbox-sizing: unset;\n`;"),r.a.createElement("p",null,"Now we have to set up the columns. The display and flex-direction atributtes are nedded to make the columns be displayed as if the disks where dropped from the top. The other atributtes make the columns look nice."),r.a.createElement(A.a,{className:"javascript"},"const Column = styled.div`\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\twidth: ${SIZE}em;\n\theight: ${SIZE * 7}em;\n\tpadding: 2px 6px 2px 2px\n\tbackground-color: ${({ index }) => (index % 2 === 0 ? LIGHT : DARK)};\n`;"),r.a.createElement("p",null,"The disks:"),r.a.createElement(A.a,{className:"javascript"},"const Disk = styled.div`\n\twidth: ${SIZE}em;\n\theight: ${SIZE}em;\n\tborder-radius: ${SIZE}em;\n\tborder: 2px solid\n\t\t${({ color }) => (!color.includes('-win') ? COLOR[color] : 'black')};\n\tbackground-color: ${({ color }) => COLOR[color.replace('-win', '')]};\n\tmargin-top: 1px;\n`;"),r.a.createElement("p",null,"And finally we put everything together:"),r.a.createElement(A.a,{className:"javascript"},"const Grid = ({ grid, onDrop }) => (\n\t<Container>\n\t\t{grid.map((column, index) => (\n\t\t\t<Column key={index} index={index} onClick={() => onDrop(index)}>\n\t\t\t\t{column.map((color, index) => (\n\t\t\t\t\t<Disk key={index} color={color} />\n\t\t\t\t))}\n\t\t\t</Column>\n\t\t))}\n\t</Container>\n);"),r.a.createElement("p",null,"And if we call the grid with this:"),r.a.createElement(A.a,{className:"javascript"},"<Grid\n\tgrid={[\n\t\t['blue', 'red'],\n\t\t['red-win', 'blue', 'red'],\n\t\t['red', 'red-win'],\n\t\t['red', 'blue', 'red-win'],\n\t\t['blue', 'red', 'blue', 'red-win'],\n\t\t['red', 'blue'],\n\t\t['red', 'blue'],\n\t]}\n/>"),r.a.createElement(w,{grid:[["blue","red"],["red-win","blue","red"],["red","red-win"],["red","blue","red-win"],["blue","red","blue","red-win"],["red","blue"],["red","blue"]]}))},R=function(){return r.a.createElement(C,{title:"Winning's winning"},r.a.createElement("p",null,"Now we're going to define the winning logic, in which we're going to use recursion. So, let's take care of the vertical situation first, just to warm up."),r.a.createElement(A.a,{className:"javascript"},"const checkVertical = (currentPlayer, column, disksAmount) => {\n\tdisksAmount = disksAmount || 1;\n\tconst index = column.length - disksAmount;\n\tif (!column[index] || column[index] !== currentPlayer) {\n\t\treturn false;\n\t}\n\tif (\n\t\tdisksAmount === 4 ||\n\t\tcheckVertical(currentPlayer, column, disksAmount + 1)\n\t) {\n\t\tcolumn[index] = currentPlayer + '-win';\n\t\treturn true;\n\t}\n};"),r.a.createElement(w,{grid:[[],[],[],["red","red","red","red"],[],[],[]]}),r.a.createElement("p",null,"As always, we have to define the base case for the recursion. In our case, the base case is when the disk doesn't belong to the current player or the position is outside of the grid."),r.a.createElement(A.a,{className:"javascript"},"if (!column[index] || column[index] !== currentPlayer) {\n\treturn false;\n}"))},I=function(e){e.children,e.title;var t=Object(a.useState)(!0),n=Object(i.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"modal "+(l&&"is-active")},r.a.createElement("div",{className:"modal-background",onClick:function(){return c(!l)}}),r.a.createElement("div",{className:"modal-content"},r.a.createElement("article",{className:"message is-warning"},r.a.createElement("div",{className:"message-header"},r.a.createElement("p",null,"Under Construction"),r.a.createElement("button",{className:"delete","aria-label":"delete",onClick:function(){return c(!l)}})),r.a.createElement("div",{className:"message-body is-size-5"},r.a.createElement("p",null,"Hi! Just for you to know, this page isn't finished yet. Feel free to take a look around but remember to come back in the future to see the final version"," ",r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"far fa-smile"}))),r.a.createElement("br",null),r.a.createElement("p",null,"Have an awesome day!")))))},T=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"title is-1"},"Connect Four"),r.a.createElement("h2",{className:"subtitle is-4"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},"Made with React."),r.a.createElement("div",{className:"level-right"},r.a.createElement("a",{style:{color:"inherit"},href:"https://elpopisencio.github.io"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("i",{className:"fa fa-home"}))),r.a.createElement("a",{style:{color:"inherit"},href:"https://github.com/elpopisencio/pagination"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("i",{className:"fab fa-github"})))))))),r.a.createElement(N,null),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"content is-medium"},r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,"In this project we'll make a Connect Four game with React and Styled Components."))),r.a.createElement(O,null),r.a.createElement(S,null),r.a.createElement(D,null),r.a.createElement(R,null)),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.f9d0fd94.chunk.js.map