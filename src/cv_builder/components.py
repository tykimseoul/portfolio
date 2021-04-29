def imports():
    return '''\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[left=2cm, right=2cm, top=1.5cm, bottom=1.5cm,footskip=0.25in]{geometry}
\\usepackage{anyfontsize}
\\usepackage{graphbox}
\\usepackage{tikz}
\\usepackage{forloop}
\\usepackage[tabular,lining]{montserrat}
\\usepackage[T1]{fontenc}
\\definecolor{textPrimary}{HTML}{393939}
\\definecolor{textSecondary}{HTML}{707070}
\\definecolor{primary}{HTML}{2755ba}
\\graphicspath{ {./images/} }

\\newcommand*{\\montserrat}{\\fontfamily{Montserrat-TOsF}\\selectfont}

\\definecolor{textPrimary}{HTML}{393939}
\\definecolor{textSecondary}{HTML}{707070}
\\definecolor{primary}{HTML}{2755ba}

\\graphicspath{ {./images/} }


\\newcommand*{\\titletext}[6]{
    \\noindent
    \\begin{minipage}[c]{0.15\\textwidth}
    \\begin{tikzpicture}
        \\clip (0,0) circle (1cm);
        \\node at (0,-0.75) {\\includegraphics[width=2cm]{profile.png}};
    \\end{tikzpicture}
    \\end{minipage}
    \\noindent
    \\begin{minipage}[c]{0.55\\textwidth}
    {\\montserrat \\textcolor{textPrimary}{\\uppercase{\\textbf{\\fontsize{20}{24}\\selectfont #1}}}}
    \\vspace{10pt}\\\\
    {\\montserrat \\textcolor{textSecondary}{\\textbf{\\fontsize{10}{24}\\selectfont #2}}}
    \\end{minipage}
    \\hfill
    %
    \\noindent
    \\begin{minipage}[c]{0.3\\textwidth}
    \\begingroup
    \\setlength{\\tabcolsep}{3pt}
    \\renewcommand{\\arraystretch}{1.25}
    \\begin{tabular}{cl}
    \\includegraphics[align=c,width=10px, height=10px]{email.png}
    &
    {\\montserrat \\fontsize{7}{9}\\selectfont #3}\\\\
    \\includegraphics[align=c,width=10px, height=10px]{web.png}
    &
    {\\montserrat \\fontsize{7}{9}\\selectfont #4}\\\\
    \\includegraphics[align=c,width=10px, height=10px]{github.png}
    &
    {\\montserrat \\fontsize{7}{9}\\selectfont #5}\\\\
    \\includegraphics[align=c,width=10px, height=10px]{linkedin.png}
    &
    {\\montserrat \\fontsize{7}{9}\\selectfont #6}\\\\
    \\end{tabular}
    \\endgroup
    \\end{minipage}\\\\
}

\\newcommand*{\\sectionheader}[1]{    
    \\vspace{8pt}
    {\\montserrat \\textcolor{textSecondary}{\\uppercase{\\textbf{\\fontsize{11}{13}\\selectfont #1}}}}
    \\vspace{4pt}\\\\
}

\\newcommand*{\\itemwithlocation}[4]{
    \\begin{minipage}[t]{0.3\\textwidth}
        {\\montserrat \\textcolor{primary}{\\textbf{\\fontsize{8}{10}\\selectfont #1}}}
    \\end{minipage}
    \\noindent
    \\begin{minipage}[t]{0.7\\textwidth}
        {\\montserrat \\textcolor{textSecondary}{\\textbf{\\fontsize{8}{10}\\selectfont #2}}}
        |
        \\includegraphics[align=c,width=10px, height=10px]{place.png}
        {\\montserrat \\textcolor{textSecondary}{\\textbf{\\fontsize{8}{10}\\selectfont #4}}}
        \\\\
        {\\montserrat \\textcolor{textSecondary}{\\textit{\\fontsize{8}{10}\\selectfont #3}}}
    \\end{minipage}
    \\vspace{2pt}\\\\
}

\\newcommand*{\\itemwithoutlocation}[3]{
    \\begin{minipage}[t]{0.3\\textwidth}
        {\\montserrat \\textcolor{primary}{\\textbf{\\fontsize{8}{10}\\selectfont #1}}}
    \\end{minipage}
    \\noindent
    \\begin{minipage}[t]{0.7\\textwidth}
        {\\montserrat \\textcolor{textSecondary}{\\textbf{\\fontsize{8}{10}\\selectfont #2}}}
        \\\\
        {\\montserrat \\textcolor{textSecondary}{\\fontsize{8}{10}\\selectfont #3}}
    \\end{minipage}
    \\vspace{2pt}\\\\
}

\\newcommand*{\\itemwithoutrating}[1]{
    {\\montserrat \\textcolor{textSecondary}{\\textbf{\\fontsize{8}{10}\\selectfont #1}}}
    \\vspace{2pt}\\\\
}
'''


def begin_document():
    return '''\\begin{document}
\\setlength{\\parindent}{0pt}
'''


def end_document():
    return '''\\end{document}'''


def begin_minipage(ratio):
    return f'''
\\begin{{minipage}}[t]{{{ratio}\\textwidth}}'''


def end_minipage():
    return '''
\\end{minipage}'''


def title():
    return '''\\titletext{Taeyoon Kim}%
{Computer Science Engineer}%
{tykimseoul@gmail.com}%
{tykimseoul.github.io}%
{github.com/tykimseoul}%
{linkedin.com/in/taeyoon-kim-000}
'''


def section_header(header):
    return f'''
\\sectionheader{{{header}}}'''


def item_with_location(data, language):
    title = data['title'][language]
    subtitle = data['subtitle'][language]
    location = data['location'][language]
    return f'''
    \\itemwithlocation{{Mar. 2021 - Present}}%
        {{{title}}}%
        {{{subtitle}}}%
        {{{location}}}'''


def item_without_location(data, language):
    title = data['title'][language]
    subtitle = data['subtitle'][language]
    return f'''
    \\itemwithoutlocation{{Mar. 2021 - Present}}%
        {{{title}}}%
        {{{subtitle}}}'''


def item_with_rating(data):
    title = data['title']
    rating = data['rating']
    stars = ['\\includegraphics[align=c,width=10px, height=10px]{star.png}', '&'] * rating + ['\\includegraphics[align=c,width=10px, height=10px]{star_outline.png}', '&'] * (5 - rating)
    stars = stars[:-1]
    print(stars)
    return f'''
\\begin{{minipage}}[c]{{0.6\\textwidth}}
    {{\\montserrat \\textcolor{{textSecondary}}{{\\textbf{{\\fontsize{{8}}{{10}}\\selectfont {title}}}}}}}
\\end{{minipage}}
\\noindent
\\begin{{minipage}}[c]{{0.1\\textwidth}}
    \\begingroup
        \\setlength{{\\tabcolsep}}{{0pt}}
        \\renewcommand{{\\arraystretch}}{{0.25}}
        \\begin{{tabular}}{{ccccc}}
            {' '.join(stars)}
        \\end{{tabular}}
    \\endgroup
\\end{{minipage}}
\\vspace{{0pt}}\\\\
'''


def item_without_rating(data):
    title = data['title']
    return f'''
    \\itemwithoutrating{{{title}}}
'''
