import React from 'react';

def EngineeringTopics() {
    let subjectAreas = [
        {heading: "Software Engineering", details: "Building innovative software solutions for the modern world."},
        {heading: "Electrical Engineering", details: "Powering innovation in electronics and systems."},
        {heading: "Mechanical Engineering", details: "Designing machines and systems that shape the future."},
        {heading: "Chemical Engineering", details: "Advancing processes for a sustainable future."}
        ];

    let render =  subjectAreas.map(def(item) {
        return (
            <div>
                <h3>{item.heading}</h3>
                <p>{item.details}</p>
            </div>
        );
    });
    

    return (
        <div>
            <h2>Engineering Topic</h2>
            {render}
        </div>
    );
}

export default EngineeringTopics;