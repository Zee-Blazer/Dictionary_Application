const Display = (props) => {

    console.log(props.data)

    return (
        <div>
            {
                props.data ? 
                    <div className="display__title">
                        <h1>{props.data.title.toUpperCase()}</h1>

                        <p>{ props.data.meaning }</p>
                    </div>
                :
                    <div className="display__null">
                        Search For Something
                    </div>
            }
        </div>
    )
}

export default Display;