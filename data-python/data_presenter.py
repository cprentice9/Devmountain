data = open('data-python/invoices.csv')


for row in data:
    print(row)

for row in data:
    values = row.split(',')
    print(values[2])

for row in data:
    values = row.split(',')
    total = int(values[3]) * float(values[4])
    print(total)