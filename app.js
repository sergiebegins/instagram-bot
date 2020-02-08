const instagramPosts = require('instagram-posts');
const fs = require('fs');
const request = require('request');
let i = 1;
(async () => {
  let postJsn = await instagramPosts('misshaturkiye');
  let arr = [];
  for(let k in postJsn){
	  if(i<10){
    let v = postJsn[k];
    download(v.thumbnail_src, i+'.png', function(){
      console.log('done');
    });
    ins_arr = {
      url:v.url,
      text:v.text,
      time:v.time
    };
    arr.push(ins_arr);
	  }
    i++;
  }
      fw(arr);
})();


let fw = function (ins_arr) {

  fs.writeFile("instagramPost.json",JSON.stringify(ins_arr), function(err) {
  			if(err) {
  			console.log(err);
  			}

  		});

}


let download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
