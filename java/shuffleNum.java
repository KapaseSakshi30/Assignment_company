import java.util.Random;
import java.util.Arrays;

 public class shuffleNum {
  
  public static void shuffleArray(int[] arr,int n) {

    Random randomObject = new Random();
    
    for(int i = 0; i < n; i++) {
      
      int random = randomObject.nextInt(n);
      
      int currentValue = arr[i];
      arr[i] = arr[random];
      arr[random] = currentValue;
    }
    
  }

  public static void main(String[] args) {
    int arr[] = {3, 7, 4, 1, 8, 9, 10};
    int z = arr.length;
    
    shuffleArray(arr, z);  
    System.out.println(Arrays.toString(arr));
  }
}