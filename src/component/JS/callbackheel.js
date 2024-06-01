let userId = 200;
getUserInfo(userId, (userId, userInfo) => {
    getOrderInfo(userId, userInfo, (userInfo, orders) => {
        getProductInfo(userInfo, orders, (userInfo, orderData) => {
            compileOrderDetails(userInfo, orderData);
        });
    });
});



a
//then catch

let userId1 = 200;

getUserInfo(userId)
    .then(({ userId, userInfo }) => {
        return getOrderInfo(userId, userInfo);
    })
    .then(({ userInfo, orders }) => {
        return getProductInfo(userInfo, orders);
    })
    .then(({ userInfo, orderData }) => {
        compileOrderDetails(userInfo, orderData);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

// Assuming the functions getUserInfo, getOrderInfo, getProductInfo, and compileOrderDetails are defined to return Promises.


let userId2 = 200;

async function fetchAndCompileOrderDetails(userId) {
    try {
        const { userId, userInfo } = await getUserInfo(userId);
        const { userInfo: updatedUserInfo, orders } = await getOrderInfo(userId, userInfo);
        const { userInfo: finalUserInfo, orderData } = await getProductInfo(updatedUserInfo, orders);
        compileOrderDetails(finalUserInfo, orderData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchAndCompileOrderDetails(userId);

// Assuming the functions getUserInfo, getOrderInfo, getProductInfo, and compileOrderDetails are defined to return Promises.
