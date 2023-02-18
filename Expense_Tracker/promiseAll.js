 function createPost() {



    return new Promise( (resolve, reject) => {
  
  
  
      setTimeout( () => {
  
  
  
        posts.push({title: 'POST'});
  
  
  
        resolve()
  
  
  
      }, 1000)
  
  
  
    }) 
  
}
  
function updateLastUserActivityTime() {
  
  
  
    return new Promise( (resolve, reject) => {
  
  
  
      setTimeout( () => {
  
  
  
        posts.push({title: 'update'});
  
  
  
        resolve()
  
  
  
      }, 1000)
  
  
  
    }) 
  
  
  
  }

  
  
  
  
  Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
