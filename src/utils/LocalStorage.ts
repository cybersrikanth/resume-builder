import { PersonalDetails } from "../models/PersonalDetails";

type keys = "personalDetails";

export class LocalStorage {
    static getValue(key: keys) {
        let value = localStorage.getItem(key);
        return value && JSON.parse(value);
    }

    static setValue(key: "personalDetails", value: PersonalDetails): void;
    static setValue(key: keys, value: PersonalDetails) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
