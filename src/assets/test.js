/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      let pRes = [];

      if (pRes.length === iterable.length) {
        resolve(pRes)
     }
  
      function next (i) {
        console.log('next', i, pRes)
        if (pRes.length === iterable.length) {
            resolve(pRes)
            return;
        }
  
        Promise.resolve(iterable[i]).then(
          (res) => {
            console.log('test', res)
            pRes.push(res)
            next(i+1);
            
            
          }, (err) => {
            reject(err)
          },
        );
      }
      
      next(0);
    })
}

promiseAll([1]).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
});
