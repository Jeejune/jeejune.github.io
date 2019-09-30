(async () => {
  let npm = C.cdn.npm+"/",
    t=(await (await fetch(npm+"6")).text()).split("\n"),
    doc=document,n;
  for(var i=0;i<4;++i){
    for (let s of t[i].split(' ')){
      s = npm+s+'.'
      if(i!=1){
        n = doc.createElement('link')
        n.rel = i?'prefetch':'stylesheet'
        n.href = s+['css','js'][i%2]
      }else{
        n = doc.createElement('script')
        n.src = s+'js'
      }
      doc.head.appendChild(n)
    }
  }
})()
