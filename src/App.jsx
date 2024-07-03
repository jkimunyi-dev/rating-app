import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "../components/StarRating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Menu recipes={data} title="Delicious Recipes" /> */}
      {/* <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => {
          alert("Double Click");
        }}
      /> */}
    </>
  );
}
// const Recipe = ({ name, ingredients, steps }) => {
//   return (
//     <section id={name.toLowerCase().replace(/ /g, "-")}>
//       <h1> {name} </h1>
//       <ul className="ingredients">
//         {ingredients.map((ingredient, i) => (
//           <li key={i}> {ingredient.name} </li>
//         ))}
//       </ul>
//       <section className="instructions">
//         <h2> Cooking Instructions </h2>
//         {steps.map((step, i) => (
//           <p key={i}> {step} </p>
//         ))}
//       </section>
//     </section>
//   );
// };

// const Menu = ({ title, recipes }) => {
//   return (
//     <article>
//       <header>
//         <h1> {title} </h1>
//       </header>
//       <div className="recipes">
//         {recipes.map((recipe, i) => (
//           <Recipe key={i} {...recipe} />
//         ))}
//       </div>
//     </article>
//   );
// };

export default App;
