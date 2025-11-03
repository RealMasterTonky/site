import socket
import os

running = True
ip = socket.gethostbyname(socket.gethostname())
print("ip: " + str(ip))

currentserver = False

while running == True:
    inputtery = input(">>")
    if inputtery == "exit":
        running = False
    
    if inputtery == "newserver":
        port = input("port? >>")
        if int(port) > 0 and int(port) < 65537:
            server = socket.create_server((ip, 2048))
            print("server created!")
            currentserver = server
        else:
            print("nay")

    if inputtery == "connecttoserver":
        servertoconnectto = socket.create_connection((ip, 2048))
        currentserver = servertoconnectto
        print("yay me connect")

    if inputtery == "sendmessage":
        watmessage = input("wat message? >>")
        if currentserver != 0:
            currentserver.send(watmessage.encode())

    if inputtery == "getinfo":
        print("name:" + str(currentserver.getpeername()))
        