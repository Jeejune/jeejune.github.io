(async () => {
  const
    doc=document,
    tag=(name,attr)=>{
      var e = doc.createElement(name)
      Object.assign(e,attr)
      doc.head.appendChild(e)
    },
    script=(src)=>tag('script',{src})
    ;

  // 请替换为自己的腾讯统计
  script('//tajs.qq.com/stats?sId=66475325')

  //加载页面
  var npm = C.cdn.npm+"/", t=await (await fetch(npm+6)).text().split("\n");
  for(let i=0;i<4;++i){
    for (let s of t[i].split(' ')){
      s = npm+s+'.'
      (i==1)?script(s+'js'):tag(
        'link',
        {
          rel:i?'prefetch':'stylesheet',
          href:s+['css','js'][i%2]
        }
      )
    }
  }
})()
