# replace Hugo shortcode {{%action%}} with Latex environment \begin{action}
# for rendering in latex PDF

s#\\{\\{\\%action\\%\\}\\}#\\begin{action}\n#
s#\\{\\{\\%/action\\%\\}\\}#\n\\end{action}#

s#\\{\\{\\%warning\\%\\}\\}#\\begin{warning}\n#
s#\\{\\{\\%/warning\\%\\}\\}#\n\\end{warning}#

s#\\{\\{\\%note\\%\\}\\}#\\begin{note}\n#
s#\\{\\{\\%/note\\%\\}\\}#\n\\end{note}#
