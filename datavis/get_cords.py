from geopy.geocoders import Nominatim
import time
import csv

geolocator = Nominatim(user_agent="app")

datafile = input("path: ")
count = 0

with open(datafile, 'r') as f:
    with open('codes_output.csv', 'w') as g:
        reader = csv.reader(f)
        writer = csv.writer(g)
        for row in reader:
            location = geolocator.geocode(row[0], geometry='geojson')
            count += 1
            print(count)
            writer.writerow([row[0], location.raw['lat'], location.raw['lon']])
            time.sleep(2)

