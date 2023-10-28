import java.io.*;   
import java.lang.Math; 
import java.util.Scanner; 

public class RomanNumber  
{   
  int value(char m)   
  {   
    if (m == 'I')   
      return 1;   
    if (m == 'V')   
      return 5;   
    if (m == 'X')   
      return 10;   
    if (m == 'L')   
      return 50;   
    if (m == 'C')   
      return 100;   
    if (m == 'D')   
      return 500;   
    if (m == 'M')   
      return 1000;   
    return -1;   
  }   
  
  int convertRomanToInt(String s)   
  {   

    int sum = 0;   
 
    for (int i=0; i<s.length(); i++)   
    {   
      int s1 = value(s.charAt(i));   
 
      if (i+1 <s.length())   
      {   
        int s2 = value(s.charAt(i+1));   
 
        if (s1 >= s2)   
        {   
 
          sum = sum + s1;   
        }   
        else  
        {   
 
          sum = sum - s1;   
        }   
      }   
      else  
      {   
        sum = sum + s1;   
      }   
    }   

    return sum;   
  }   
    
  public static void main(String args[])   
  {   
    RomanNumber ob = new RomanNumber();  
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter Roman Number");
    String RomanNum = myObj.nextLine();
   
    System.out.println("The corresponding Integer value is: "+ob.convertRomanToInt(RomanNum));   
  }   
}