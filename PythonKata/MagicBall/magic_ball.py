import time
import random

responses = ["random answer", "uber for ambulance", "ride my way", "I'm James", "who who", "New Day", "Gotti Gotti", "I knoe that", "Dsc Jkuat", "react Redux", "Context Api", "Graphql"]


def magicBall():
    input("Please Ask your question: ")
    print("Wait as we get back to you...")
    time.sleep(3)
    print(random.choice(responses))
    time.sleep(1)
    repeat()


def repeat():
    r = input("Do you have another question ? \nEnter Y if yes or Q to quit: ")
    if r == "Y":
        magicBall()
        r = input("Do you have another question ? \nEnter Y if yes or Q to quit: ")
    elif r == "Q":
        exit()
    else:
        print("I don't get that, please repeat")
        repeat()
magicBall()
