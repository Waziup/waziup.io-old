DOC=content/documentation
OUT=static/docs
echo "Making WaziDev_User_Manual-V1.0.pdf ..."
pandoc -o $OUT/WaziDev_User_Manual-V1.0.pdf $DOC/wazidev/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazidev/ --toc
echo "Making WaziGate_User_Manual-V1.0.pdf ..."
pandoc -o $OUT/WaziGate_User_Manual-V1.0.pdf $DOC/wazigate/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazigate/ --toc
echo "Making WaziCloud_User_Manual-V2.1.pdf ..."
pandoc -o $OUT/WaziCloud_User_Manual-V2.1.pdf $DOC/wazicloud/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazicloud/ --toc
echo "Making WaziCloud_API_Reference-V2.1.pdf ..."
pandoc -o $OUT/WaziCloud_API_Reference-V2.1.pdf $DOC/API/V2/_index.md --template waziup-doc-template.tex  --resource-path $DOC/api/v2/ --toc

