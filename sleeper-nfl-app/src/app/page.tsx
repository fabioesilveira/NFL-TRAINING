"use client"

import MyTable from "@/components/myTable";
import Loading from "@/components/loading";
import MyInput from "@/components/myInput";
import { useTable } from "@/hooks/useTable";

export default function Home() {

    const { 
        data,
        setData,
        searchPlayer,
        setSearchPlayer,
        filteredPlayers } = useTable()

    return (
        <>
            <div>
                <MyInput search={searchPlayer} setSearch={setSearchPlayer} />
                {!data ? <Loading /> :
                    <MyTable players={filteredPlayers} />
                }
            </div>
        </>
    )
}