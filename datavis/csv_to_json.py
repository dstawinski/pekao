import csv
import json

cords = {}

def convert_to_json(row):
    cords = {
        'zipcode': row[0],
            'location': {
                'lat': row[1],
                'lon': row[2]
            }
        }
    return cords 

with open('codes_output_prod.csv', 'r') as input_file:
    reader = csv.reader(input_file)
    with open('codes_json.json', 'w', encoding='utf-8') as output_file:
        for row in reader:
            data = convert_to_json(row)
            json.dump(data, output_file)
            output_file.write('\n')            


