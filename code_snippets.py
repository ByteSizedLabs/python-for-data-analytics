## 0 - Hello World
print("Hello World !!!")

## 1 - Define Variables 
byte_name = "Python for Data Analytics" 
language = "Python"
location = "Philadelphia"

## 2 - Print Variables 
byte_name = "Python for Data Analytics" 
language = "Python"
location = "Philadelphia"

print(byte_name) # "Python for Data Analytics"
print(language) # "Python" 
print(location)  # "Philadelphia"

## 3 - Combining Variables 
language = "Python"
location = "Philadelphia"

sentence = "We are learning how to code " + language + ", in " + location
print(sentence) # "We are learning how to code Python, in Philadelphia"

## 4 - Comments
# This is a variable that stores the day of the week
day_of_week = "Friday"

# This is another variable that stores the time of day
time_of_day = "early afternoon"

## 5 - Input  
name = input("What is your name? ")
quest = input("What is your quest? ")
favorite_color = input("What is your favorite color? ")

print("Hello " + name + ". I hear your quest is " + quest + ". Good luck!")

## 6 Math
cars_sold_per_day = 50
car_price = 3000
revenue_per_day = cars_sold_per_day * car_price
revenue_per_year = revenue_per_day * 365

car_production_cost = 1000
profit_per_car = car_price - car_production_cost
profit_margin = profit_per_car / car_price

## 7 More Math
nine = 3 ** 2

int_division = 5 // 2 # int_division == 2
float_division = 5.0 / 2.0 # float_division == 2.5

mod_1 = 10 % 3 # mod_1 == 1
mod_2 = 11 % 4 # mod_2 == 3

complicated_formula = 6 * (2.5 + 1) / (3 ** 2 % 4)

## 8 - Bools
i_know_python = False
i_am_learning_python = True
i_am_working_hard = True

i_will_know_python = i_know_python or i_am_learning_python
i_will_know_python_soon = i_know_python or (i_will_know_python and i_am_working_hard)
im_not_learning_python = not i_am_learning_python

## 9 - More Bools
bool1 = True and False
bool2 = False or True
bool3 = True and not False
bool4 = (False or not True) and True
bool5 = (True and True and False) or not True

## 10 - If statement
tickets_to_buy = 3
ticket_price_is_low = True
if ticket_price_is_low:
	tickets_to_buy = tickets_to_buy + 3
	print("Buy " + str(tickets_to_buy) + " tickets")

## 11 if-else statement
tickets_to_buy = 3
if ticket_price_is_low:
	tickets_to_buy = tickets_to_buy + 1
	print("Buy " + str(tickets_to_buy) + " tickets")
else:
	tickets_to_buy = tickets_to_buy - 1
	print("Buy " + str(tickets_to_buy) + " tickets")

## 12 if-elif-else statement
tickets_to_buy = 3
if ticket_price_is_low:
	tickets_to_buy = tickets_to_buy + 3
elif ticket_price_is_high:
	tickets_to_buy = tickets_to_buy - 3
else:
	tickets_to_buy = tickets_to_buy - 1
print("Buy " + str(tickets_to_buy) + " tickets")

## 13 ints to bools 
ticket_price = 15
ticket_price_is_high = ticket_price > 12
ticket_price_is_low = ticket_price <= 6
tickets_are_free = ticket_price == 0
tickets_are_not_free = ticket_price != 0

## 14 complicated if-else
ticket_price = 15
ticket_price_is_high = ticket_price > 12
ticket_price_is_low = ticket_price <= 6
tickets_are_free = ticket_price == 0
tickets_are_not_free = ticket_price != 0

tickets_to_buy = 3
if tickets_are_free:
	tickets_to_buy = tickets_to_buy + 99999
elif ticket_price_is_low:
	tickets_to_buy = tickets_to_buy + 3
elif ticket_price_is_high:
	tickets_to_buy = tickets_to_buy - 3
else:
	tickets_to_buy = tickets_to_buy - 1
print("Buy " + str(tickets_to_buy) + " tickets")

## 15 None
bad_kanye_albums = None

## 16 other types in if
number_of_problems = 99
if number_of_problems:
	print("I have " + str(number_of_problems) + " problems.")
else:
	print("Lucky you. Problem free")

## 17 if-statement review
type_of_key = None
voice_pitch = 12
if voice_pitch > 10:
	type_of_key = "High"
elif voice_pitch < 4:
	type_of_key = "Low"
elif you_are_DJ_Khaled:
	type_of_key = "Major"
print("We sing in " + type_of_key + " key")

## 18 lists
# Create a list with [...]
my_plan_for_today = ["Breakfast at Tiffany's", "Lunch at Britney's", "Coffee at Sydney's"]

# Get the item at index 0
first_event = my_plan_for_today[0]

# Get the item at index 1
second_event = my_plan_for_today[1]

# Get the item at index 2
third_event = my_plan_for_today[2]

# Get the item at index -1
some_event = my_plan_for_today[-1]

print("After " + first_event + " I'm going to " + second_event + " and then " + third_event)
# After Breakfast at Tiffany's I'm going to Lunch at Britney's and then Coffee at Sydney's

