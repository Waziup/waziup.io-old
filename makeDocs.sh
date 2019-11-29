DOC=content/documentation
OUT=static/docs
pandoc -o $OUT/WaziDev_User_Manual-V1.0.pdf $DOC/wazidev/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazidev/ --toc
pandoc -o $OUT/WaziGate_User_Manual-V1.0.pdf $DOC/wazigate/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazigate/ --toc
pandoc -o $OUT/WaziCloud_User_Manual-V2.1.pdf $DOC/wazicloud/_index.md --template waziup-doc-template.tex  --resource-path $DOC/wazicloud/ --toc
pandoc -o $OUT/WaziCloud_API_Reference-V2.1.pdf $DOC/API/V2/_index.md --template waziup-doc-template.tex  --resource-path $DOC/api/v2/ --toc

