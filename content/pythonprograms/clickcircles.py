import pygame
import time
import random

print("Difficulties:\n1 - easy\n2 - medium\n3 - hard")
difficulty = input("Choose difficulty (using number) >")

ballsize = 10

if int(difficulty) == 1:
    ballsize = 30
if int(difficulty) == 2:
    ballsize = 10
if int(difficulty) == 3:
    ballsize = 5

screensize = (600,600)
screen = pygame.display.set_mode(screensize)


ballposition = (300,300)
score = 0
timer = 30*30

running = True

pygame.init()

while running:
    time.sleep(1/30)
    screen.fill((255,255,255))

    ball = pygame.draw.circle(screen, (255,0,0), ballposition, ballsize)

    pygame.display.set_caption("Score: "+str(score)+" | click on the red circle. | time left: "+str(round(timer/30))+" seconds")

    pygame.display.update()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.MOUSEBUTTONDOWN:
            if ball.colliderect(event.dict['pos'][0], event.dict['pos'][1], 1, 1):
                ballposition = (random.randint(0,600), random.randint(0,600))
                score += 1

    if timer <= 0:
        running = False

    timer -= 1

print("Score: "+str(score))

pygame.quit()