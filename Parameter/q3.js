function printInformation(name, email) {
    if (!email) {
        console.log(`tôi là ${name}.  Tôi chưa có Email`);
    } else {
        console.log(`tôi là ${name}.  Email của tối là ${email}`);
    }
}

printInformation('hoang')