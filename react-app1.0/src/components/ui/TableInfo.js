import '../../style/ui/Table.css'

export const TableInfo = ({ content }) => (
    <table className="my-table my-table-border">
        <tbody className='my-table-content'>
            {
                content.map((element) => (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.value}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)