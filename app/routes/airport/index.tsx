import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AirportDetails, DBAccessor } from "~/server/db/mysql-connection";

export async function loader(): Promise<AirportDetails[]> {
    const dbAccessor = new DBAccessor();
    const airportDetails = await dbAccessor.getAllAirport();
    return airportDetails;
};


export default function AirportList() {
    const airports = useLoaderData<AirportDetails[]>();

    return (
        <div>
            <h1>List of airports !!</h1>
            {airports.map((item) => {
                return <p key={item.id}> {item.name}</p>;
            })}
        </div>
    );
}
