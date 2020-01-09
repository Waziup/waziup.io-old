DOC=content/documentation
OUT=static/docs

makePdf () {
  echo "Making $1 ..."
  cat $DOC/$2/index.md | pandoc -t latex --template waziup-doc-template.tex -V resourcepath=$DOC/$2/ --toc --listings | sed -f replace_shortcodes.sed > $OUT/$1.tex
  pdflatex -output-directory=$OUT -jobname=$1 $OUT/$1.tex 
  pdflatex -output-directory=$OUT -jobname=$1 $OUT/$1.tex 
}

makePdf WaziDev_User_Manual-V1.0 wazidev
makePdf WaziGate_User_Manual-V1.0 wazigate
makePdf WaziCloud_User_Manual-V2.1 wazicloud
makePdf WaziCloud_API_Reference-V2.1 API/V2
