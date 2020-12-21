function solve(groupOfPeople, typeOfGroup, dayOfWeek) {
    let group = parseFloat(groupOfPeople);
    let typeG = (typeOfGroup);
    let day = (dayOfWeek);
    let price = 0;
    let totalPrice = 0;
    switch (typeG) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45;
                    if (group >= 30) {
                        totalPrice = price * group - price * group * 0.15;
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
                case "Saturday":
                    price = 9.80;
                    if (group >= 30) {
                        totalPrice = price * group - price * group * 0.15;
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
                case "Sunday":
                    price = 10.46;
                    if (group >= 30) {
                        totalPrice = price * group - price * group * 0.15;
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    price = 10.9;
                    if (group >= 100) {
                        totalPrice = price * (group - 10);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
                case "Saturday":
                    price = 15.60;
                    if (group >= 100) {
                        totalPrice = price * (group - 10);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
                case "Sunday":
                    price = 16;
                    if (group >= 100) {
                        totalPrice = price * (group - 10);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = 15;
                    if (group >= 10 && group <= 20) {
                        totalPrice = price * group - (price * group * 0.05);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
                case "Saturday":
                    price = 20;
                    if (group >= 10 && group <= 20) {
                        totalPrice = price * group - (price * group * 0.05);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;

                case "Sunday":
                    price = 22.5;
                    if (group >= 10 && group <= 20) {
                        totalPrice = price * group - (price * group * 0.05);
                        break;
                    } else {
                        totalPrice = price * group;
                        break;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(40,
    "Regular",
    "Saturday")
