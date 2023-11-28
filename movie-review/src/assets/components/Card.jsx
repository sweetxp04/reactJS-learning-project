import React from "react";

const Card = (props) => {
    const { title, year, plot, img } = props;
    return (
        <div
            className="card my-2 bg-secondary text-white"
            style={{ width: "18rem" }}
        >
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span>Year: {year}</span>
                <p className="card-text">{plot}</p>
                <a href={img} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default Card;
