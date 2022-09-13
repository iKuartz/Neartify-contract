import { Vaccine, listedVaccines } from './model';

export function setVaccine(vaccine: Vaccine): void {
    let storedVaccine = listedVaccines.get(vaccine.id);
    if (storedVaccine !== null) {
        throw new Error(`Vaccine ID ${vaccine.id} already exists`);
    }
//Add verification of sender to check if it is in a list of authorized users.
    listedVaccines.set(vaccine.id, Vaccine.fromPayload(vaccine));
}

export function getId(id: string): Vaccine | null{
    return listedVaccines.get(id);
}

export function getPerson(person: string): Vaccine | null{
    return listedVaccines.get(person);
}

export function getVaccines(): Vaccine[] {
    return listedVaccines.values();
}

// export function getPerson2(person: string): Vaccine[] | null {
//     function check(T: Vaccine): bool {
//         return T.person === person
//     }

//     return getVaccines().filter(function check(T: Vaccine): bool {
//         return T.person === temp
//     })
// }
