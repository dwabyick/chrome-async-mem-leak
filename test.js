window.resolvingPromise = new Promise((resolve => {
    setTimeout(() => {
        console.log("timeout");
        resolve();
    }, 500);
}));


async function test(obj) {
    await window.resolvingPromise;
    return obj;
}


window.resolvingPromise.then(() => {
    console.log("here");
    test({
        firstName: "Daniel"
    }).then((value) => {
        console.log("done with test");
    });

});
