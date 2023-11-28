import { useState } from "react";
import "./App.css";
import Card from "./assets/components/Card";
import movies from "./assets/movies.json";

function App() {
    return (
        <>
            <h1 className="bg-secondary text-center py-2 text-white">
                Movie Reviews
            </h1>
            <div className="container">
                <div className="row py-3">
                    {movies.map((element) => {
                        const { title, year, plot, posterUrl } = element;
                        return (
                            <div className="col" key={element.id}>
                                <Card
                                    title={title}
                                    year={year}
                                    plot={plot}
                                    img={posterUrl}
                                ></Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
