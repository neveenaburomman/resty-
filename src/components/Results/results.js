import React from "react";


function Results(props){

    return(
        <section>
            <div className="result">
                <p>url: {props.url}</p>
                <p>method: {props.method}</p>
            </div>

            <div >
            <pre>
                {props.data ? JSON.stringify (props.data , undefined , 2) : null}
                </pre>
      </div>
        </section>

    );
    }

export default Results;