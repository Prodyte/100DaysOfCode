#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;

const int MAX = 95;
const int MIN = 33;

char * createPassword();

int main()
{
    char * p = createPassword();    
    return 0;
}


char * createPassword()
{
    
    char x = ' ';
    int passwordLength = 0;
    int numOfPasswords = 0;

    cout << "Password Length : ";
    cin >> passwordLength;
    char * pwptr = new char[passwordLength];

    cout << "How many passwords should be generated?";
    cin >> numOfPasswords;
    
    int passwordcount = 0;

    do{
        for(int cnt = 0; cnt < passwordLength; cnt++)
        {
            x = (rand() % (MAX - MIN + 1)) + MIN;
            pwptr[cnt] = x;
            cout << pwptr[cnt];
        }
        cout << endl;
        passwordcount++;
        } while(passwordcount != numOfPasswords);

        return pwptr;
}
