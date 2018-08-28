# Juan Zapien
# CSE 3, Winter 2016 Hw6
# Wed 4pm
numbers=["0ne ", "two ", "three "]
for x in numbers:
    print(x + "is in the list")
print("We're not in the list anymore")

letters = ["a", "b", "c"]
for item in letters:
    print(item)

foods = ["steak", "tacos", "pizza", "cookies", "pie"]

print("My favorite foods are:")
for food in foods:
    print("\t" + food)
userFav = raw_input("What is your favorite food? ")
if(userFav in foods):
    print("I like " + userFav + " too!")
else:
    print(userFav + " seems delicious too.")

myList = ["football", "basketball", "baseball", "soccer"]
print("My favorite sports are: ")
for item in myList:
    print("\t" + item)

userInput =raw_input("What is your favorite sport? ")
if(userInput in myList):
    print("Is'nt" + userInput + "great!" )
else:
    print("Hmm. I don't usually play " + userInput +"!")