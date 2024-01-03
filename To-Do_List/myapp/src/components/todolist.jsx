import '../assets/css/style.css'

const Todo = () => {
    return (
        <>
            <h2 className='todo flex justify-center'>To-Do List</h2>

            <table className='tab flex justify-top theme-bg mlr-20 flex-col hv-80'>
                <thead className='thead mt-1 flex justify-center theme-black'>
                    <tr>
                        <th className='th padr-4'>To-Do</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='tr flex mt-1 justify-center theme-black'>
                        <td className='th padr-3'>Project</td>
                        <td><button>Completed</button></td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Todo

{/* <thead >
                    <tr className='tr flex justify-center theme-bg item-center pad-1'>
                        <th>To-Do</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='body flex justify-center justify-center'>
                    <tr>
                        <td>No-Todo</td>
                    </tr>
                </tbody> */}