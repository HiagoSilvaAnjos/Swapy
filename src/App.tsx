import { useEffect } from "react";
import { createSwapy } from "swapy";
import "./App.css";

function App() {
  useEffect(() => {
    const container = document.querySelector(".container");

    const swapy = createSwapy(container, {
      animation: "dynamic",
    });

    swapy.onSwap((event) => {
      console.log("fui chamado");
      // console.log(event.data.object);
      console.log(event.data.array);
      // console.log(event.data.map);
    });
  }, []); // O array vazio [] garante que o código será executado apenas após o primeiro render.

  return (
    <>
      <div className="container">
        <div className="section-1" data-swapy-slot="text-pink">
          <div className="content-a" data-swapy-item="1">
            <div className="handle" data-swapy-handle></div>
            <h3>title</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus quaerat repellat rem fugiat accusamus quo ex
              similique, id consequuntur impedit adipisci earum laboriosam odit
              reiciendis quidem, quam magni dolorem expedita.
            </p>
          </div>
        </div>

        <div className="section-2" data-swapy-slot="text-blue">
          <div className="content-b" data-swapy-item="2">
            <div className="handle" data-swapy-handle></div>
            <h3>title</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus quaerat repellat rem fugiat accusamus quo ex
              similique, id consequuntur impedit adipisci earum laboriosam odit
              reiciendis quidem, quam magni dolorem expedita.
            </p>
          </div>
        </div>

        <div className="section-3" data-swapy-slot="text-green">
          <div className="content-c" data-swapy-item="3">
            <div className="handle" data-swapy-handle></div>
            <h3>title</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus quaerat repellat rem fugiat accusamus quo ex
              similique, id consequuntur impedit adipisci earum laboriosam odit
              reiciendis quidem, quam magni dolorem expedita.
            </p>
          </div>
        </div>

        <div className="section-3" data-swapy-slot="text-yellow">
          <div className="content-d" data-swapy-item="4">
            <div className="handle" data-swapy-handle></div>
            <h3>title</h3>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus quaerat repellat rem fugiat accusamus quo ex
              similique, id consequuntur impedit adipisci earum laboriosam odit
              reiciendis quidem, quam magni dolorem expedita.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
