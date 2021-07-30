import { Fragment } from "react";
import { useStore } from "../store/StoreProvider"
import "../styles/Record.css"

export default function RecordPage(){
    const store = useStore();
    return(
    <Fragment>
        
        <h1 style={{textAlign : "center"}}>{store.playerName}</h1>

        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Points
                    </th>
                    <th>
                        Total points
                    </th>
                    <th>
                        Percentage
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    store.gameRecord.length === 0 ?
                        <tr>
                            <td colSpan="4">
                                ¡You didn't played any game yet!
                            </td>
                        </tr>
                        :
                    store.gameRecord.map((index, key) => {
                        return(
                            <tr key={key}>
                                <td>
                                    {key+1}
                                </td>
                                <td>
                                    {index.points}
                                </td>
                                <td>
                                    {index.totalPoints}
                                </td>
                                <td>
                                    {Math.round((index.points * 100) / index.totalPoints) + "%"  }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </Fragment>
    )
}