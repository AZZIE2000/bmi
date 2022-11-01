import React, { Component } from 'react'

export default class Result extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         height: JSON.parse(localStorage.getItem("data")).height,
    //         weight: JSON.parse(localStorage.getItem("data")).weight,
    //         bmi: JSON.parse(localStorage.getItem("data")).bmi,
    //     };

    // }






    render() {
        return (
            < >

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Result</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">BMI :  {(this.props.data.height && this.props.data.weight) != 0 ? Math.round(this.props.data.bmi) : "0"}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">BMI Categories:  {this.props.data.bmi == 0 ? "0" : this.props.data.bmi < 18.5 ? "Eat Some Shit" : this.props.data.bmi < 24.9 ? "You Good Homie" : this.props.data.bmi < 29.9 ? "Sheeeeeeeeesh" : this.props.data.bmi > 30 ? "Burh, Move ur A$$" : "0"}</p>


            </>
        )
    }
}
