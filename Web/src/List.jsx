// /* eslint-disable react/jsx-key */
// function List() {

//     const fruits = [
//         { id: 1, name: "apple", calories: 95 },
//         { id: 2, name: "orange", calories: 45 },
//         { id: 3, name: "banana", calories: 105 },
//         { id: 4, name: "coconut", calories: 159 }
//     ];

//     // fruits.sort((a, b) => a.name.localeCompare(b.name)); // 順序
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)); // 倒序

//     // fruits.sort((a, b) => a.calories - b.calories); // 數字少至大
//     // fruits.sort((a, b) => b.calories - a.calories); // 數字大至少


//     // const fruitsItem = fruits.map(
//     //     fruit =>
//     //         <li key={fruit.id}>
//     //             {fruit.name}: &nbsp; <b>{fruit.calories}</b>
//     //         </li>
//     // )

//     const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) // 少於

//     const fruitsItem = lowCalFruits.map(
//         fruit =>
//             <li key={fruit.id}>
//                 {fruit.name}: &nbsp; <b>{fruit.calories}</b>
//             </li>
//     )

//     return (
//         <ol>
//             {fruitsItem}
//         </ol>
//     );
// }

// export default List

import PropsType from "prop-types"
function List(props) {

    const category = props.category;
    const itemlist = props.items;

    const fruitsItem = itemlist.map(
        item =>
            <li key={item.id}>
                {item.name}: &nbsp; <b>{item.calories}</b>
            </li>
    )

    return (
        <>
            <h3>{category}</h3>
            <ol>{fruitsItem}</ol>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.PropsTypes = {
    category: PropsType.string,
    items: PropsType.arrayOf(PropsType.shape({ id: PropsType.number, name: PropsType.string, calories: PropsType.number }))
}

export default List