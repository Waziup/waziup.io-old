DOC=content/documentation
OUT=static/docs

makePdf () {
  echo "Making $1 ..."
  cat $DOC/$2/index.md | sed -f replace_shortcodes.sed | pandoc -o $OUT/$1 --template waziup-doc-template.tex  --resource-path $DOC/$2/ --toc
  #pandoc -o $OUT/$1 --filter test 
}

makePdf WaziDev_User_Manual-V1.0.pdf wazidev
makePdf WaziGate_User_Manual-V1.0.pdf wazigate
makePdf WaziCloud_User_Manual-V2.1.pdf wazicloud
makePdf WaziCloud_API_Reference-V2.1.pdf API/V2
