import { Player } from "../../types/player";


export default function MyTable({ players }: {players: Player[] | undefined}) {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {players?.map((e) => (
                    <tr key={e.player_id}>
                        <td>{e.full_name}</td>
                        <td>{e.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

