const common = {
	getFileJsonData:(name)=>{
		const filePath = `_www/static/my-json/${name}`;
		return new Promise((resovle,reject)=>{
			try{
				plus.io.requestFileSystem( plus.io.PRIVATE_WWW, function(fs){
					// fs.root是根目录操作对象DirectoryEntry
					fs.root.getFile(`static/my-json/${name}`,{create:true}, function(fileEntry){
						fileEntry.file( function(file){
							var fileReader = new plus.io.FileReader();
							fileReader.readAsText(file, 'utf-8');
							fileReader.onloadend = function(evt) {
								resovle(JSON.parse(evt.target.result));
							}
						});
					});
				});
				
			}catch(e){
				reject(e);
			}
		})
	}
}

