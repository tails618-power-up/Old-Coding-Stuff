from tkinter import *
import time
from random import *

chatlist=["Hi, I am going to talk to you about useless random facts! What's your name?"]
mathlist=["5+5","6^2"]
scilist=["What is the third element in the periodic table?","What is the atomic number for Boron?"]
humlist=[]

#variables
best_subject=""
name=""
what_subject=""

question_num=1

def person_chat(event):
    global chatlist
    global question_num
    global name
    global best_subject
    chatlist.append(typebox.get())
    display_chatlog()
    if question_num==1:
        name=typebox.get()
    elif question_num==3:
        best_subject=typebox.get()
    elif question_num==4:
        x=0
    ai_chat()
    typebox.delete(0,"end")
    

def ai_chat():
    global name
    global chatlist
    global question_num
    global best_subject
    global mathlist
    global scilist
    global humlist
    if question_num==1:
        chatlist.append("Hello, "+name+"! Time for some random facts! Ready?")
    elif question_num==2:
        chatlist.append("OK! What's your best subject in school? math/science/humanities")
    elif question_num==3:
        r=randint(0,1)
        if best_subject=="math":
            chatlist.append("Your best subject is: math!"+chr(10)+"Your question is: "+mathlist[r])
        elif best_subject=="science":
            chatlist.append("Your best subject is: science!"+chr(10)+"Your question is: "+scilist[r])
        elif best_subject=="humanities":
            chatlist.append("Your best subject is: humanities!"+chr(10)+"Your question is: "+humlist[r])
    question_num+=1
    display_chatlog()

def display_chatlog():
    global chatlist
    symbol="@ "
    chatstring=""
    for chat in chatlist:
        chatstring=chatstring+symbol
        chatstring=chatstring+chat
        chatstring=chatstring+chr(10)
        if symbol=="@ ":
            symbol="* "
        else:
            symbol=="@ "
    chatlog.configure(text=chatstring)
    
root=Tk()

#Create controls
title=Label(root,font="Fixedsys 30",text="AsherBot 1.0")
chatlog=Label(root,bg="white",height=12,width=91,font="Fixedsys 12")
typebox=Entry(root,width=80,font="Fixedsys 12")

#Put them on the window
title.grid(row=0,column=0)
chatlog.grid(row=1,column=0)
typebox.grid(row=2,column=0)

root.bind("<Return>",person_chat)

display_chatlog()

root.mainloop()
