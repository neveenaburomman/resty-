import React from "react";
import './results.scss'
import JSONPretty from 'react-json-pretty';


function Results(props) {

    return (
        <section>
            <div id="container">
                <p>url: {props.url}</p>
                <p>method: {props.method}</p>
            </div>

            <div id="data" >
                <pre>
                        <JSONPretty id="json-pretty"  HEADER data={props.header}></JSONPretty>
                        <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
                </pre>
            </div>

        </section>

    );
}

export default Results;