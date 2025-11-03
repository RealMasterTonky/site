import pygame
import time
import random

fpscap = 30

black = (0,0,0)
white = (255,255,255)
red = (255,0,0)
green = (0,255,0)
blue = (0,0,255)

screensize = (1080,720)
screen = pygame.display.set_mode(screensize)
rect = screen.get_rect()

ballsize = 25
ballspeed = 50
ballposition = (0,0)

ball2position = (540, 360)

activated = True

backgroundcolor = black

pygame.init()

while activated:
  time.sleep(1/fpscap)

  pygame.display.set_caption("ball size: "+str(ballsize))

  screen.fill(backgroundcolor)

  ball = pygame.draw.circle(screen, red, ballposition, ballsize)

  ball2 = pygame.draw.circle(screen, blue, ball2position, 10)
  
  pygame.display.update()

  for event in pygame.event.get():

    if event.type == pygame.KEYUP:
      input = event.dict
      print(input)
      if input['key'] == 1073741906:
        print("up!")
        ballposition = (ballposition[0], ballposition[1]-ballspeed)

      if input['key'] == 1073741904:
        print("left!")
        ballposition = (ballposition[0]-ballspeed, ballposition[1])

      if input['key'] == 1073741905:
        print("down!")
        ballposition = (ballposition[0], ballposition[1]+ballspeed)

      if input['key'] == 1073741903:
        print("right!")
        ballposition = (ballposition[0]+ballspeed, ballposition[1])

    if event.type == pygame.QUIT:
      activated = False

  if ball.colliderect(ball2):
    ball2position = (random.randint(0,1080),random.randint(0,720))
    ballsize += 5
    print("ball ate yummers!")

pygame.quit()