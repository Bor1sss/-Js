function Task3(){
    let url="http://www.ufa.com.ua/utilites/hdd/out.php?sort=2"

    const urlSmall = new URL(url);

    let protocol = urlSmall.protocol;
    let host = urlSmall.host;
    let pathName=urlSmall.pathname;
    let filename=pathName.split('/');
    
    let search = urlSmall.search;

    

    alert(protocol + '\n' +host + '\n' + pathName + '\n' + filename[filename.length-1] +'\n' +search + '\n');
}

Task3();