#include <bits/stdc++.h>

using namespace std;

int main(){
	int test_cases;
	long int deposit,A_amount,month,B_amount,total;
	cin>>test_cases;
	int month_save[50];
	
	for( int i=1; i<=test_cases; i++) { 
		
		cin>>deposit>>A_amount>>month>>B_amount>>total;
		
		long int sum = deposit;
		int no_months = 0;

		int k=0;
		while(true){
		if(month == k){
			sum+=B_amount;
			k = 0;
			no_months++;
		}
		else{
			sum+=A_amount;
			no_months++; }
		if(sum>=total)
			break;
		k++;
		}

		month_save[i] = no_months;		
	}
	for(int j=1; j<=test_cases; j++){
		cout<<month_save[j]<<"\n";
	}
	
	
}
