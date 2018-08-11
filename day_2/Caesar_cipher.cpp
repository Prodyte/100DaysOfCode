#include<bits/stdc++.h>
using namespace std;

int main(){

    string message;
    char c;
    int key;
    short p;

    cout <<"Enter message: ";
    getline(cin, message);      
    
    cout <<"\nEnter the Key: "; 
    cin >> key;

    if(key < 1 || key >= 26){
        cout << "Invalid Key, Restart";
        return 0;
    }
    
    cout << "Crypted message : ";

    int j=0;
    while(message[j]){
        c = message[j];
        p = short(c) + key;
        if(islower(c)){
            if(p>122)
            p-=26;
        } else if (isupper(c)){
            if(p>90)
            p-=26;
        } else if(p==32 + key){
            p = 32 - key;
            j + 1;
        }
        cout << char(p);
        j++;
    }
    
    cout << "\nDecrypted message : "<< message;
    return 0;
}
