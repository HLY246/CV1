import React from "react";

class About extends React.Component {
    render() {
        return <div id="information"> 
            <div id="about">
                <div id="aboutMe">
                    <h2>Who am I?</h2>
                    {/* <h3>Who am I?</h3> */}
                    <p>
                        Since 2017 I have been working as a web developer using Shopify. Over the last year I decided to expand my knowledge and learn to code in order to understand what goes on behind the scenes. I grew a passion for the subject and signed up for an online course. It was during this time I decided I wanted to pursue web development as a career.  
                    </p>
                    <p>
                    In March 2022 I sat the Microsoft 98-383 exam in HTML and CSS and passed with 85%. I aspire to expand my knowledge futher and begin a career in the industry.
                    </p>
                </div>
                <div id="languages">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>SQL</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default About;