## 19 editing lists
my_plan_for_today = ["Breakfast at Tiffany's", "Lunch at Britney's", "Coffee at Sydney's"]

# Change the item at index 2
my_plan_for_today[2] = "Coffee at Fred's"

print("After " + my_plan_for_today[0] + " I'm going to " + my_plan_for_today[1] +
      " and then " + my_plan_for_today[2])
# After Breakfast at Tiffany's I'm going to Lunch at Britney's and then Coffee at Fred's

my_plan_for_today.append("Dinner at Haley's")

my_plan_for_tonight = ["Drinks at Bailey's", "Dessert at Jessie's"]
my_plan_for_today.extend(my_plan_for_tonight)

print(my_plan_for_today)
# ["Breakfast at Tiffany's", "Lunch at Britney's", "Coffee at Fred's", "Dinner at Haley's", "Drinks at Bailey's", "Desert at Jessie's"]

del my_plan_for_today[1]
print(my_plan_for_today)
# ["Breakfast at Tiffany's", "Coffee at Fred's", "Dinner at Haley's", "Drinks at Bailey's", "Desert at Jessie's"]

## 20 value in list
winning_lottery_numbers = [123819, 54753, 2, 927340]
is_7_a_winning_number = 7 in winning_lottery_numbers

print(is_7_a_winning_number) # False

## 21 - Tuples
hometown = ("Memphis", "TN")
adreess = (123, "Main st.", 28541)

## 22 - packing unpacking tuples
hometown = ("Memphis", "TN")
address = (123, "Main st", 28541)

#create multiple variables with unpacking
city, state = hometown
number, street_name, zip_code = address

print("I'm from " + city + ", " + state)
# I'm from Memphis, TN
print("Send mail to " + str(number) + " " + street_name + ". " + str(zip_code))
# Send mail to 123 Main st. 28541

## 23 - Dictionaries
democratic_presidential_candidates = { 2016 : "Hillary Clinton",
				  					   2012 : "Barak Obama",
				  					   2008 : "Barak Obama",
				  					   2004 : "John Kerry",
				  					   2000 : "Al Gore"
									 }

## 24 - Getting Dictionary values
#Create a dictionary with { key : value, ...}
ByteSizeStock = { "Name" : "BSS",
				  "Opening Price" : 45.8,
				  "Closing Price" : 47.0
				}
stock_name = ByteSizeStock["Name"]
stock_opening_price = ByteSizeStock["Opening Price"]
stock_closing_price = ByteSizeStock["Closing Price"]

## 25 - Edit Dictionaries
ByteSizeStock = { "Name" : "BSS",
				  "Opening Price" : 45.8,
				  "Closing Price" : 47.0,
				  "Options Available" : True
				}
# Add to Dictionary
ByteSizeStock["Recommendation"] = "Buy"

# Change value of key
ByteSizeStock["Closing Price"] = 47.2

# Remove from dictionary
del ByteSizeStock["Options Available"]

print(ByteSizeStock)
# {'Opening Price': 45.8, 'Closing Price': 47.2, 'Name': 'BSS', 'Recommendation': 'Buy'}

## 26 length
cities_ive_been_to = ["Philadelphia", "Montreal", "New York", "Tampa", "Bangkok"]
number_of_cities = len(cities_ive_been_to)
print("Ive been to " + str(number_of_cities) + " cities") # Ive been to 5 cities

test_scores = {"Jake" : 80, "John" : 90, "Jesse" : 100, "Jimmy" : 30}
print("My class has " + str(len(test_scores)) + " students") # My class has 4 students

sentence = "You can even find the length of strings"
print("My sentence has " + str(len(sentence)) + " characters") # My sentence has 39 characters

## 27 combining data_structures
portfolios = { "Sydney" : ["Google", "Apple", "Tesla"],
			   "Simon" : ["Apple"],
			   "Sarah" : ["Amazon", "Bank of America", "ByteSized"]
			 }
#Read data
print(portfolios["Sarah"][0]) #Amazon

#Edit data
portfolios["Simon"].append("Microsoft")
portfolios["Sophia"] = ["Herbal Mountain Tea", "Birkenstocks", "Portland Brewing Company"]

## 28 For Loop string
for letter in "Python":
	print(letter)
# P
# y
# t
# h
# o
# n

## 29 For Loop range
for number in range(0, 5):
	print(number * 2)
# 0
# 1
# 2
# 3
# 4

## 30 For Loop list
cities_ive_been_to = ["Philadelphia", "Montreal", "New York", "Tampa", "Bangkok"]
for city in cities_ive_been_to:
	print("I've been to " + city + " and ...")

print("Thats it")
# I've been to Philadelphia and ...
# I've been to Montreal and ...
# I've been to New York and ...
# I've been to Tampa and ...
# I've been to Bangkok and ...
# That's it

## 31 for loop Dictionary
employee_hours_this_week = {"Tom" : 40, "Tim" : 35, "Tammy" : 50}
for employee in employee_hours_this_week:
	hours_this_week = employee_hours_this_week[employee] 
	print(employee + " has worked " + str(hours_this_week) + " hours this week")
