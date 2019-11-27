DOC=content/documentation
pandoc -o WaziDev_User_Manual-V1.0.pdf $DOC/wazidev/wazidev.md --template waziup-doc-template.tex  --resource-path $DOC/wazidev/ --toc
pandoc -o WaziGate_User_Manual-V1.0.pdf $DOC/wazigate/wazigate.md --template waziup-doc-template.tex  --resource-path $DOC/wazigate/ --toc
pandoc -o WaziCloud_User_Manual-V2.1.pdf $DOC/wazicloud/wazicloud.md --template waziup-doc-template.tex  --resource-path $DOC/wazicloud/ --toc
pandoc -o WaziCloud_API_Reference-V2.1.pdf $DOC/api/v2/_index.md --template waziup-doc-template.tex  --resource-path $DOC/api/v2/ --toc

