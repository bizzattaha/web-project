
import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
 
    // Kullanıcıdan veri alan bir örnek oluşturur
    // Kullanıcıdan standart veri alma
    Scanner scan = new Scanner(System.in);
    System.out.print("Bir sayı girin: ");
 
    // nextInt() tam sayı okur
    int sayi = scan.nextInt();
 
    // println() ekrana yazdırır.
    System.out.println("Girilen Sayı: " + sayi);
  
    }
}