# Tim has worked 35 hours this week
# Tammy has worked 50 hours this week
# Tom has worked 40 hours this week

## 32 for loop dictionary more
employee_hours_this_week = {"Tom" : 40, "Tim" : 35, "Tammy" : 50}
for hours in employee_hours_this_week.values():
	print(hours)

for employee, hours in employee_hours_this_week.items():
	print(employee + " has worked " + str(hours) + " hours this week")

## 33 List comprehension
numbers = [2,5,3,10,235,189,0]

even_numbers = []
for number in numbers:
	if number % 2 == 0:
		even_numbers.append(number)

# OR...
even_numbers = [number for number in numbers if number % 2 == 0]
squares_of_even_numbers = [even_number ** 2 for even_number in even_numbers]

## 34 while loop
employees = ["Jake", "John", "Jacob", "Jeff", "Jeffry"]
counter = 0
found_Jeff = False
while not found_Jeff and counter < len(employees):
	if employees[counter] == "Jeff":
		found_Jeff = True
	else:
		counter += 1 # this is the same as counter = counter + 1
if found_Jeff:
	print("We found Jeff, He's at position " + str(counter))
else:
	print("We count find Jeff")

## 35 Functions that do things
product_line = ["water bottles", "candy bars"]

def add_product(product):
	product_line.append(product)
	print("We now also sell " + product)

add_product("gum") 
add_product("toothpicks")
add_product("magazines")
print(product_line)
# ['water bottles', 'candy bars', 'gum', 'toothpicks', 'magazines']

## 36 Functions that return things
def multiply(first_number, second_number):
	product = first_number * second_number
	return product

print(multiply(13, 7)) # 95

price = 10
num_products = 450
revenue = multiply(price, num_products)
print(revenue) #4500

## 37 Functions that return things
def is_even(number):
	return number % 2 == 0

print(is_even(4)) # True
print(is_even(7)) # False
print(is_even(0)) # True

## 38 Functions with arrays
senators = [("John McCain", "Republican"), ("Harry Reid", "Democrat"), 
            ("Chuck Schumer", "Democrat"), ("Lindsey Graham", "Republican"),
            ("Richard Burr", "Republican"), ("Bernie Sanders", "Independent")]
republican_senators = []

def is_republican(senator):
	name, party = senator
	return party == "Republican"

for senator in senators:
	if is_republican(senator):
		republican_senators.append(senator)

print(republican_senators)

## 39 Scope
a = "I'm a gloabl variale"
my_list = ["first", "second", "third"]

for b in my_list:
	c = "c"
	print(b)

def tripple(i):
	d = "d"
	return 2 * i

print(a)
print(b)
print(c)
print(d)
print(i)

## 40 Reading Files
with open("data/sherlockholmes.txt", "r") as sherlock_holmes_file:
	line_number = 0
	for line in sherlock_holmes_file:
		# Print only first 30 lines
		if line_number < 30:
			print(line)
		line_number += 1

## 41 Writing Files
with open("data/my_autobiogrpahy.txt", "w") as my_autobiogrpahy:
	my_autobiogrpahy.write("I was born, a baby.")
	my_autobiogrpahy.write("A small baby in a big world")
	my_autobiogrpahy.write("I would never imagine one day I would become the worlds greatest detective...")

## 42 Import Modules
import requests
from statistics import mean, median, stdev

requests.get("http://www.bytesizedlabs.com/data")

print(statistics.median([10, 400, 3.6, 24])) # 17.0

## 43 API
import requests

group_id = 290025638025435 
access_token = "EAACEdEose0cBACKD1ppZBqioB8ENm9IvWZCiRcWZCzRikqNdBJnvDx2drGSh7ZCFNxDT4z6AQ517l0GxNqKh3VTcoRwQtdPkSxVKrxlBhAZC3QIXnzPIpK9B7AxVnfsgAzZCLFOFhUNpu0wM7uitOldf6Pz4YA5B5k55qZAolRzFJEFO75Jf2DfLkXmGNZBmaGtgZD"
url = "https://graph.facebook.com/v2.10/{}/members?access_token={}&pretty=0&fields=id%2Cname%2Cgender%2Chometown%2Clocale%2Cpicture&limit=3000"

r = requests.get(url + "/" + group_id + "/" + access_token)
for group_member in r.json().get("data", []):
	data = member["name"], member["id"], member["picture"]["data"]["url"]
	print(data)

## 44 CSVs
import csv

stocks = {}
with open('data/stocks.csv', 'r') as csvfile:
	csv_reader = csv.reader(csvfile)
	csv_as_list = list(csv_reader)
	collum_title_row = True
	for row in csv_as_list:
		if collum_title_row:
			collum_title_row = False
		else:
			ticker_symbol = row[0]
			company_name = row[1]
			opening_price = row[2]
			closing_price = row[3]

			price_change = float(closing_price) - float(opening_price)
			stocks[ticker_symbol] = price_change

