const fs = require ('fs');
// function createFileSync()
// {
//     console.log("Before..");
//     try{
//         fs.writeFileSync("./sample.txt","My sample file");
//         console.log("File has been created");
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
//     console.log("After..");
// }
// createFileSync();

// function readFile(){
//     console.log("Before...");
//     let data=fs.readFileSync("./sample.txt",'utf-8',(err,data)=>{
//         if(err)
//             console.log(err);
//         else
//             console.log(data);
//     });
//     console.log(data);
//     console.log("After..")
// }
// readFile()

// function appendFile(){
//          console.log("Before...");
//          let data=fs.appendFile("./sample.txt",'New data',(err)=>{
//            if(err)
//                 console.log(err);
//              else
//                  console.log("Data has been updated");
//          });
//          console.log(data);
//          console.log("After..")
//     }
//      appendFile()

//      function deleteFile(){
//         console.log("Before...");
//         fs.unlink("./sample.txt",(err)=>{
//           if(err)
//                console.log(err);
//             else
//                 console.log("Data has been deleted");
//         });
//         console.log(data);
//         console.log("After..")
//    }
//     deleteFile()

const blog='./blog.json';

// function readFile(){
         
//          let data=fs.readFileSync("./blog.json",'utf-8');
//          console.log(data);
      
//      }
//      readFile()





//Read
// fs.readFile('blog.json', 'utf8', (err, data) => {
//   if (err) throw err;
  
  
//   let blogs = JSON.parse(data);

  
//   console.log(blogs); 
// });



// Write
function post(){
fs.readFile('blog.json', 'utf8', (err, data) => {
     if (err) throw err;
     
     let blogs = JSON.parse(data); 
   
     if (Array.isArray(blogs)) {
      
       blogs.push({ id: 4, title: 'Blog 4', Description: 'description4' }); 
     } else {
       console.log('The parsed content is not an array.');
     }
     
     fs.writeFile('blog.json', JSON.stringify(blogs, null, 2), (err) => {
       if (err) 
          throw err;
     else
       console.log('The blog has been updated!');
     });
   });
  }
  post()
  

//Update
// fs.readFile('blog.json', 'utf8', (err, data) => {
//         if (err) throw err;
// const blogIdToUpdate = 2; 
// const updateddescription = "This is the updated description";

// let blogs = JSON.parse(data);
// if (Array.isArray(blogs)) {
//   const blogIndex = blogs.findIndex(blogs => blogs.id === blogIdToUpdate);

//   if (blogIndex !== -1) {
//     blogs[blogIndex].description = updateddescription;

//     fs.writeFile('blog.json', JSON.stringify(blogs, null, 2), (err) => {
//       if (err) throw err;
//       console.log('Blog updated!');
//     });
//   } else {
//     console.log('Blog not found!');
//   }
// } else {
//   console.log('The data is not an array.');
// }
// });


//Delete



// fs.readFile('blog.json', 'utf8', (err, data) => {
//      if (err) throw err;
     
//      let blogs = JSON.parse(data);  
     
//      if (Array.isArray(blogs)) {    
   
//        const blogIdToDelete = 4;    
   
//        blogs = blogs.filter(blog => blog.id !== blogIdToDelete);
//        console.log(blogs)
//        fs.writeFile('blog.json', JSON.stringify(blogs, null, 2), (err) => {
//          if (err) throw err;
//          console.log('Blog deleted!');
//        });
//      } else {
//        console.log("The data is not an array");
//      }
//    });
   

//Read file
