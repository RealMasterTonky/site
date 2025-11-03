import pygame
import time

background = pygame.display.set_mode((800,800))

fpscap = 120

drawing = False
running = True
currentcolor = (0,0,0)

color1 = (0,0,0)
color2 = (255,255,255)
color3 = (255,0,0)
color4 = (0,255,0)
color5 = (0,0,255)
color6 = (255,255,0)
color7 = (0,255,255)
color8 = (255,0,255)
color9 = (128,128,128)

mousepositions = []

pygame.init()

while running:
    time.sleep(1/fpscap)

    background.fill((128,128,128))

    if drawing == True:
        mousepositions.append([pygame.mouse.get_pos(), currentcolor])

    for mouseposition in mousepositions:
        pygame.draw.circle(background, mouseposition[1], mouseposition[0], 5)

    pygame.display.update()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.MOUSEBUTTONUP:
            drawing = False

        if event.type == pygame.MOUSEBUTTONDOWN:
            drawing = True

        if event.type == pygame.KEYDOWN:
            if event.dict['unicode'] == '1':
                currentcolor = color1
            if event.dict['unicode'] == '2':
                currentcolor = color2
            if event.dict['unicode'] == '3':
                currentcolor = color3
            if event.dict['unicode'] == '4':
                currentcolor = color4
            if event.dict['unicode'] == '5':
                currentcolor = color5
            if event.dict['unicode'] == '6':
                currentcolor = color6
            if event.dict['unicode'] == '7':
                currentcolor = color7
            if event.dict['unicode'] == '8':
                currentcolor = color8
            if event.dict['unicode'] == '9':
                currentcolor = color9
            if event.dict['unicode'] == '\x7f':
                mousepositions.clear()
                
                


pygame.quit()