// constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://randomuser.me/api/?inc=name,login&results=10")
//       .then(res => res.json())
//       .then(
//         (data) => {
//           this.setState({
//             isLoaded: true,
//             items: data.results
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

// render() {
// const { error, isLoaded, items } = this.state;
// if (error) {
//   return <div>Error: {error.message}</div>;
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.login.uuid}>
//           {item.name.first} {item.name.last}
//         </li>
//       ))}
//     </ul>
//   );
// }
// }
// }