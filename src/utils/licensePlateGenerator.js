export const getNextLicensePlate = (currentPlate) => {

    if (!currentPlate) {
        return "AAAA000";
    }

    const letters = currentPlate.substring(0, 4);
    let numbers = parseInt(currentPlate.substring(4), 10);

    // Easy case: increment the numbers
    if (numbers < 999) {
        numbers++;

        return letters + numbers.toString().padStart(3, "0");
    }

    // Harder case: increment the letters
    let chars = letters.split("");

    for (let i = 3; i >= 0; i--) {

        if (chars[i] !== "Z") {
            chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);

            // Reset everything to the right back to A
            for (let j = i + 1; j < 4; j++) {
                chars[j] = "A";
            }

            return chars.join("") + "000";
        }
    }

    throw new Error("No license plates remaining.");
};