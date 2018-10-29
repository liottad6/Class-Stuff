/* view.c -- view module for clock project
 *
 * Darren Provine, 17 July 2009
 */

#include "clock.h"

/* VIEW */

/* We get a pointer to a "struct tm" object, put it in a string, and
 * then send it to the screen.
 */
void show(struct tm *dateinfo, int ampm)
{
    char       timestring[12];
    // TODO: handle "ampm" setting
    //       You may want to create a new variable "hour",
    //       and possibly an "ampmstring", to hold the results
    //       of handling the ampm setting.
    char ampmStr[2] = "";
    int hour = dateinfo->tm_hour;

    if(ampm == 1){
      ampmStr[0] = 'a';
      ampmStr[1] = 'm';

      if(hour > 12){
        hour = hour - 12;
        ampmStr[0] = 'p';
        ampmStr[1] = 'm';
      }
      sprintf(timestring,
            "%02d:%02d:%02d %s",
            hour,
            dateinfo->tm_min,
            dateinfo->tm_sec,
            ampmStr);
    }else{
      sprintf(timestring,
              "%0d:%02d:%02d",
              dateinfo->tm_hour,
              dateinfo->tm_min,
              dateinfo->tm_sec);
    }
    printf("\r%s", timestring);
    fflush(stdout);
    }



/* We get a pointer to a "struct tm" object, put it in a string, and
 * then send it to the screen.
 */
void ledshow(struct tm *dateinfo, int ampm)
{
    char       timestring[9];
    digit *where = get_display_location();
    int i;

    // TODO: handle "ampm" setting
    //       Write and test that part in show() before copying
    //       it here.


    /* Note that we have removed the colons from the format
     * string to make this part easier to write.
     */
    sprintf(timestring,
            "%02d%02d%02d",
            dateinfo->tm_hour,
            dateinfo->tm_min,
            dateinfo->tm_sec);

    for (i = 0; i < 6; i++) {
       switch ( timestring[i] ) {
           case ' ': where[i] = 0x00; break;
           case '1': where[i] = 0x24; break;
           case '2': where[i] = 0x5d; break;
           case '3': where[i] = 0x6d; break;
           case '4': where[i] = 0x2e; break;
           case '5': where[i] = 0x6b; break;
           case '6': where[i] = 0x7b; break;
           case '7': where[i] = 0x25; break;
           case '8': where[i] = 0x7f; break;
           case '9': where[i] = 0x2f; break;
           case '0': where[i] = 0x77; break;
       }
    }

    // colons + am/pm
    where[6] = 0x1f;

    display();
    fflush(stdout);
}

