
function Form() {
    const statesList = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    return (
        <div>
            <h2>Enter your location</h2>
            <form>
                <input type="text" placeholder="City" />
                <select name="State" id="State">
                    <option value="">Select a state</option>
                    {statesList.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
                <input type="text" placeholder="Country" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}






export default Form