import random

running = True

score = 0

while running:
  number1 = round(random.random() * 11)
  number2 = round(random.random() * 11)
  operators = ["+", "-", "*"]
  chosenoperator = operators[round(random.random()*2)]

  answer = input(str(number1)+chosenoperator+str(number2)+" = ? >")

  if chosenoperator == "+":
    if int(answer) == number1+number2:
      score += 1
      print("good job! current score: "+str(score)+". next question:")
    else:
      print("die")
      quit()

  if chosenoperator == "-":
    if int(answer) == number1-number2:
      score += 1
      print("good job! current score: "+str(score)+". next question:")
    else:
      print("die")
      quit()

  if chosenoperator == "*":
    if int(answer) == number1*number2:
      score += 1
      print("good job! current score: "+str(score)+". next question:")
    else:
      print("die")
      quit()