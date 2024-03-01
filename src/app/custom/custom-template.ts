// import { Templates, Components, Component } from 'formiojs';

// Templates.addTemplate('mytemplate', {
//     form: (ctx) => `
// <div>
//   <div ref="myref">
//     ${ctx.foo}
//     <div ref="mychild">1</div>
//     <div ref="mychild">2</div>
//     <div ref="mychild">3</div>
//   </div>
// </div>
// `
// });

// class MyComponent extends Component {
//   init() {
//     // Init tasks here.
//   }

//   render() {
//     // By calling super.render, it wraps in component wrappers.
//     return super.render(this.renderTemplate('mytemplate', {
//         foo: 'bar',
//         data: 'these are available in the template'
//     }));
//   }

//   attach(element) {
//     this.loadRefs(element, {
//       myref: 'single',
//       mychild: 'multiple',
//     });

//     this.refs.myref; // This will be either null or the div with "myref" set on it.
//     this.refs.mychild; // This will be either null or an array of divs with "mychild" set on them.
//   }

//   detach() {
//     // Called on redraw or rebuild. The opposite of attach.
//   }

//   destroy() {
//     // Called on rebuild. The opposite of init.
//   }
// }

// Components.addComponent('mycomponent', MyComponent);






import { Form } from 'formiojs';

const form = new Form(document.getElementById('formio'), 'https://examples.form.io/example', {
  renderMode: 'html'
});




// export default function(ctx: any) {
//     // console.log(ctx);
//     let Grid = `<ejs-grid dataSource=${[
//         {
//           OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
//           ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
//           ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
//       },
//       {
//           OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
//           ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
//           ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
//       },]}></ejs-grid>`;
//     return Grid;
//   }
  