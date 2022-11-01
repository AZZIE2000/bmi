import React, { Component } from 'react'
import Result from './Result';

export default class Calc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            bmi: 0,
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,

        });

        const w = this.state.weight
        const h = this.state.height
        const val = (w / h / h) * 100000
        this.setState({
            bmi: val,

        });
    }

    componentWillMount() {
        localStorage.setItem("data", JSON.stringify(this.state));
    }
    handleSubmit(event) {
        // alert('A BMI was submitted: ' + this.state.height + "  ....  " + this.state.height);
        console.log(this.state);
        console.log(this.info);
        event.preventDefault();
        localStorage.setItem("data", JSON.stringify(this.state));
    }





    render() {
        // const bmi = this.state.bmi
        return (
            <div className='container my-14 mx-auto '>
                <div className='w-96 mx-auto' >
                    <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <form onSubmit={this.handleSubmit} >
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Height</label>
                                    <input name='height' onChange={this.handleInputChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Height" required />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weight</label>
                                    <input name='weight' onChange={this.handleInputChange} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Weight" required />
                                </div>
                            </div>
                            {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                        </form>

                        <Result data={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}
