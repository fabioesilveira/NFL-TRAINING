

export default function MyInput({ search, setSearch }: { search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <input
            type="text"
            placeholder="enter a player"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-header"
        />
    )
}