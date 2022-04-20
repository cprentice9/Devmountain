data = open("data-python/invoices.csv")


for row in data:
    print(row)

for row in data:
    values = row.split(',')
    print(values[2])

for row in data:
    values = row.split(',')
    total = int(values[3]) * float(values[4])
    print(total)

total = 0

for row in data:
    values = row.split(',')
    total = total + (int(values[3]) * float(values[4]))

print(total)


data.close()

x = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

y = [10,40,32,84,60,52,18]

data.plot(x, y)

data.xlabel("Day Purchased")

data.ylabel("Cupcakes Purchased")

data.title("My Cupcake Sales")

data.show()