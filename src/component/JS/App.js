

//   What is the event loop in JavaScript?
// Answer:
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations, even though JavaScript is single-threaded. It works by pushing tasks to the event queue and executing them in the main thread.






//promises chaining
// Asynchronous function that returns a promise
function delay(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
  }
  
  // Promise chain
  delay(1000) // Wait for 1 second
    .then((time) => {
      console.log(`Waited ${time} milliseconds`);
      return delay(2000); // Wait for 2 seconds
    })
    .then((time) => {
      console.log(`Waited ${time} milliseconds`);
      return delay(3000); // Wait for 3 seconds
    })
    .then((time) => {
      console.log(`Waited ${time} milliseconds`);
      throw new Error('Something went wrong'); // Simulate an error
    })
    .catch((error) => {
      console.error(error.message);
    });
  

    //call back hell
    async function fetchData() {
        try {
          const data1 = await getData();
          const processedData1 = await processData1(data1);
          const data2 = await getData2(processedData1);
          const processedData2 = await processData2(data2);
          const data3 = await getData3(processedData2);
          const finalResult = await processData3(data3);
          console.log(finalResult);
        } catch (error) {
          console.error(error);
        }
      }
      
      fetchData();


    //   same prosime call back hell
    getData()
  .then(processData1)
  .then(getData2)
  .then(processData2)
  .then(getData3)
  .then(processData3)
  .then(finalResult => {
    console.log(finalResult);
  })
  .catch(error => {
    console.error(error);
  });


  //same as above but with async await
  async function fetchData() {
    try {
      const data1 = await getData();
      const processedData1 = await processData1(data1);
      const data2 = await getData2(processedData1);
      const processedData2 = await processData2(data2);
      const data3 = await getData3(processedData2);
      const finalResult = await processData3(data3);
      console.log(finalResult);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  

      //dispatching of call back hell 
       