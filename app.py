# importing the eel library  
import eel  
import time
# initializing the application  
eel.init("myWeb")  
  
# using the eel.expose command  
@eel.expose  
# defining the function for addition of two numbers  
def add(data_1, data_2):  
    int1 = int(data_1)  
    int2 = int(data_2)  
    output = int1 + int2  
    time.sleep(0.5)
    return output  
  
# starting the application  
eel.start("test.html")  