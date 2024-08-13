
export default class StringProcessor {

    public static getFullName(firstName: string | null, lastName: string | null): string  {
        if(firstName && lastName) {
            return lastName + firstName;
        }

        return "";
    }
}