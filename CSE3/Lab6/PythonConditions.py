# Juan Zapien
# CSE 3
# Wed 4pm
free = raw_input("When are you free? ")
if(free == "weekday" ):
    inOrOut= raw_input("Do you prefer indoor or outdoor activities? ")
    if( inOrOut == "indoor"):
        print("Go see a movie. ")
    else:
        print("Go play your favorite sport")
else:
    timeOfDay= raw_input("What time of day would you like to go? ")
    if( timeOfDay == "morning"):
        print ("Go to brunch with your best friend!")
    elif( timeOfDay == "afternoon"):
         print ("Go relax at the beach")
    else:
         age= raw_input("How old are you? ")
         if (int(age) >= 21):
             print("Go to your favorite bar or club! ")
         else:
             print("Go to concert! ")