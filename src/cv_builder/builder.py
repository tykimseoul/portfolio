import json
import re
import subprocess

from components import imports, title, begin_document, end_document, begin_minipage, end_minipage, section_header, item_with_location, item_without_location, item_without_rating, item_with_rating

raw_data = open('../data.js', 'r').read()
raw_data = re.search(r'({[\s\S]+})', raw_data).groups()[0]
data = json.loads(raw_data)
data['abilities']['skills'] = sorted(data['abilities']['skills'], key=lambda j: j['rating'], reverse=True)
data['abilities']['languages'] = data['abilities']['languages (natural)'] + data['abilities']['languages (programming)']
data['abilities']['languages'] = sorted(data['abilities']['languages'], key=lambda j: j['rating'], reverse=True)
data['abilities']['languages'] = list(filter(lambda j: j['rating'] > 2, data['abilities']['languages']))

item_type_1 = {'education': item_with_location, 'careers': item_with_location, 'certificates': item_without_location, 'activities': item_without_location}
item_type_2 = {'skills': item_with_rating, 'languages': item_with_rating, 'interests': item_without_rating}

file_name = 'cv.tex'
with open(file_name, 'w') as file:
    file.write(imports())
    file.write(begin_document())
    file.write(title())
    file.write('\\vspace{16pt}\\\\')

    file.write(begin_minipage(0.7))
    for header in list(data.keys())[1:]:
        for section in data[header]:
            if section in item_type_1.keys():
                file.write(section_header(section))
                for item in data[header][section]:
                    print(section, item)
                    file.write(item_type_1[section](item, 'en'))
    file.write(end_minipage())

    file.write(begin_minipage(0.3))
    for header in list(data.keys())[1:]:
        for section in data[header]:
            if section in item_type_2.keys():
                file.write(section_header(section))
                for item in data[header][section]:
                    print(section, item)
                    file.write(item_type_2[section](item))
    file.write(end_minipage())

    file.write(end_document())
    file.close()

x = subprocess.call(['pdflatex', file_name], shell=False)
