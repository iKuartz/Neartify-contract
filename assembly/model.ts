import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class Vaccine {
    id: string;
    search: string;
    vaccine: string;
    person: string;
    date: string;
    dose: u32;
    certifier: string;
    public static fromPayload(payload: Vaccine): Vaccine {
        const vaccine = new Vaccine();
        vaccine.id = payload.id;
        vaccine.vaccine = payload.vaccine;
        vaccine.person = payload.person;
        vaccine.date = payload.date;
        vaccine.dose = payload.dose;
        vaccine.certifier = context.sender;
        return vaccine;
    }
}

export const listedVaccines = new PersistentUnorderedMap<string, Vaccine>("V");
